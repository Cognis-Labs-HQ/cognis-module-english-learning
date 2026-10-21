import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/outings-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    museum: [["plural", "museums", "/mjuˈziːəmz/"]],
    zoo: [["plural", "zoos", "/zuːz/"]],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`outings ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:outings-${key}`);
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
