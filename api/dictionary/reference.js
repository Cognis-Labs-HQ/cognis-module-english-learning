import { mergeReferenceRecords } from "./reference-records.js";
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
    const lookup = createReferenceCatalog(
        referenceRoot,
        { normalization: "NFC", component: "study-language-en" },
        log,
    );
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
            const suggestions = mergeReferenceRecords(records)
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
            content ??= readContentLayers(contentRoot, ["alphabet"]).catch(
                (error) => {
                    content = undefined;
                    log?.(
                        "error",
                        "English reference content could not be loaded.",
                        {
                            component: "study-language-en",
                            operation: "load_reference_content",
                            errorName: error?.name ?? "Error",
                        },
                    );
                    throw new Error("english_reference_content_unavailable");
                },
            );
            addSpellingReferences(suggestions, (await content).get("alphabet"));
            return suggestions
                .filter((suggestion) =>
                    suggestion.references?.some(
                        ({ relation }) => relation === "spelling",
                    ),
                )
                .map((suggestion) => ({
                    ...suggestion,
                    sourceUrl: source.url,
                    provenance: `${source.id}:${encodeURIComponent(suggestion.label)}:${suggestion.fields.part_of_speech}`,
                    fields: {
                        ...suggestion.fields,
                        dictionary_data: JSON.stringify({
                            provider: source.id,
                            sourceUrl: source.url,
                            license: source.license,
                            records,
                        }),
                    },
                }));
        },
    });
}
