import { createReferenceCatalog } from "./catalog.js";
import { dictionarySuggestion } from "./index.js";
import { addSpellingReferences } from "./spelling.js";
import { readContentLayers } from "../reuse/content.js";

export function createReferenceProvider({
    referenceRoot,
    contentRoot,
    metadata,
    source,
    cacheRevision,
    log,
}) {
    const lookup = createReferenceCatalog(referenceRoot, "en", log);
    let content;
    return Object.freeze({
        id: "study-language-en:reference",
        capabilities: ["dictionary"],
        fields: ["pronunciation", "part_of_speech"],
        searchable: true,
        cacheRevision,
        metadata,
        supports: (schema, layer) =>
            schema?.id === "english" &&
            schema.language === "en" &&
            layer?.id === "words",
        async lookup({ layer, label }) {
            if (
                layer?.id !== "words" ||
                typeof label !== "string" ||
                label.length > 100 ||
                /[\u0000-\u001f]/u.test(label)
            )
                return [];
            const query = label.trim().normalize("NFC");
            const records = await lookup(query);
            const suggestions = records
                .flatMap((record) =>
                    record.meanings.map((meaning) =>
                        dictionarySuggestion(
                            record,
                            undefined,
                            record.word,
                            meaning.partOfSpeech,
                        ),
                    ),
                )
                .filter(Boolean);
            if (!suggestions.length) return [];
            content ??= readContentLayers(contentRoot, ["alphabet"]);
            addSpellingReferences(suggestions, (await content).get("alphabet"));
            return suggestions.map((suggestion) => ({
                ...suggestion,
                sourceUrl: source.url,
                provenance: `${source.id}:${encodeURIComponent(suggestion.label)}:${suggestion.fields.part_of_speech}`,
                fields: {
                    ...suggestion.fields,
                    dictionary_data: JSON.stringify({
                        provider: source.id,
                        sourceUrl: source.url,
                        license: source.license,
                    }),
                },
            }));
        },
    });
}
