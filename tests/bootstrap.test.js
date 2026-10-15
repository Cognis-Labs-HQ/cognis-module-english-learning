import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import test from "node:test";
import { bootstrapModule, uninstallModule } from "../bootstrap.js";

function context(failure) {
    const calls = {
        providers: [],
        removed: [],
        capabilities: [],
        imports: [],
        routes: [],
        logs: [],
        hooks: [],
    };
    const provider = {
        registerLookupProvider(value) {
            calls.providers.push(value);
            return () => calls.removed.push(value.id);
        },
        async ingestContentPack(root) {
            if (failure === "ingest") throw new Error("ingestion_failed");
            calls.imports.push(root);
            return {
                packId: "english-core",
                contentRevision: "2026-10-11.1",
                unchanged: false,
            };
        },
        async deleteContentPack(root) {
            calls.deleted = root;
        },
    };
    const ctx = {
        moduleRoot: process.cwd(),
        capabilities: {
            require(name) {
                if (name === "study:audio:provider")
                    return { registerProvider: () => () => {} };
                assert.equal(name, "study:library:provider");
                return provider;
            },
        },
        getCapability(name) {
            assert.equal(name, "study:library:provider");
            return provider;
        },
        registerStaticDir(prefix, root) {
            calls.static = { prefix, root };
        },
        registerApiDelete(route, handler, options) {
            calls.routes.push({ route, handler, options });
        },
        contributePublicCapability(name, value) {
            if (failure === "publish") throw new Error("publication_failed");
            calls.capabilities.push({ name, value });
        },
        flow: {
            extend(...args) {
                if (failure === "flow") throw new Error("registration_failed");
                calls.hooks.push(args);
            },
        },
        log(level, message, metadata) {
            calls.logs.push({ level, message, metadata });
        },
    };
    return { ctx, calls, provider };
}

test("registers providers, ingests the pack, and publishes the language through ctx", async () => {
    const { ctx, calls } = context();
    const dispose = await bootstrapModule(ctx);
    assert.deepEqual(calls.imports, [
        path.join(process.cwd(), "data", "library"),
    ]);
    assert.equal(calls.capabilities[0].name, "study:language:en");
    const descriptor = calls.capabilities[0].value;
    assert.equal(descriptor.code, "en");
    assert.equal(descriptor.languageCode, "en");
    assert.equal(
        descriptor.version,
        JSON.parse(
            readFileSync(new URL("../manifest.json", import.meta.url), "utf8"),
        ).version,
    );
    assert.equal(descriptor.starterDecks.length, 7);
    assert.deepEqual(
        calls.providers.map(({ capabilities }) => capabilities),
        [["strokePattern"], ["dictionary"]],
    );
    assert.equal(calls.providers[1].searchable, true);
    assert.deepEqual(calls.static, {
        prefix: "",
        root: path.join(process.cwd(), "ui"),
    });
    assert.equal(calls.hooks[0][0], "bootstrap-platform");
    assert.equal(
        calls.hooks[0][2].id,
        "study-language-en:bootstrap-registration",
    );
    assert.equal(calls.hooks[0][3](), descriptor);
    dispose();
    dispose();
    assert.deepEqual(
        calls.removed,
        calls.providers.map(({ id }) => id).reverse(),
    );
    const nextDispose = await bootstrapModule(ctx);
    nextDispose();
    assert.equal(calls.removed.length, 4);
});

test("enabled bootstrap registers the admin configuration cleanup policy", async () => {
    const { ctx, calls } = context();
    const dispose = await bootstrapModule(ctx);
    const { route, handler, options } = calls.routes[0];
    assert.equal(route, "/api/v1/modules/study-language-en/config");
    assert.deepEqual(options, {
        access: { minRole: "admin" },
        allowWhenDisabled: true,
    });
    let status;
    let ended = false;
    handler(
        {},
        {
            writeHead(value) {
                status = value;
            },
            end() {
                ended = true;
            },
        },
    );
    assert.equal(status, 204);
    assert.equal(ended, true);
    dispose();
});

test("failed activation unregisters both providers and logs safe failure details", async () => {
    for (const failure of ["ingest", "publish", "flow"]) {
        const { ctx, calls } = context(failure);
        await assert.rejects(bootstrapModule(ctx));
        assert.equal(calls.removed.length, 2);
        assert.equal(calls.logs.at(-1).metadata.fatal, true);
        assert.equal(calls.logs.at(-1).metadata.errorName, "Error");
    }
});

test("activation requires a complete provider contract before registering anything", async () => {
    for (const method of [
        "ingestContentPack",
        "registerLookupProvider",
        "deleteContentPack",
    ]) {
        const { ctx, provider, calls } = context();
        delete provider[method];
        await assert.rejects(
            bootstrapModule(ctx),
            /Invalid Study Library provider capability/,
        );
        assert.equal(calls.providers.length, 0);
    }
    await assert.rejects(
        bootstrapModule({
            capabilities: {
                require(id) {
                    if (id === "study:audio:provider")
                        return { registerProvider: () => () => {} };
                    throw new Error("provider_unavailable");
                },
            },
        }),
        /provider_unavailable/,
    );
});

test("uninstall retains or deletes content according to the host decision", async () => {
    const { ctx, calls } = context();
    await uninstallModule(ctx, { deleteContent: false });
    assert.equal(calls.logs.at(-1).metadata.deleteContent, false);
    await uninstallModule(ctx, { deleteContent: true });
    assert.equal(calls.deleted, path.join(ctx.moduleRoot, "data", "library"));
    assert.equal(calls.logs.at(-1).metadata.operation, "delete_content_pack");
});

test("uninstall surfaces cleanup failures without claiming success", async () => {
    const { ctx, provider, calls } = context();
    provider.deleteContentPack = async () => {
        throw new Error("private_runtime_details");
    };
    await assert.rejects(
        uninstallModule(ctx, { deleteContent: true }),
        /private_runtime_details/,
    );
    assert.equal(calls.logs.at(-1).level, "error");
    assert.equal(calls.logs.at(-1).metadata.errorName, "Error");
    delete provider.deleteContentPack;
    await assert.rejects(
        uninstallModule(ctx, { deleteContent: true }),
        /cleanup_unavailable/,
    );
});
