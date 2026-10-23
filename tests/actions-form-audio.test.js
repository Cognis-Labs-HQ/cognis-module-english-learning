import { assertFormRecording } from "./reuse/transformations.js";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/actions-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    jump: [
        ["third-person", "jumps", "/dʒʌmps/"],
        ["past", "jumped", "/dʒʌmpt/"],
        ["present-participle", "jumping", "/ˈdʒʌmpɪŋ/"],
        ["past-participle", "jumped", "/dʒʌmpt/"],
    ],
    swim: [
        ["third-person", "swims", "/swɪmz/"],
        ["past", "swam", "/swæm/"],
        ["present-participle", "swimming", "/ˈswɪmɪŋ/"],
        ["past-participle", "swum", "/swʌm/"],
    ],
    laugh: [
        ["third-person", "laughs", "/lɑːfs/"],
        ["past", "laughed", "/lɑːft/"],
        ["present-participle", "laughing", "/ˈlɑːfɪŋ/"],
        ["past-participle", "laughed", "/lɑːft/"],
    ],
    cry: [
        ["third-person", "cries", "/kraɪz/"],
        ["past", "cried", "/kraɪd/"],
        ["present-participle", "crying", "/ˈkraɪɪŋ/"],
        ["past-participle", "cried", "/kraɪd/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`actions ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:actions-${key}`);
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
