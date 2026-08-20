import path from "node:path";
import { EnglishLibrary } from "./store.js";
import { sendJson } from "./reuse/http.js";

const API_BASE = "/api/v1/modules/study-language-en/library";

export function registerApiRoutes(router, ctx) {
    const requireAuth = ctx.getCapability("auth:requireAuth");
    const library = new EnglishLibrary(path.join(ctx.moduleRoot, "data"));
    const ready = library.initialise().catch((error) => {
        ctx.log?.("error", "English library initialization failed.", {
            component: "study-language-en",
            operation: "initialise_library",
            error: error instanceof Error ? error.message : String(error),
        });
        throw error;
    });

    router.get(`${API_BASE}/snapshot`, async (request, response) => {
        if (!requireAuth(request, response, "user")) return;
        try {
            await ready;
            sendJson(response, 200, { data: library.snapshot() });
        } catch {
            sendJson(response, 503, {
                error: {
                    code: "library_unavailable",
                    message: "English library is unavailable.",
                },
            });
        }
    });

    router.get(`${API_BASE}/:layer`, async (request, response) => {
        if (!requireAuth(request, response, "user")) return;
        const layer = String(request.params?.layer ?? "");
        if (!library.hasLayer(layer)) {
            sendJson(response, 404, {
                error: {
                    code: "layer_not_found",
                    message: "Unknown library layer.",
                },
            });
            return;
        }
        try {
            await ready;
            sendJson(response, 200, {
                data: library.query(layer, request.query ?? {}),
            });
        } catch {
            sendJson(response, 503, {
                error: {
                    code: "library_unavailable",
                    message: "English library is unavailable.",
                },
            });
        }
    });

    return {
        async snapshot() {
            await ready;
            return library.snapshot();
        },
    };
}
