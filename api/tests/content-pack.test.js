import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("content pack declares valid records for the English schema", async () => {
    const manifest = JSON.parse(await readFile("data/manifest.json", "utf8"));
    const schema = JSON.parse(await readFile("data/schema.json", "utf8"));
    const alphabet = JSON.parse(
        await readFile("data/content/alphabet/common.json", "utf8"),
    );

    assert.equal(manifest.id, "english-core");
    assert.equal(manifest.namespace, "en");
    assert.equal(manifest.schema, "schema.json");
    assert.equal(schema.id, "english");
    assert.equal(schema.namespace, manifest.namespace);
    assert.equal(schema.version, 3);
    assert.equal(schema.language, "en");
    assert.equal(schema.metadata.labels.ja, "英語");
    assert.equal(alphabet.length, 26);
    assert.deepEqual(alphabet[0], {
        id: "en:char:a",
        label: "A",
        fields: { symbol: "A", romanization: "a" },
        references: [
            {
                entryId: "en:definition:letter:a",
                relation: "definition",
            },
        ],
    });
});

test("every seeded alphabet record resolves a module-owned definition string", async () => {
    const schema = JSON.parse(await readFile("data/schema.json", "utf8"));
    const alphabet = JSON.parse(
        await readFile("data/content/alphabet/common.json", "utf8"),
    );
    const definitions = JSON.parse(
        await readFile("data/content/definitions/common.json", "utf8"),
    );
    const localeDocuments = Object.fromEntries(
        await Promise.all(
            ["de", "en", "id", "ja"].map(async (locale) => [
                locale,
                await readFile(`ui/languages/${locale}/strings.xml`, "utf8"),
            ]),
        ),
    );
    const definitionLayer = schema.layers.find(
        (layer) => layer.semanticRole === "definition",
    );
    assert.deepEqual(definitionLayer.definitionLocalization, {
        stringKeyPrefix: "studyenglish:definitions",
        stringKeyField: "string_key",
        translationsField: "translations",
    });
    const definitionsById = new Map(
        definitions.map((definition) => [definition.id, definition]),
    );

    for (const letter of alphabet) {
        const definitionReference = letter.references.find(
            (reference) => reference.relation === "definition",
        );
        const definition = definitionsById.get(definitionReference?.entryId);
        assert.ok(definition, `${letter.id} definition`);
        assert.ok(
            definition.fields.string_key.startsWith(
                `${definitionLayer.definitionLocalization.stringKeyPrefix}:`,
            ),
            `${definition.id} string key prefix`,
        );
        for (const [locale, document] of Object.entries(localeDocuments)) {
            const translation = definition.fields.translations[locale];
            assert.ok(translation, `${definition.id} ${locale}`);
            assert.match(
                document,
                new RegExp(
                    `name="${definition.fields.string_key}"[^>]*>${translation.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}<`,
                ),
            );
        }
    }
});
