import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readContentLayers } from "../api/reuse/content.js";

const schema = JSON.parse(await readFile("data/library/schema.json", "utf8"));
const manifest = JSON.parse(
    await readFile("data/library/manifest.json", "utf8"),
);
const layers = await readContentLayers(
    "data/library/content",
    schema.layers.map(({ id }) => id),
);
const entries = new Map(
    [...layers.values()].flat().map((record) => [record.id, record]),
);

function layerSchema(id) {
    return schema.layers.find((layer) => layer.id === id);
}

function assertStrokePattern(pattern) {
    assert.equal(pattern.coordinateSystem, "normalized");
    assert.ok(pattern.strokes.length > 0);
    assert.equal(
        pattern.groups.reduce((total, count) => total + count, 0),
        pattern.strokes.length,
    );
    assert.equal(pattern.groups.length, pattern.columns);
    for (const stroke of pattern.strokes) {
        assert.ok(stroke.points.length >= 2);
        for (const [index, point] of stroke.points.entries()) {
            assert.ok(point.x >= 0 && point.x <= 1);
            assert.ok(point.y >= 0 && point.y <= 1);
            if (index) assert.ok(point.time > stroke.points[index - 1].time);
        }
    }
}

test("pack declares a stable English namespace and usable provider schema", () => {
    assert.equal(manifest.id, "english-core");
    assert.equal(manifest.namespace, schema.namespace);
    assert.equal(manifest.protected, true);
    assert.equal(schema.id, "english");
    assert.equal(schema.language, "en");
    assert.equal(schema.version, 54);
    assert.equal(manifest.version, "24.0.56");
    assert.equal(schema.metadata.provider.moduleId, "study-language-en");
    assert.equal(entries.size, [...layers.values()].flat().length);
    for (const layer of schema.layers) {
        assert.ok(layer.navigationSlug);
        for (const relation of layer.relationships ?? []) {
            assert.ok(layerSchema(relation.targetLayer));
            if (relation.targetLayer === "definitions")
                assert.ok(relation.maximum <= 10);
        }
    }
});

test("all packaged references resolve to the declared target layer and bounded relationship", () => {
    const sourceLayers = new Map(
        [...layers].flatMap(([layer, records]) =>
            records.map(({ id }) => [id, layer]),
        ),
    );
    for (const [layer, records] of layers) {
        const relations = new Map(
            (layerSchema(layer).relationships ?? []).map((relation) => [
                relation.id,
                relation,
            ]),
        );
        for (const record of records) {
            assert.match(record.id, /^en:/);
            for (const reference of record.references ?? []) {
                const relation = relations.get(reference.relation);
                assert.ok(relation, `${record.id}: ${reference.relation}`);
                assert.ok(
                    entries.has(reference.entryId),
                    `${record.id}: ${reference.entryId}`,
                );
                assert.equal(
                    sourceLayers.get(reference.entryId),
                    relation.targetLayer,
                );
            }
            for (const relation of relations.values()) {
                const count = (record.references ?? []).filter(
                    ({ relation: name }) => name === relation.id,
                ).length;
                assert.ok(count >= (relation.minimum ?? 0), record.id);
                if (relation.maximum)
                    assert.ok(count <= relation.maximum, record.id);
            }
            for (const field of layerSchema(layer).fields ?? []) {
                if (field.required)
                    assert.ok(
                        record.fields?.[field.id] !== undefined,
                        `${record.id}: ${field.id}`,
                    );
            }
        }
    }
});

test("alphabet variants and letter combinations carry complete normalized writing guides", () => {
    assert.equal(layers.get("alphabet").length, 52);
    assert.equal(layers.get("composites").length, 17);
    const variant = layerSchema("alphabet").relationships.find(
        ({ id }) => id === "variant-of",
    );
    assert.equal(variant.child, true);
    assert.equal(variant.variant, true);
    for (const layer of ["alphabet", "composites"]) {
        for (const record of layers.get(layer)) {
            assertStrokePattern(record.fields.stroke_pattern);
            assert.ok(record.fields.pronunciation.length);
            if (layer === "composites") {
                const spelling = record.references
                    .filter(({ relation }) => relation === "composition")
                    .toSorted((left, right) => left.position - right.position)
                    .map(({ entryId }) => entries.get(entryId).label)
                    .join("");
                assert.equal(spelling, record.label);
                assert.equal(
                    record.fields.stroke_pattern.columns,
                    [...record.label].length,
                );
            }
        }
    }
});

test("beginner vocabulary and grammar resolve genuine localized meanings and spellings", async () => {
    const vocabulary = layers.get("words").filter(({ hidden }) => !hidden);
    assert.equal(vocabulary.length, 345);
    assert.equal(layers.get("particles").length, 21);
    for (const record of vocabulary) {
        const spellings = record.references
            .filter(({ relation }) => relation === "spelling")
            .toSorted((left, right) => left.position - right.position)
            .map(({ entryId }) => entries.get(entryId).label)
            .join("");
        assert.equal(spellings, record.label.replaceAll(" ", ""));
        assert.ok(
            record.fields.pronunciation.every((reading) =>
                /^\/.+\/$/.test(reading),
            ),
        );
    }
    const resources = Object.fromEntries(
        await Promise.all(
            ["en", "de", "id", "ja"].map(async (language) => [
                language,
                await readFile(`ui/languages/${language}/strings.xml`, "utf8"),
            ]),
        ),
    );
    for (const definition of layers.get("definitions")) {
        assert.equal(definition.hidden, true);
        for (const language of Object.keys(resources)) {
            assert.ok(definition.fields.translations[language]);
            assert.ok(
                resources[language].includes(
                    `name="${definition.fields.string_key}"`,
                ),
            );
        }
    }
    for (const record of layers.get("particles"))
        assert.equal(record.editable, false);
});

test("all published sentences preserve every ordered word, inflection, and punctuation", () => {
    assert.equal(layers.get("sentences").length, 285);
    for (const sentence of layers.get("sentences")) {
        const constituents = sentence.references
            .filter(({ relation }) => relation !== "definitions")
            .toSorted((left, right) => left.position - right.position);
        assert.deepEqual(
            constituents.map(({ position }) => position),
            constituents.map((_reference, index) => index),
        );
        const text = constituents
            .map(({ entryId }) => entries.get(entryId).label)
            .join("");
        assert.equal(text, sentence.label.replaceAll(/\s/gu, ""), sentence.id);
    }
});

test("curated transformations cover irregular verbs and contextual IPA", () => {
    assert.equal(schema.transformSets.length, 205);
    const findForm = (word, ruleId) =>
        schema.transformSets
            .find(({ id }) => id === `english-${word}`)
            .rules.find(({ id }) => id === ruleId);
    assert.equal(findForm("run", "past").append, "ran");
    assert.equal(findForm("run", "present-participle").append, "running");
    assert.equal(findForm("read", "past").pronunciation.append, "/red/");
    assert.equal(findForm("study", "third-person").append, "studies");
    assert.equal(findForm("be", "are").append, "are");
    assert.equal(findForm("good", "comparative").append, "better");
    const roots = layers.get("words").filter(({ hidden }) => !hidden);
    for (const set of schema.transformSets) {
        const targets = roots.filter(({ tags }) =>
            set.matchTags.every((tag) => tags.includes(tag)),
        );
        assert.equal(targets.length, 1, set.id);
        for (const rule of set.rules) {
            assert.equal(rule.removeSuffix, targets[0].label);
            assert.equal(
                rule.pronunciation.removeSuffix,
                targets[0].fields.pronunciation[0],
            );
            assert.ok(rule.pronunciation.append.startsWith("/"));
            assert.equal(Object.keys(rule.metadata.labels).length, 4);
        }
    }
});

test("starter decks use visible records from the published schema", async () => {
    const decks = JSON.parse(await readFile("data/starter-decks.json", "utf8"));
    assert.equal(decks.length, 72);
    for (const deck of decks) {
        assert.equal(deck.schemaId, schema.id);
        assert.equal(Object.keys(deck.name).length, 4);
        assert.ok(deck.sourceRecordIds.length >= 3);
        for (const id of deck.sourceRecordIds) {
            assert.ok(entries.has(id), id);
            assert.ok(!entries.get(id).hidden, id);
        }
    }
});

test("composer selection options have unique values in every layer", () => {
    for (const layer of schema.layers) {
        for (const field of layer.fields ?? []) {
            const options = field.input?.options;
            if (!Array.isArray(options)) continue;
            assert.equal(
                new Set(options.map(({ value }) => value)).size,
                options.length,
                `${layer.id}.${field.id}`,
            );
        }
    }
});

test("writing decks preserve complete alphabets and validated spelling patterns", async () => {
    const decks = JSON.parse(await readFile("data/starter-decks.json", "utf8"));
    const lower = decks.find(({ key }) => key === "alphabet-basics");
    const upper = decks.find(({ key }) => key === "uppercase-alphabet");
    assert.equal(
        lower.sourceRecordIds.map((id) => entries.get(id).label).join(""),
        "abcdefghijklmnopqrstuvwxyz",
    );
    assert.equal(
        upper.sourceRecordIds.map((id) => entries.get(id).label).join(""),
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    );
    for (const deck of decks) {
        assert.equal(
            new Set(deck.sourceRecordIds).size,
            deck.sourceRecordIds.length,
        );
        for (const id of deck.sourceRecordIds) {
            const entry = entries.get(id);
            if (entry.fields?.stroke_pattern)
                assertStrokePattern(entry.fields?.stroke_pattern);
        }
    }
});

test("English exposes the shared Study Explore layers with opinionated navigation slugs", () => {
    const learnerLayers = schema.layers.filter((layer) =>
        ["alphabet", "composites", "words", "sentences"].includes(layer.id),
    );
    assert.deepEqual(
        learnerLayers.map((layer) => layer.navigationSlug),
        ["alphabet", "letter-combinations", "vocabulary", "sentences"],
    );
    assert.deepEqual(
        learnerLayers.map((layer) => layer.semanticRole),
        [
            "atomicWritingUnit",
            "compoundWritingUnit",
            "lexicalUnit",
            "orderedLexicalSequence",
        ],
    );
});

test("alphabet uses letter names and separates speech sounds without blank cells", () => {
    const alphabet = schema.layers.find(({ id }) => id === "alphabet");
    assert.equal(alphabet.grid.items.length, 26);
    assert.ok(alphabet.grid.items.every((item) => !item.blank));
    for (const card of layers.get("alphabet")) {
        assert.ok(
            card.fields.pronunciation.every((name) => !name.startsWith("/")),
        );
        assert.ok(Array.isArray(card.fields.letter_sounds));
    }
});

test("plural opt-in exposes dogs from dog and leaves mass nouns without a plural family", () => {
    const dog = entries.get("en:word:dog");
    const set = schema.transformSets.find(
        (set) =>
            set.optInTag === "plural" &&
            set.matchTags.every((tag) => dog.tags.includes(tag)),
    );
    assert.ok(dog.tags.includes(set.optInTag));
    assert.equal(set.rules[0].append, "dogs");
    const water = [...entries.values()].find(
        (card) => card.label === "water" && !card.hidden,
    );
    assert.ok(!water.tags.includes("plural"));
    const sentence = schema.layers.find(({ id }) => id === "sentences");
    assert.ok(
        sentence.cardConstructor.tag_carousels.some(
            ({ tag }) => tag === "punctuation",
        ),
    );
});

test("sentence cards require at least two words and preserve precise IPA", () => {
    const words = layerSchema("sentences").relationships.find(
        ({ id }) => id === "words",
    );
    assert.equal(words.minimum, 2);
    for (const sentence of layers.get("sentences")) {
        assert.ok(
            sentence.label.trim().split(/\s+/u).length >= 2,
            sentence.label,
        );
        assert.ok(
            sentence.references.filter(({ relation }) => relation === "words")
                .length >= 2,
            sentence.id,
        );
    }
    assert.deepEqual(entries.get("en:word:language").fields.pronunciation, [
        "/ˈlæŋɡwɪdʒ/",
    ]);
});

test("plural derivation belongs to singular nouns and houses has voiced IPA", () => {
    const books = entries.get("en:word:books");
    assert.ok(
        !schema.transformSets.some(({ matchTags }) =>
            matchTags.every((tag) => books.tags.includes(tag)),
        ),
    );
    const book = schema.transformSets.find(({ id }) => id === "noun-book");
    assert.equal(book.rules[0].append, "books");
    const house = schema.transformSets.find(({ id }) => id === "noun-house");
    assert.equal(house.rules[0].append, "houses");
    assert.equal(house.rules[0].pronunciation.append, "/haʊzɪz/");
});
