import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => JSON.parse(readFileSync(path, "utf8"));
const words = read("data/library/content/words/belongings-001.json");
const examples = read("data/library/content/sentences/belongings-001.json");

test("eyewear retains plural agreement and wristwatch retains its noun sense", () => {
    const glasses = words.find(({ label }) => label === "glasses");
    assert.equal(glasses.class, "lexical:noun");
    assert.equal(glasses.fields.part_of_speech, "noun");
    const example = examples.find(({ label }) => label.includes("glasses"));
    assert.equal(example.label, "The glasses are on the table.");
    assert.ok(
        example.references.some(
            ({ entryId, transformation }) =>
                entryId === "en:word:be" &&
                transformation?.setId === "english-copula" &&
                transformation.path.join("/") === "are",
        ),
    );
    assert.equal(
        words.find(({ label }) => label === "watch").class,
        "lexical:noun",
    );
});
