import assert from "node:assert/strict";
import test from "node:test";
import { requestDictionary } from "../dictionary/request.js";

for (const status of [404, 429, 503]) {
    test(`dictionary HTTP ${status} cancels unread response data`, async () => {
        let cancelled = false;
        const body = new ReadableStream(
            {
                cancel() {
                    cancelled = true;
                },
            },
            { highWaterMark: 0 },
        );
        const request = requestDictionary(
            async () => new Response(body, { status }),
            "https://example.test",
        );
        if (status === 404) assert.deepEqual(await request, []);
        else await assert.rejects(request, /english_dictionary_request_failed/);
        assert.equal(cancelled, true);
    });
}
