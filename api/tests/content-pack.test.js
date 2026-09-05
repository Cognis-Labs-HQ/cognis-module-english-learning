import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { ingestEnglishContentPack } from "../index.js";

test("ingests the declarative English content pack through study:library", async () => {
    const roots = [];
    const library = {
        async ingestContentPack(root) {
            roots.push(root);
            return {
                packId: "english-core",
                schemaId: "english",
                recordCount: 26,
                unchanged: false,
            };
        },
    };

    const receipt = await ingestEnglishContentPack(library, process.cwd());

    assert.deepEqual(roots, [path.join(process.cwd(), "data")]);
    assert.equal(receipt.schemaId, "english");
    assert.equal(receipt.recordCount, 26);
});

test("content pack declares valid records for the English schema", async () => {
    const manifest = JSON.parse(await readFile("data/manifest.json", "utf8"));
    const schema = JSON.parse(await readFile("data/schema.json", "utf8"));
    const alphabet = JSON.parse(
        await readFile("data/content/alphabet/common.json", "utf8"),
    );

    assert.equal(manifest.id, "english-core");
    assert.equal(manifest.schema, "schema.json");
    assert.equal(schema.id, "english");
    assert.equal(schema.language, "en");
    assert.equal(alphabet.length, 26);
    assert.deepEqual(alphabet[0], {
        id: "en:char:a",
        label: "A",
        fields: { symbol: "A", romanization: "a" },
    });
});
