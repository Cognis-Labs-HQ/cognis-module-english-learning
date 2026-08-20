import assert from "node:assert/strict";
import test from "node:test";
import { registerCli } from "../index.js";

test("registers a library snapshot command against the public API", async () => {
    let command;
    registerCli({
        registerCommand(value) {
            command = value;
        },
        apiClient: {
            get(path) {
                return path;
            },
        },
    });
    assert.equal(command.name, "study-language-en:library");
    assert.equal(
        await command.run(),
        "/api/v1/modules/study-language-en/library/snapshot",
    );
});
