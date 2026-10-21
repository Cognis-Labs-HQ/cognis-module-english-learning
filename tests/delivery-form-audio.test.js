import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/delivery-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    send: [
        ["third-person", "sends", "/sendz/"],
        ["past", "sent", "/sent/"],
        ["present-participle", "sending", "/ˈsendɪŋ/"],
        ["past-participle", "sent", "/sent/"],
    ],
    carry: [
        ["third-person", "carries", "/ˈkæriz/"],
        ["past", "carried", "/ˈkærid/"],
        ["present-participle", "carrying", "/ˈkæriɪŋ/"],
        ["past-participle", "carried", "/ˈkærid/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`delivery ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:delivery-${key}`);
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
