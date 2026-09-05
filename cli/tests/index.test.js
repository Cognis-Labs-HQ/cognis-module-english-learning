import assert from "node:assert/strict";
import test from "node:test";
import { registerCli } from "../index.js";

test("registers a library command against the schema-aware public API", async () => {
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
        "/api/v1/study/library/entries?scope=global&schemaId=english&layer=alphabet",
    );
});
