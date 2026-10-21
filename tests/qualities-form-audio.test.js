import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/qualities-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    heavy: [
        ["comparative", "heavier", "/ˈheviə/"],
        ["superlative", "heaviest", "/ˈheviɪst/"],
    ],
    light: [
        ["comparative", "lighter", "/ˈlaɪtə/"],
        ["superlative", "lightest", "/ˈlaɪtɪst/"],
    ],
    easy: [
        ["comparative", "easier", "/ˈiːziə/"],
        ["superlative", "easiest", "/ˈiːziɪst/"],
    ],
    difficult: [
        ["comparative", "more difficult", "/mɔː ˈdɪfɪkəlt/"],
        ["superlative", "most difficult", "/məʊst ˈdɪfɪkəlt/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`qualities ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:qualities-${key}`);
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
