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
    assert.equal(schema.version, 2);
    assert.equal(schema.language, "en");
    assert.equal(schema.metadata.labels.ja, "英語");
    assert.equal(alphabet.length, 26);
    assert.deepEqual(alphabet[0], {
        id: "en:char:a",
        label: "A",
        fields: { symbol: "A", romanization: "a" },
    });
});
