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
    assert.equal(schema.version, 11);
    assert.equal(schema.language, "en");
    assert.equal(schema.metadata.labels.ja, "英語");
    assert.equal(alphabet.length, 52);
    assert.deepEqual(alphabet[0], {
        id: "en:char:a",
        label: "A",
        fields: {
            symbol: "A",
            pronunciation: ["ay"],
            audio: "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=A&tl=en",
        },
        references: [
            {
                entryId: "en:definition:letter:a",
                relation: "definition",
            },
            {
                entryId: "en:char:a-lowercase",
                relation: "variant-of",
            },
        ],
    });
});

test("content follows the current writing-unit and sentence contracts", async () => {
    const schema = JSON.parse(await readFile("data/schema.json", "utf8"));
    const alphabet = JSON.parse(
        await readFile("data/content/alphabet/common.json", "utf8"),
    );
    const composites = JSON.parse(
        await readFile("data/content/composites/common.json", "utf8"),
    );
    const words = JSON.parse(
        await readFile("data/content/words/common.json", "utf8"),
    );
    const particles = JSON.parse(
        await readFile("data/content/particles/common.json", "utf8"),
    );
    const sentences = JSON.parse(
        await readFile("data/content/sentences/common.json", "utf8"),
    );
    const alphabetLayer = schema.layers.find(
        (layer) => layer.semanticRole === "atomicWritingUnit",
    );
    assert.deepEqual(
        schema.layers.filter(({ minimal }) => minimal).map(({ id }) => id),
        ["alphabet"],
    );
    assert.equal(
        alphabetLayer.fields.find((field) => field.id === "pronunciation")
            ?.type,
        "stringList",
    );
    assert.equal(
        alphabetLayer.fields.find((field) => field.id === "audio")?.type,
        "audio",
    );
    assert.ok(
        alphabet.every(
            (letter) =>
                Array.isArray(letter.fields.pronunciation) &&
                letter.fields.pronunciation.length > 0 &&
                letter.fields.audio.startsWith("https://"),
        ),
    );
    const lowercaseA = alphabet.find(({ id }) => id === "en:char:a-lowercase");
    assert.equal(lowercaseA?.label, "a");
    assert.equal(lowercaseA?.displayId, 1);
    assert.equal(
        lowercaseA?.references.some(
            ({ relation }) => relation === "variant-of",
        ),
        false,
    );
    assert.deepEqual(
        alphabet[0].references.find(
            ({ relation }) => relation === "variant-of",
        ),
        { entryId: "en:char:a-lowercase", relation: "variant-of" },
    );
    const variantRelationship = alphabetLayer.relationships.find(
        ({ id }) => id === "variant-of",
    );
    assert.equal(variantRelationship?.variant, true);
    assert.equal(variantRelationship?.variantDirection, "right");
    assert.deepEqual(alphabetLayer.grid, {
        rowSize: 13,
        items: Array.from({ length: 26 }, (_, index) => index + 1),
    });
    const compositeLayer = schema.layers.find(
        (layer) => layer.semanticRole === "compoundWritingUnit",
    );
    const composition = compositeLayer.relationships.find(
        ({ id }) => id === "composition",
    );
    assert.equal(composition.resolverRole, "grapheme");
    assert.equal(composition.targetLayer, "alphabet");
    for (const layerId of ["words", "particles", "sentences"]) {
        assert.equal(
            schema.layers.find(({ id }) => id === layerId)?.displayDefinition,
            true,
            layerId,
        );
    }
    assert.equal(composites.length, 3);
    assert.deepEqual(
        composites[0].references.map(({ relation }) => relation),
        ["composition", "composition", "definitions"],
    );
    assert.equal(
        schema.layers.find((layer) => layer.id === "particles")?.semanticRole,
        "particle",
    );
    const partOfSpeech = schema.layers
        .find((layer) => layer.id === "words")
        ?.fields.find((field) => field.id === "part_of_speech");
    assert.deepEqual(
        {
            group: partOfSpeech?.detail?.group,
            exclusive: partOfSpeech?.detail?.exclusive,
            required: partOfSpeech?.detail?.required,
            defaultTag: partOfSpeech?.detail?.defaultTag,
        },
        {
            group: "part-of-speech",
            exclusive: true,
            required: true,
            defaultTag: "verb",
        },
    );
    assert.ok(words.length > 0);
    assert.ok(particles.length > 0);
    assert.ok(sentences.length > 0);
    const run = words.find(({ id }) => id === "en:word:run");
    assert.deepEqual(
        run?.references
            .filter(({ relation }) => relation === "spelling")
            .map(({ entryId }) => entryId),
        ["en:char:r-lowercase", "en:char:u-lowercase", "en:char:n-lowercase"],
    );
    assert.deepEqual(
        sentences[0].references
            .filter(({ relation }) => relation !== "definitions")
            .map(({ relation, position }) => ({ relation, position })),
        [
            { relation: "words", position: 0 },
            { relation: "words", position: 1 },
            { relation: "particles", position: 2 },
            { relation: "words", position: 3 },
        ],
    );
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
