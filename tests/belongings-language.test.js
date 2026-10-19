import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));
const words = read("data/library/content/words/belongings-001.json");
const examples = read("data/library/content/sentences/belongings-001.json");

test("eyewear retains plural agreement and wristwatch retains its noun sense", () => {
    const glasses = words.find(({ label }) => label === "glasses");
    assert.equal(glasses.class, "lexical:noun");
    assert.match(glasses.fields.usage_notes.en, /plural agreement/);
    const example = examples.find(({ label }) => label.includes("glasses"));
    assert.equal(example.label, "The glasses are on the table.");
    assert.ok(
        example.references.some(
            ({ entryId }) => entryId === "en:word:form-english-be-are",
        ),
    );
    const review = read("authoring/reviews/belongings-sentences.json").find(
        ({ entryId }) => entryId === example.id,
    );
    assert.equal(review.fullScaleSamples, 0);
    assert.ok(
        review.sourceAudioEvidence.every(
            ({ voiceId }) => voiceId === "gJx1vCzNCD1EQHT212Ls",
        ),
    );
    assert.equal(
        words.find(({ label }) => label === "watch").class,
        "lexical:noun",
    );
});
