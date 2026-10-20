import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));

test("sending and carrying progresses from vocabulary to contextual sentences", async () => {
    const decks = await load("data/starter-decks.json");
    const deck = decks.find(({ key }) => key === "delivery-practice");
    const expected = [
        "en:word:delivery-send",
        "en:word:delivery-carry",
        "en:sentence:delivery-example-send-letter",
        "en:sentence:delivery-example-sends-postcards",
        "en:sentence:delivery-example-carried-box",
        "en:sentence:delivery-example-carrying-bag",
        "en:sentence:message-practice-example-sent-yesterday",
        "en:sentence:message-practice-example-sending-now",
        "en:sentence:message-practice-example-carry-to-car",
        "en:sentence:message-practice-example-received-from-friend",
    ];
    assert.deepEqual(deck.sourceRecordIds.slice(0, expected.length), expected);
    assert.equal(
        new Set(deck.sourceRecordIds).size,
        deck.sourceRecordIds.length,
    );
    const sentences = await load(
        "data/library/content/sentences/message-practice-001.json",
    );
    assert.deepEqual(
        sentences.map(({ label }) => label),
        [
            "I sent you a letter yesterday.",
            "He is sending a postcard now.",
            "We are carrying the heavy box to the car.",
            "She received a letter from a friend.",
        ],
    );
});
