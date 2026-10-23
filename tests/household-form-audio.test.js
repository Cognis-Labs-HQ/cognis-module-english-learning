import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/household-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    wash: [
        ["third-person", "washes", "/ˈwɒʃɪz/"],
        ["past", "washed", "/wɒʃt/"],
        ["present-participle", "washing", "/ˈwɒʃɪŋ/"],
        ["past-participle", "washed", "/wɒʃt/"],
    ],
    cook: [
        ["third-person", "cooks", "/kʊks/"],
        ["past", "cooked", "/kʊkt/"],
        ["present-participle", "cooking", "/ˈkʊkɪŋ/"],
        ["past-participle", "cooked", "/kʊkt/"],
    ],
    clean: [
        ["third-person", "cleans", "/kliːnz/"],
        ["past", "cleaned", "/kliːnd/"],
        ["present-participle", "cleaning", "/ˈkliːnɪŋ/"],
        ["past-participle", "cleaned", "/kliːnd/"],
    ],
    dry: [
        ["third-person", "dries", "/draɪz/"],
        ["past", "dried", "/draɪd/"],
        ["present-participle", "drying", "/ˈdraɪɪŋ/"],
        ["past-participle", "dried", "/draɪd/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`household ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:household-${key}`);
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
