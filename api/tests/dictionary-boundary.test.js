import assert from "node:assert/strict";
import test from "node:test";
import { createDictionaryProvider } from "../dictionary/index.js";

const contentRoot = "data/library/content";
const layer = { id: "words" };

test("dictionary meanings and curated paradigms remain scoped to each part of speech", async () => {
    const provider = createDictionaryProvider({
        contentRoot,
        fetchImplementation: async () =>
            Response.json([
                {
                    word: "book",
                    meanings: [
                        {
                            partOfSpeech: "noun",
                            definitions: [{ definition: "A written volume." }],
                        },
                        {
                            partOfSpeech: "verb",
                            definitions: [{ definition: "To reserve." }],
                        },
                    ],
                },
            ]),
    });
    const results = await provider.lookup({ layer, label: "book" });
    assert.equal(results.length, 2);
    assert.deepEqual(
        results.map(({ class: value }) => value),
        ["lexical:noun", "lexical:verb"],
    );
    assert.deepEqual(
        results.map(({ definitions }) =>
            definitions.map(({ translations }) => translations.en),
        ),
        [["A written volume."], ["To reserve."]],
    );
    assert.equal(results[0].tags.includes("plural-book"), true);
    assert.equal(results[1].tags.includes("plural-book"), false);
    assert.equal(new Set(results.map(({ provenance }) => provenance)).size, 2);
    assert.ok(
        results.every(({ references }) =>
            references.some(({ relation }) => relation === "spelling"),
        ),
    );
});

test("spellings absent from the provider alphabet are rejected before network access", async () => {
    let requests = 0;
    const provider = createDictionaryProvider({
        contentRoot,
        fetchImplementation: async () => {
            requests++;
            throw new Error("unexpected_fetch");
        },
    });
    for (const label of ["don't", "ice-cream", "rock’n’roll"])
        assert.deepEqual(await provider.lookup({ layer, label }), []);
    assert.equal(requests, 0);
});

test("dictionary cancels chunked oversized responses rather than buffering the body", async () => {
    let cancelled = false;
    let pulls = 0;
    const provider = createDictionaryProvider({
        contentRoot,
        fetchImplementation: async () =>
            new Response(
                new ReadableStream(
                    {
                        pull(controller) {
                            pulls++;
                            controller.enqueue(new Uint8Array(1_000_001));
                        },
                        cancel() {
                            cancelled = true;
                        },
                    },
                    { highWaterMark: 0 },
                ),
            ),
    });
    await assert.rejects(
        provider.lookup({ layer, label: "book" }),
        /english_dictionary_lookup_failed/,
    );
    assert.equal(cancelled, true);
    assert.equal(pulls, 1);
});
