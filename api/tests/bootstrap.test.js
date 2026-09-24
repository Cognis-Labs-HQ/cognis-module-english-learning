import assert from "node:assert/strict";
import test from "node:test";
import { bootstrapModule, uninstallModule } from "../../bootstrap.js";

test("registers the data-only English package through ctx", async () => {
    const registrations = {
        staticDirectories: [],
        capabilities: [],
        packOperations: [],
    };
    const ctx = {
        moduleRoot: process.cwd(),
        getCapability(name) {
            assert.equal(name, "study:library");
            return {
                async inspectContentPack(root) {
                    registrations.packOperations.push({
                        operation: "inspect",
                        root,
                    });
                },
                async ingestContentPack(root) {
                    assert.equal(root, `${process.cwd()}/data`);
                    registrations.packOperations.push({
                        operation: "ingest",
                        root,
                    });
                },
            };
        },
        registerStaticDir(prefix, root) {
            registrations.staticDirectories.push({ prefix, root });
        },
        contributePublicCapability(name, value) {
            registrations.capabilities.push([name, value]);
        },
    };
    await bootstrapModule(ctx);
    assert.deepEqual(registrations.staticDirectories, [
        {
            prefix: "languages",
            root: `${process.cwd()}/ui/languages`,
        },
    ]);
    assert.deepEqual(registrations.packOperations, [
        { operation: "inspect", root: `${process.cwd()}/data` },
        { operation: "ingest", root: `${process.cwd()}/data` },
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
    assert.equal(registrations.capabilities[0][1].package.version, "14.1.0");
    assert.equal(
        Object.isFrozen(registrations.capabilities[0][1].package),
        true,
    );
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
