import assert from "node:assert/strict";
import test from "node:test";
import { bootstrapModule } from "../../bootstrap.js";

test("registers English surfaces through ctx", () => {
    const registrations = { routes: [], capabilities: [], extensions: [] };
    const ctx = {
        moduleRoot: process.cwd(),
        router: {
            get(path) {
                registrations.routes.push(path);
            },
        },
        getCapability(name) {
            assert.equal(name, "auth:requireAuth");
            return () => ({ role: "user" });
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
    bootstrapModule(ctx);
    assert.ok(registrations.routes.includes("/study/alphabet"));
    assert.equal(registrations.capabilities[0][0], "study:language:en");
    assert.equal(registrations.capabilities[0][1].code, "en");
    assert.equal(registrations.extensions[0][0], "bootstrap-platform");
});
