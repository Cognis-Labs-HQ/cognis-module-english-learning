import assert from "node:assert/strict";
import test from "node:test";
import { bootstrapModule, uninstallModule } from "../../bootstrap.js";

test("registers the data-only English package through ctx", async () => {
    const registrations = {
        staticDirectories: [],
        capabilities: [],
        extensions: [],
    };
    const ctx = {
        moduleRoot: process.cwd(),
        getCapability(name) {
            assert.equal(name, "study:library");
            return {
                async ingestContentPack(root) {
                    assert.equal(root, `${process.cwd()}/data`);
                },
            };
        },
        registerStaticDir(prefix, root) {
            registrations.staticDirectories.push({ prefix, root });
        },
        contributePublicCapability(name, value) {
            registrations.capabilities.push([name, value]);
        },
        flow: {
            extend(...args) {
                registrations.extensions.push(args);
            },
        },
    };
    await bootstrapModule(ctx);
    assert.deepEqual(registrations.staticDirectories, [
        { prefix: "", root: `${process.cwd()}/ui` },
    ]);
    assert.equal(registrations.capabilities[0][0], "study:language:en");
    assert.equal(registrations.capabilities[0][1].languageCode, "en");
    assert.equal(registrations.capabilities[0][1].languageName, "English");
    assert.equal(registrations.capabilities[0][1].code, undefined);
    assert.equal(
        registrations.capabilities[0][1].moduleId,
        "study-language-en",
    );
    assert.equal(registrations.capabilities[0][1].package.namespace, "en");
    assert.equal(registrations.capabilities[0][1].package.version, "3.0.0");
    assert.equal(
        Object.isFrozen(registrations.capabilities[0][1].package),
        true,
    );
    assert.equal(registrations.extensions[0][0], "bootstrap-platform");
    assert.equal(registrations.extensions[0][3]().languageCode, "en");
});

test("supports uninstall cleanup without deleting packaged learning data", async () => {
    const entries = [];
    await uninstallModule(
        {
            log(level, message, metadata) {
                entries.push({ level, message, metadata });
            },
        },
        { deleteContent: true },
    );

    assert.deepEqual(entries, [
        {
            level: "info",
            message: "English learning module cleanup completed.",
            metadata: {
                component: "study-language-en",
                operation: "uninstall_cleanup",
                deleteContent: true,
            },
        },
    ]);
});
