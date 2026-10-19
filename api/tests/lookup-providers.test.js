import assert from "node:assert/strict";
import test from "node:test";
import { createDictionaryProvider } from "../dictionary/index.js";
import { createStrokePatternProvider } from "../strokes/index.js";

const contentRoot = "data/library/content";
const schema = { id: "english", language: "en" };
const layer = { id: "words" };

function dictionaryRecord(word, definitions = ["a meaning"]) {
    return {
        word,
        phonetic: "/test/",
        phonetics: [{ text: "/test/" }, { text: "/alternate/" }],
        meanings: [
            {
                partOfSpeech: "verb",
                definitions: definitions.map((definition) => ({ definition })),
            },
        ],
    };
}

function dictionary(fetchImplementation, log) {
    return createDictionaryProvider({
        contentRoot,
        cacheRevision: "1.3.0",
        fetchImplementation,
        log,
    });
}

test("dictionary registration advertises only English vocabulary search", () => {
    const provider = dictionary(null);
    assert.equal(provider.searchable, true);
    assert.equal(provider.cacheRevision, "1.3.0");
    assert.equal(provider.supports(schema, layer), true);
    assert.equal(
        provider.supports({ ...schema, language: "ja" }, layer),
        false,
    );
    assert.equal(provider.supports(schema, { id: "sentences" }), false);
});

test("remote lookup keeps curated irregular paradigms and primary IPA, and bounds glosses", async () => {
    let request;
    const provider = dictionary(async (url, options) => {
        request = { url, options };
        return new Response(
            JSON.stringify([
                dictionaryRecord("run", [
                    "first meaning",
                    "first meaning",
                    ...Array.from(
                        { length: 15 },
                        (_value, index) => `meaning ${index}`,
                    ),
                ]),
            ]),
        );
    });
    const [result] = await provider.lookup({ schema, layer, label: "run" });
    assert.equal(
        request.url,
        "https://api.dictionaryapi.dev/api/v2/entries/en/run",
    );
    assert.equal(request.options.redirect, "error");
    assert.ok(request.options.signal instanceof AbortSignal);
    assert.equal(result.definitions.length, 10);
    assert.equal(result.definitions[0].translations.en, "first meaning");
    assert.equal(result.fields.pronunciation[0], "/rʌn/");
    assert.equal(
        new Set(result.fields.pronunciation).size,
        result.fields.pronunciation.length,
    );
    assert.ok(result.tags.includes("paradigm-run"));
    assert.deepEqual(
        result.references
            .filter(({ relation }) => relation === "spelling")
            .map(({ entryId }) => entryId),
        ["en:char:r-lowercase", "en:char:u-lowercase", "en:char:n-lowercase"],
    );
});

test("new vocabulary resolves existing alphabet links without inventing irregular inflections", async () => {
    const provider = dictionary(
        async () => new Response(JSON.stringify([dictionaryRecord("sing")])),
    );
    const [result] = await provider.lookup({ schema, layer, label: "sing" });
    assert.equal(result.class, "lexical:verb");
    assert.deepEqual(result.tags, ["verb"]);
    assert.equal(result.references.length, 4);
    assert.deepEqual(
        result.references.map(({ position }) => position),
        [0, 1, 2, 3],
    );
    assert.deepEqual(Object.keys(result.definitions[0].translations), ["en"]);
});

test("not-found lookups return actual packaged definitions; unknown words remain empty", async () => {
    const provider = dictionary(async () => new Response("", { status: 404 }));
    const [run] = await provider.lookup({ schema, layer, label: "run" });
    assert.equal(
        run.definitions[0].translations.de,
        "Sich schnell zu Fuß fortbewegen.",
    );
    assert.equal(run.definitions[0].translations.ja, "足で速く移動する。");
    assert.deepEqual(
        await provider.lookup({ schema, layer, label: "unknownword" }),
        [],
    );
});

test("queries use the fixed endpoint and reject unsupported or oversized input before fetch", async () => {
    let requests = 0;
    const provider = dictionary(async () => {
        requests += 1;
        return new Response("[]");
    });
    for (const label of [
        "<script>",
        "https://other.test",
        "a".repeat(101),
        "",
        "こんにちは",
    ]) {
        assert.deepEqual(await provider.lookup({ schema, layer, label }), []);
    }
    assert.deepEqual(
        await provider.lookup({
            schema,
            layer: { id: "alphabet" },
            label: "a",
        }),
        [],
    );
    assert.equal(requests, 0);
    await provider.lookup({ schema, layer, label: "run" });
    await provider.lookup({ schema, layer, label: "run" });
    assert.equal(
        requests,
        2,
        "host cache owns query freshness and deduplication",
    );
});

test("failed and malformed dictionary responses surface a safe error and structured log", async () => {
    for (const response of [
        new Response("", { status: 503 }),
        new Response("{}"),
        new Response("not json"),
        new Response(JSON.stringify([{ word: "run", meanings: [{}] }])),
    ]) {
        const logs = [];
        const provider = dictionary(
            async () => response,
            (...args) => logs.push(args),
        );
        await assert.rejects(
            provider.lookup({ schema, layer, label: "run" }),
            /english_dictionary_lookup_failed/,
        );
        assert.equal(logs[0][0], "error");
        assert.equal(logs[0][2].operation, "lookup_dictionary");
        assert.ok(logs[0][2].errorName);
    }
});

test("dictionary omits unrelated matches and empty glosses", async () => {
    const provider = dictionary(
        async () =>
            new Response(
                JSON.stringify([
                    dictionaryRecord("runner"),
                    dictionaryRecord("run", [" "]),
                ]),
            ),
    );
    const [result] = await provider.lookup({ schema, layer, label: "run" });
    assert.equal(result.provenance, "cognis-english:en:word:run");
});

test("print-letter provider supports appropriate layers and returns isolated normalized patterns", async () => {
    const provider = createStrokePatternProvider({
        contentRoot,
        cacheRevision: "1.3.0",
    });
    const writingLayer = {
        id: "alphabet",
        fields: [{ id: "stroke_pattern", type: "strokePattern" }],
    };
    assert.equal(provider.supports(schema, writingLayer), true);
    assert.equal(provider.supports(schema, layer), false);
    assert.equal(
        provider.supports({ ...schema, id: "other" }, writingLayer),
        false,
    );
    const [first] = await provider.lookup({ layer: writingLayer, label: "a" });
    assert.equal(first.fields.stroke_pattern.coordinateSystem, "normalized");
    first.fields.stroke_pattern.strokes[0].points[0].x = 99;
    const [next] = await provider.lookup({ layer: writingLayer, label: "a" });
    assert.ok(next.fields.stroke_pattern.strokes[0].points[0].x <= 1);
    const [digraph] = await provider.lookup({
        layer: { id: "composites" },
        label: "ch",
    });
    assert.equal(digraph.fields.stroke_pattern.columns, 2);
    assert.deepEqual(
        await provider.lookup({ layer: writingLayer, label: "unknown" }),
        [],
    );
});

test("content loading failures can retry and are logged by the owning provider", async () => {
    const logs = [];
    const provider = createStrokePatternProvider({
        contentRoot: "data/not-present",
        log: (...args) => logs.push(args),
    });
    for (let index = 0; index < 2; index += 1)
        await assert.rejects(
            provider.lookup({ layer: { id: "alphabet" }, label: "a" }),
            /english_stroke_patterns_unavailable/,
        );
    assert.equal(logs.length, 2);
    assert.ok(
        logs.every(
            ([level, _message, metadata]) =>
                level === "error" && metadata.errorName === "Error",
        ),
    );
});

test("dictionary attribution retains approved sources while card detail metadata stays hidden", async () => {
    const record = dictionaryRecord("swim");
    record.license = {
        name: "CC BY-SA 3.0",
        url: "https://creativecommons.org/licenses/by-sa/3.0",
    };
    record.sourceUrls = [
        "https://en.wiktionary.org/wiki/swim",
        "javascript:unsafe",
        "https://unrelated.test/word",
    ];
    const provider = dictionary(
        async () => new Response(JSON.stringify([record])),
    );
    const [result] = await provider.lookup({ schema, layer, label: "swim" });
    const attribution = JSON.parse(result.fields.dictionary_data);
    assert.equal(attribution.license.name, "CC BY-SA 3.0");
    assert.deepEqual(attribution.sourceUrls, [
        "https://en.wiktionary.org/wiki/swim",
    ]);
    const { readFile } = await import("node:fs/promises");
    const descriptor = JSON.parse(
        await readFile("data/library/schema.json", "utf8"),
    );
    const metadataField = descriptor.layers
        .find(({ id }) => id === "words")
        .fields.find(({ id }) => id === "dictionary_data");
    assert.equal(metadataField.detail.hidden, true);
});
