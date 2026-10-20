import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdirSync, readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));
const schema = read("data/library/schema.json");
// Field contract from the pre-expansion schema, cf4b862a4b065eac9d60d98e911c2518723cf793.
const fieldContract = {
    alphabet: {
        symbol: "string",
        pronunciation: "stringList",
        letter_sounds: "stringList",
        audio: "audio",
        stroke_pattern: "strokePattern",
        reference_images: "imageList",
    },
    composites: {
        pronunciation: "stringList",
        audio: "audio",
        stroke_pattern: "strokePattern",
        reference_images: "imageList",
    },
    definitions: {
        string_key: "string",
        translations: "localizedText",
        reference_images: "imageList",
    },
    words: {
        part_of_speech: "string",
        pronunciation: "stringList",
        dictionary_data: "string",
        audio: "audio",
        reference_images: "imageList",
    },
    particles: {
        function: "string",
        audio: "audio",
        reference_images: "imageList",
    },
    sentences: {
        audio: "audio",
        reference_images: "imageList",
    },
};
const originalFieldDigests = {
    alphabet:
        "0ad4a1f2f69eb225ef57231888fb9709a216ad8d85c93fe3418ea2b0704b9c9a",
    composites:
        "4a24990b8c668dab43c7f800107ec6e8f7b6d72c0db485ff86322f0a5d29f05f",
    definitions:
        "0caee6b71afdd0870cd73d256482d6c402868185f633d037e06a0bd471ba4842",
    words: "b79ffa04ee99dc94e2a38f729a7f3ca2210ebe2c7f812d5f42417958f0d3645a",
    particles:
        "56be113b2035811c9e07dcd3a90946c1a343fd51e2d2e2631aa200d9b457d651",
    sentences:
        "9d1786f3056a06c7cd72515df9fd5e8aab1be876ecb2f1681685712f5f56a7a7",
};
const originalWordShards = new Set([
    "beginner-001.json",
    "beginner-002.json",
    "beginner-003.json",
    "beginner-004.json",
    "beginner-005.json",
    "beginner-006.json",
    "beginner-007.json",
    "beginner-008.json",
    "beginner-009.json",
    "beginner-010.json",
    "capitalized-001.json",
    "common.json",
    "foodbody-1.json",
    "foodbody-2.json",
    "foodbody-3.json",
    "foodbody-4.json",
    "foodbody-5.json",
    "foodbody-6.json",
    "foodbody-7.json",
    "household-1.json",
    "household-2.json",
    "household-3.json",
    "inflected-001.json",
    "inflected-002.json",
    "inflected-003.json",
    "inflected-004.json",
    "inflected-005.json",
    "inflected-006.json",
    "inflected-007.json",
    "inflected-008.json",
    "inflected-009.json",
    "inflected-010.json",
    "inflected-011.json",
    "inflected-012.json",
    "sentence-structures-001.json",
    "sentence-structures-002.json",
    "sentence-structures-003.json",
    "sentence-structures-004.json",
]);
const records = schema.layers.flatMap((layer) =>
    readdirSync(`data/library/content/${layer.id}`)
        .filter((name) => name.endsWith(".json"))
        .flatMap((name) =>
            read(`data/library/content/${layer.id}/${name}`).map((record) => ({
                ...record,
                layer: layer.id,
                shard: name,
            })),
        ),
);
const byId = new Map(records.map((record) => [record.id, record]));
const vocabulary = records.filter(
    (record) =>
        record.layer === "words" &&
        record.class?.startsWith("lexical:") &&
        !originalWordShards.has(record.shard),
);

function validateFields(candidateSchema, candidates) {
    for (const layer of candidateSchema.layers) {
        assert.deepEqual(
            Object.fromEntries(
                layer.fields.map((field) => [field.id, field.type]),
            ),
            fieldContract[layer.id],
            `${layer.id}: unreviewed schema fields`,
        );
    }
    for (const layer of candidateSchema.layers) {
        assert.equal(
            createHash("sha256")
                .update(JSON.stringify(layer.fields))
                .digest("hex"),
            originalFieldDigests[layer.id],
            `${layer.id}: original field presentation changed`,
        );
    }
    for (const record of candidates) {
        for (const key of Object.keys(record.fields ?? {})) {
            assert.ok(
                Object.hasOwn(fieldContract[record.layer], key),
                `${record.id}: unexpected field ${key}`,
            );
        }
    }
}

function validateVocabulary(record, catalog = byId) {
    const role = record.class.split(":")[1];
    assert.ok(record.tags?.includes(role), `${record.id}: missing ${role} tag`);
    assert.ok(
        record.references?.some(
            ({ relation, entryId }) =>
                relation === "definitions" &&
                catalog.get(entryId)?.layer === "definitions",
        ),
        `${record.id}: missing definition`,
    );
    if (record.id.includes(":form-") || record.tags?.includes("inflected")) {
        assert.equal(
            record.hidden,
            true,
            `${record.id}: form must remain hidden`,
        );
        assert.ok(
            record.tags.includes("inflected"),
            `${record.id}: missing inflected tag`,
        );
        const parents = record.references.filter(
            ({ relation }) => relation === "inflected-from",
        );
        assert.equal(parents.length, 1, `${record.id}: missing base form`);
        const parent = catalog.get(parents[0].entryId);
        assert.ok(
            parent && !parent.hidden && parent.class === record.class,
            `${record.id}: invalid base form`,
        );
    } else {
        assert.notEqual(
            record.hidden,
            true,
            `${record.id}: lexical word must remain visible`,
        );
    }
}

test("schema and card fields retain the pre-expansion contract", () => {
    validateFields(schema, records);
});

test("schema contract rejects added usage fields even when declared", () => {
    const changed = structuredClone(schema);
    changed.layers
        .find(({ id }) => id === "words")
        .fields.push({ id: "usage_notes", type: "localizedText" });
    assert.throws(
        () => validateFields(changed, records),
        /unreviewed schema fields/,
    );
    const word = structuredClone(vocabulary.find(({ hidden }) => !hidden));
    word.fields.usage_notes = { en: "An authoring paragraph." };
    assert.throws(
        () => validateFields(schema, [word]),
        /unexpected field usage_notes/,
    );
});

test("expanded vocabulary preserves lexical roles, definitions and form parents", () => {
    for (const word of vocabulary) validateVocabulary(word);
});

test("visibility and role regressions are rejected", () => {
    const word = structuredClone(vocabulary.find(({ hidden }) => !hidden));
    word.hidden = true;
    assert.throws(() => validateVocabulary(word), /must remain visible/);
    delete word.hidden;
    word.tags = word.tags.filter((tag) => tag !== word.class.split(":")[1]);
    assert.throws(() => validateVocabulary(word), /missing .* tag/);
});

test("every expanded visible word remains selectable in a starter deck", () => {
    const decks = read("data/starter-decks.json");
    const covered = new Set(
        decks.flatMap(({ sourceRecordIds }) => sourceRecordIds),
    );
    for (const word of vocabulary.filter(({ hidden }) => !hidden)) {
        assert.ok(covered.has(word.id), `${word.id}: no starter deck`);
        const excludedTags = schema.layers.flatMap((layer) =>
            (layer.cardConstructor?.tag_carousels ?? []).map(({ tag }) => tag),
        );
        assert.ok(
            !word.tags.some((tag) => excludedTags.includes(tag)),
            `${word.id}: excluded from ordinary browsing`,
        );
    }
});

test("hidden inflections reject the original missing-parent and missing-tag defects", () => {
    const form = structuredClone(
        vocabulary.find(({ id }) => id === "en:word:form-animals-rabbits"),
    );
    form.references = form.references.filter(
        ({ relation }) => relation !== "inflected-from",
    );
    assert.throws(() => validateVocabulary(form), /missing base form/);
    const untagged = structuredClone(
        vocabulary.find(({ id }) => id === "en:word:form-animals-rabbits"),
    );
    untagged.tags = untagged.tags.filter((tag) => tag !== "inflected");
    assert.throws(() => validateVocabulary(untagged), /missing inflected tag/);
});
