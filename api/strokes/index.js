import { readContentLayers } from "../reuse/content.js";

export function createStrokePatternProvider({
    contentRoot,
    cacheRevision,
    log,
}) {
    let patternsPromise;
    async function patterns() {
        patternsPromise ??= readContentLayers(contentRoot, [
            "alphabet",
            "composites",
        ])
            .then(
                (layers) =>
                    new Map(
                        [...layers].flatMap(([layer, records]) =>
                            records.map((record) => [
                                `${layer}\u0000${record.label}`,
                                record,
                            ]),
                        ),
                    ),
            )
            .catch((error) => {
                patternsPromise = undefined;
                log?.("error", "English writing guides could not be loaded.", {
                    component: "study-language-en",
                    operation: "load_stroke_patterns",
                    errorName: error instanceof Error ? error.name : "Error",
                });
                throw new Error("english_stroke_patterns_unavailable");
            });
        return patternsPromise;
    }

    return Object.freeze({
        id: "study-language-en:stroke-patterns",
        capabilities: ["strokePattern"],
        fields: ["stroke_pattern"],
        cacheRevision,
        metadata: {
            labels: {
                en: "English Print-Letter Guides",
                de: "Englische Druckschrift-Vorlagen",
                id: "Panduan Huruf Cetak Inggris",
                ja: "英語の活字体ガイド",
            },
        },
        supports(schema, layer) {
            return (
                schema?.id === "english" &&
                schema.language === "en" &&
                ["alphabet", "composites"].includes(layer?.id) &&
                layer.fields?.some(
                    ({ id, type }) =>
                        id === "stroke_pattern" && type === "strokePattern",
                )
            );
        },
        async lookup({ layer, label }) {
            if (
                !["alphabet", "composites"].includes(layer?.id) ||
                typeof label !== "string"
            )
                return [];
            const record = (await patterns()).get(
                `${layer.id}\u0000${label.trim().normalize("NFC")}`,
            );
            return record
                ? [
                      {
                          fields: {
                              stroke_pattern: structuredClone(
                                  record.fields.stroke_pattern,
                              ),
                          },
                          provenance: `cognis-english:${record.id}`,
                          confidence: 1,
                      },
                  ]
                : [];
        },
    });
}
