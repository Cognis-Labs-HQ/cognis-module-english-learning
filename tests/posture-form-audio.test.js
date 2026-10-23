import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/posture-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    sit: [
        ["third-person", "sits", "/sɪts/"],
        ["past", "sat", "/sæt/"],
        ["present-participle", "sitting", "/ˈsɪtɪŋ/"],
        ["past-participle", "sat", "/sæt/"],
    ],
    stand: [
        ["third-person", "stands", "/stændz/"],
        ["past", "stood", "/stʊd/"],
        ["present-participle", "standing", "/ˈstændɪŋ/"],
        ["past-participle", "stood", "/stʊd/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`posture ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:posture-${key}`);
        for (const [ruleId, label, reading] of variants)
            assertFormRecording(
                word,
                schema,
                inventory,
                ruleId,
                label,
                reading,
            );
    });
}
