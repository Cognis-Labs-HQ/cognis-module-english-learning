import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));

test("polite Please uses its own sense and keeps the existing verb intact", () => {
    const words = read("data/library/content/words/requests-001.json");
    const courtesy = words.find(({ id }) => id === "en:word:requests-please");
    assert.equal(courtesy.class, "lexical:interjection");
    assert.equal(courtesy.fields.part_of_speech, "interjection");
    const verb = read("data/library/content/words/beginner-009.json").find(
        ({ id }) => id === "en:word:please",
    );
    assert.equal(verb.class, "lexical:verb");
    assert.notDeepEqual(courtesy.references, verb.references);
    const sentence = read(
        "data/library/content/sentences/requests-001.json",
    ).find(({ id }) => id === "en:sentence:requests-example-please");
    assert.equal(sentence.label, "Please speak slowly.");
    assert.equal(sentence.references[0].entryId, courtesy.id);
    assert.equal(
        sentence.references.some(({ entryId }) => entryId === verb.id),
        false,
    );
});
