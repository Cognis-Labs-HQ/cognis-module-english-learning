import assert from "node:assert/strict";
import test from "node:test";
import { bootstrapModule, uninstallModule } from "../../bootstrap.js";

test("registers English surfaces through ctx and ingests the content pack", async () => {
    const registrations = { routes: [], capabilities: [], extensions: [] };
    const ctx = {
        moduleRoot: process.cwd(),
        router: {
            get(path) {
                registrations.routes.push(path);
            },
        },
        getCapability(name) {
            assert.equal(name, "study:library");
            return {
                async ingestContentPack(root) {
                    assert.equal(root, `${process.cwd()}/data`);
                },
            };
        },
        registerStaticDir() {},
        registerSpaRoute(route) {
            registrations.routes.push(route.base);
        },
        registerNavbarPlugin() {},
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
    assert.ok(registrations.routes.includes("/study/alphabet"));
    assert.equal(registrations.capabilities[0][0], "study:language:en");
    assert.equal(registrations.capabilities[0][1].code, "en");
    assert.equal(registrations.extensions[0][0], "bootstrap-platform");
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
