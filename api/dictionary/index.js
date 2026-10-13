import { readContentLayers } from "../reuse/content.js";

const PROVIDER_ID = "study-language-en:dictionary";
const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const MAX_DEFINITIONS = 10;
const WORD_PATTERN = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
const PARTS_OF_SPEECH = new Set([
    "noun",
    "verb",
    "adjective",
    "adverb",
    "pronoun",
    "article",
    "numeral",
    "copula",
    "preposition",
    "conjunction",
    "interjection",
]);

function nativeSuggestion(record, definitions) {
    return {
        label: record.label,
        class: record.class,
        tags: structuredClone(record.tags ?? []),
        fields: structuredClone(record.fields),
        references: structuredClone(record.references),
        definitions: (record.references ?? [])
            .filter(({ relation }) => relation === "definitions")
            .map(({ entryId }) => definitions.get(entryId))
            .filter(Boolean)
            .map(({ fields }) => ({
                translations: structuredClone(fields.translations),
            })),
        provenance: `cognis-english:${record.id}`,
        confidence: 1,
    };
}

function dictionarySuggestion(record, native, query) {
    if (typeof record?.word !== "string" || !Array.isArray(record.meanings))
        throw new Error("english_dictionary_response_invalid");
    if (record.word.toLowerCase() !== query.toLowerCase()) return null;
    const definitions = [];
    const seen = new Set();
    const parts = new Set();
    for (const meaning of record.meanings) {
        if (
            typeof meaning?.partOfSpeech !== "string" ||
            !Array.isArray(meaning.definitions)
        )
            throw new Error("english_dictionary_response_invalid");
        const partOfSpeech =
            meaning.partOfSpeech === "determiner"
                ? "article"
                : meaning.partOfSpeech === "proper noun"
                  ? "noun"
                  : meaning.partOfSpeech;
        if (PARTS_OF_SPEECH.has(partOfSpeech)) parts.add(partOfSpeech);
        for (const entry of meaning.definitions) {
            if (typeof entry?.definition !== "string")
                throw new Error("english_dictionary_response_invalid");
            const definition = entry.definition.trim();
            if (!definition || definition.length > 2000 || seen.has(definition))
                continue;
            seen.add(definition);
            if (definitions.length < MAX_DEFINITIONS)
                definitions.push({ translations: { en: definition } });
        }
    }
    if (!definitions.length) return null;
    const readings = [
        ...new Set(
            [
                ...(native?.fields?.pronunciation ?? []),
                record.phonetic,
                ...(Array.isArray(record.phonetics)
                    ? record.phonetics.map((value) => value?.text)
                    : []),
            ]
                .filter(
                    (value) =>
                        typeof value === "string" &&
                        value.trim() &&
                        value.length <= 100,
                )
                .map((value) => value.trim()),
        ),
    ].slice(0, 10);
    const partOfSpeech =
        native?.fields?.part_of_speech ?? [...parts][0] ?? "noun";
    // Only curated paradigms have authoritative inflections and matching IPA.
    const tags = [...new Set([...(native?.tags ?? []), ...parts])];
    return {
        label: native?.label ?? record.word,
        class: native?.class ?? `lexical:${partOfSpeech}`,
        tags,
        fields: {
            part_of_speech: partOfSpeech,
            dictionary_data: JSON.stringify({
                provider: PROVIDER_ID,
                sourceUrl: `${ENDPOINT}${encodeURIComponent(query)}`,
                license: {
                    name:
                        typeof record.license?.name === "string"
                            ? record.license.name.slice(0, 200)
                            : "",
                    url:
                        typeof record.license?.url === "string" &&
                        /^https:\/\/creativecommons\.org\//.test(
                            record.license.url,
                        )
                            ? record.license.url
                            : "",
                },
                sourceUrls: Array.isArray(record.sourceUrls)
                    ? record.sourceUrls
                          .filter(
                              (url) =>
                                  typeof url === "string" &&
                                  /^https:\/\/en\.wiktionary\.org\//.test(url),
                          )
                          .slice(0, 10)
                    : [],
            }),
            ...(readings.length
                ? { pronunciation: readings }
                : native?.fields?.pronunciation
                  ? {
                        pronunciation: structuredClone(
                            native.fields.pronunciation,
                        ),
                    }
                  : {}),
        },
        ...(native ? { references: structuredClone(native.references) } : {}),
        definitions,
        sourceUrl: `${ENDPOINT}${encodeURIComponent(query)}`,
        provenance: `free-dictionary:${encodeURIComponent(query)}`,
        confidence: 1,
    };
}

export function createDictionaryProvider({
    contentRoot,
    cacheRevision,
    fetchImplementation = globalThis.fetch,
    log,
}) {
    let contentPromise;
    async function content() {
        contentPromise ??= readContentLayers(contentRoot, [
            "words",
            "definitions",
            "alphabet",
        ]).catch((error) => {
            contentPromise = undefined;
            log?.("error", "English dictionary content could not be loaded.", {
                component: "study-language-en",
                operation: "load_dictionary_content",
                errorName: error instanceof Error ? error.name : "Error",
            });
            throw new Error("english_dictionary_content_unavailable");
        });
        return contentPromise;
    }

    return Object.freeze({
        id: PROVIDER_ID,
        capabilities: ["dictionary"],
        fields: ["pronunciation", "part_of_speech"],
        searchable: true,
        cacheRevision,
        metadata: {
            labels: {
                en: "Free Dictionary",
                de: "Freies Wörterbuch",
                id: "Kamus Gratis",
                ja: "無料辞書",
            },
        },
        supports(schema, layer) {
            return (
                schema?.id === "english" &&
                schema.language === "en" &&
                layer?.id === "words"
            );
        },
        async lookup({ layer, label }) {
            const query =
                typeof label === "string" ? label.trim().normalize("NFC") : "";
            if (
                layer?.id !== "words" ||
                !WORD_PATTERN.test(query) ||
                query.length > 100
            )
                return [];
            const layers = await content();
            const native = layers
                .get("words")
                .find(
                    (record) =>
                        !record.hidden &&
                        record.label.toLowerCase() === query.toLowerCase(),
                );
            const definitions = new Map(
                layers.get("definitions").map((record) => [record.id, record]),
            );
            const packaged = native
                ? [nativeSuggestion(native, definitions)]
                : [];
            if (typeof fetchImplementation !== "function") return packaged;
            try {
                const response = await fetchImplementation(
                    `${ENDPOINT}${encodeURIComponent(query)}`,
                    {
                        headers: { accept: "application/json" },
                        signal: AbortSignal.timeout(15000),
                        redirect: "error",
                    },
                );
                if (response.status === 404) return packaged;
                if (!response.ok)
                    throw new Error("english_dictionary_request_failed");
                const text = await response.text();
                if (text.length > 1_000_000)
                    throw new Error("english_dictionary_response_too_large");
                const records = JSON.parse(text);
                if (!Array.isArray(records))
                    throw new Error("english_dictionary_response_invalid");
                const suggestions = records
                    .map((record) =>
                        dictionarySuggestion(record, native, query),
                    )
                    .filter(Boolean);
                const alphabet = new Map(
                    layers
                        .get("alphabet")
                        .map((record) => [record.label, record.id]),
                );
                for (const suggestion of suggestions) {
                    if (suggestion.references) continue;
                    const letters = [...suggestion.label.replaceAll(" ", "")];
                    if (letters.every((letter) => alphabet.has(letter)))
                        suggestion.references = letters.map(
                            (letter, position) => ({
                                entryId: alphabet.get(letter),
                                relation: "spelling",
                                position,
                            }),
                        );
                }
                return suggestions.length ? suggestions : packaged;
            } catch (error) {
                log?.("error", "English dictionary lookup failed.", {
                    component: "study-language-en",
                    operation: "lookup_dictionary",
                    errorName: error instanceof Error ? error.name : "Error",
                });
                throw new Error("english_dictionary_lookup_failed");
            }
        },
    });
}
