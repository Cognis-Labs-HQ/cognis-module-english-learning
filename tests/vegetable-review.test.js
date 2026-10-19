import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));

test("spinach has no beginner plural and its rejected source cannot supply playback", async () => {
    const words = await load("data/library/content/words/vegetables-001.json");
    const spinach = words.find(({ label }) => label === "spinach");
    assert.ok(!spinach.tags.includes("plural"));
    const schema = await load("data/library/schema.json");
    assert.ok(!schema.transformSets.some(({ id }) => id === "noun-spinach"));
    const inventory = await readAudioInventory("data/audio");
    const rejected = await load(
        "authoring/reviews/vegetables-rejected-audio.json",
    );
    for (const source of rejected) {
        assert.equal(source.decision, "rejected");
        const bytes = await readFile(source.sourcePath);
        assert.equal(
            createHash("sha256").update(bytes).digest("hex"),
            source.sourceSha256,
        );
        assert.ok(
            !inventory.recordings.some(
                ({ metadata }) =>
                    metadata?.sourcePcmSha256 === source.sourceSha256,
            ),
        );
    }
    const recording = inventory.recordings.find(
        ({ path }) => path === spinach.fields.audio,
    );
    assert.equal(recording.voiceId, "gJx1vCzNCD1EQHT212Ls");
    assert.equal(recording.request.seed, 43);
    assert.equal(recording.metadata.listening, "unverified-not-performed");
});
