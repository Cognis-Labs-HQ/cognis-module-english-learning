import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));

test("spinach keeps its mass-noun sense and corrected recorded pronunciation", async () => {
    const words = await load("data/library/content/words/vegetables-001.json");
    const spinach = words.find(({ label }) => label === "spinach");
    assert.ok(!spinach.tags.includes("plural"));
    const schema = await load("data/library/schema.json");
    assert.ok(!schema.transformSets.some(({ id }) => id === "noun-spinach"));
    const inventory = await readAudioInventory("data/audio");
    const recording = inventory.recordings.find(
        ({ path }) => path === spinach.fields.audio,
    );
    assert.equal(recording.voiceId, "gJx1vCzNCD1EQHT212Ls");
    assert.equal(recording.request.seed, 43);
    assert.equal(recording.metadata.listening, "unverified-not-performed");
});
