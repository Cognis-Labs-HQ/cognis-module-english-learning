import assert from "node:assert/strict";
import test from "node:test";
import { requestAudio } from "../audio/request.js";
import { createAudioProvider } from "../audio/index.js";

const input = {
    language: "en",
    semanticRole: "lexicalUnit",
    label: "unseeded",
    readings: ["/rɛd/"],
};
const recording = new Uint8Array([0xff, 0xfb, 1, 2]);
const url = "https://api.dictionaryapi.dev/media/pronunciations/en/read-us.mp3";

function dictionary(phonetics, word = input.label) {
    return Response.json([{ word, phonetics }]);
}

test("missing bundled audio retrieves the matching Dictionary API pronunciation", async () => {
    const calls = [];
    const provider = createAudioProvider({
        voice: { language: "en" },
        revision: "test",
        recordings: [],
        async fetchImplementation(endpoint, options) {
            calls.push(endpoint);
            assert.equal(options.redirect, "error");
            assert.equal(options.signal.aborted, false);
            if (calls.length === 1)
                return dictionary([
                    { text: "/riːd/", audio: url.replace("read-", "reed-") },
                    { text: "/rɛd/", audio: url },
                ]);
            return new Response(recording, {
                headers: { "content-type": "audio/mpeg" },
            });
        },
    });
    const result = await provider.fetchAudio(input);
    assert.equal(calls.length, 2);
    assert.equal(
        calls[0],
        "https://api.dictionaryapi.dev/api/v2/entries/en/unseeded",
    );
    assert.equal(calls[1], url);
    assert.equal(result.mediaType, "audio/mpeg");
    assert.deepEqual(result.data, recording);
});

test("missing or mismatched preferred readings do not fetch unrelated audio", async () => {
    for (const response of [
        () => new Response(null, { status: 404 }),
        () => dictionary([{ text: "/riːd/", audio: url }]),
        () => dictionary([{ text: "/rɛd/", audio: url }], "other"),
        () => dictionary([]),
    ]) {
        let requests = 0;
        await assert.rejects(
            requestAudio(async () => {
                requests++;
                return response();
            }, input),
            /audio_not_found/,
        );
        assert.equal(requests, 1);
    }
});

test("provider URLs cannot turn pronunciation lookup into arbitrary network access", async () => {
    for (const audio of [
        "https://example.com/media/pronunciations/en/read.mp3",
        "http://api.dictionaryapi.dev/media/pronunciations/en/read.mp3",
        "https://user:password@api.dictionaryapi.dev/media/pronunciations/en/read.mp3",
        "https://api.dictionaryapi.dev/private/read.mp3",
        `${url}?token=private`,
        `${url}#fragment`,
        "not a URL",
    ]) {
        let requests = 0;
        await assert.rejects(
            requestAudio(async () => {
                requests++;
                return dictionary([{ text: "/rɛd/", audio }]);
            }, input),
            /audio_not_found/,
        );
        assert.equal(requests, 1);
    }
});

test("downloads reject oversized streams, wrong media, and non-audio bytes", async () => {
    for (const response of [
        () =>
            new Response(recording, {
                headers: {
                    "content-type": "audio/mpeg",
                    "content-length": "2000001",
                },
            }),
        () =>
            new Response(new Uint8Array(2_000_001), {
                headers: { "content-type": "audio/mpeg" },
            }),
        () =>
            new Response("html", { headers: { "content-type": "text/html" } }),
        () =>
            new Response("html", { headers: { "content-type": "audio/mpeg" } }),
    ]) {
        let requests = 0;
        await assert.rejects(
            requestAudio(
                async () =>
                    ++requests === 1
                        ? dictionary([{ text: "/rɛd/", audio: url }])
                        : response(),
                input,
            ),
            /response_too_large|invalid_audio_recording/,
        );
        assert.equal(requests, 2);
    }
});

test("a single deadline and provider cancellation cover lookup and audio download", async () => {
    const controller = new AbortController();
    let requests = 0;
    let requestSignal;
    await assert.rejects(
        requestAudio(
            async (_url, options) => {
                requests++;
                if (requests === 1) {
                    requestSignal = options.signal;
                    return dictionary([{ text: "/rɛd/", audio: url }]);
                }
                assert.equal(options.signal, requestSignal);
                controller.abort();
                options.signal.throwIfAborted();
            },
            input,
            controller.signal,
        ),
        { name: "AbortError" },
    );
});

test("invalid queries and aborted playback do not call upstream; failures log no card text", async () => {
    let requests = 0;
    const logs = [];
    const provider = createAudioProvider({
        voice: { language: "en" },
        revision: "test",
        recordings: [],
        fetchImplementation: async () => {
            requests++;
            throw new Error("secret diagnostic");
        },
        log: (...args) => logs.push(args),
    });
    await assert.rejects(
        provider.fetchAudio({ ...input, label: "private@example.com" }),
        /audio_not_found/,
    );
    const controller = new AbortController();
    controller.abort();
    await assert.rejects(provider.fetchAudio(input, controller.signal), {
        name: "AbortError",
    });
    assert.equal(requests, 0);
    await assert.rejects(provider.fetchAudio(input), /secret diagnostic/);
    assert.equal(requests, 1);
    assert.equal(logs.length, 3);
    assert.equal(JSON.stringify(logs).includes("unseeded"), false);
    assert.equal(JSON.stringify(logs).includes("secret diagnostic"), false);
});
