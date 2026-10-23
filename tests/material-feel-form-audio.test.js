import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/material-feel-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    hard: [
        ["comparative", "harder", "/ˈhɑːdə/"],
        ["superlative", "hardest", "/ˈhɑːdɪst/"],
    ],
    soft: [
        ["comparative", "softer", "/ˈsɒftə/"],
        ["superlative", "softest", "/ˈsɒftɪst/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`material-feel ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(
            ({ id }) => id === `en:word:material-feel-${key}`,
        );
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
