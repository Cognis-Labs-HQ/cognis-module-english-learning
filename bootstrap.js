import { registerApi } from "./api/index.js";
import { readFileSync } from "node:fs";
import path from "node:path";
import { createDictionaryProvider } from "./api/dictionary/index.js";
import { createStrokePatternProvider } from "./api/strokes/index.js";

const MODULE_MANIFEST = JSON.parse(
    readFileSync(new URL("./manifest.json", import.meta.url), "utf8"),
);
const CONTENT_PACK = Object.freeze(
    JSON.parse(
        readFileSync(new URL("./data/manifest.json", import.meta.url), "utf8"),
    ),
);
const LANGUAGE = Object.freeze({
    moduleId: "study-language-en",
    code: "en",
    languageCode: "en",
    languageName: "English",
    languageFlag: "🇬🇧",
    version: MODULE_MANIFEST.version,
    package: CONTENT_PACK,
    childComponents: [],
    starterDecks: JSON.parse(
        readFileSync(
            new URL("./data/starter-decks.json", import.meta.url),
            "utf8",
        ),
    ),
});

export async function uninstallModule(ctx, { deleteContent }) {
    const log = ctx.log;
    if (!deleteContent) {
        log?.("info", "English language pack content retained.", {
            component: "study-language-en",
            operation: "uninstall_cleanup",
            deleteContent: false,
        });
        return;
    }
    const library = ctx.getCapability("study:library:provider");
    if (typeof library?.deleteContentPack !== "function") {
        log?.("error", "English language pack cleanup is unavailable.", {
            component: "study-language-en",
            operation: "delete_content_pack",
            packId: CONTENT_PACK.id,
        });
        throw new Error("study_library_cleanup_unavailable");
    }
    try {
        await library.deleteContentPack(path.join(ctx.moduleRoot, "data"));
    } catch (error) {
        log?.("error", "English language pack cleanup failed.", {
            component: "study-language-en",
            operation: "delete_content_pack",
            packId: CONTENT_PACK.id,
            errorName: error instanceof Error ? error.name : "Error",
        });
        throw error;
    }
    log?.("info", "English language pack content deleted.", {
        component: "study-language-en",
        operation: "delete_content_pack",
        packId: CONTENT_PACK.id,
    });
}

export async function bootstrapModule(ctx) {
    const library = ctx.capabilities.require("study:library:provider");
    if (
        ![
            "ingestContentPack",
            "registerLookupProvider",
            "deleteContentPack",
        ].every((method) => typeof library?.[method] === "function")
    )
        throw new Error("Invalid Study Library provider capability.");
    const log = ctx.log;
    registerApi(ctx);

    const providerRemovers = [];
    const removeProviders = () => {
        for (const removeProvider of providerRemovers.splice(0).reverse())
            removeProvider();
    };
    let receipt;
    try {
        const options = {
            contentRoot: path.join(ctx.moduleRoot, "data", "content"),
            cacheRevision: MODULE_MANIFEST.version,
            log,
        };
        providerRemovers.push(
            library.registerLookupProvider(
                createStrokePatternProvider(options),
            ),
        );
        providerRemovers.push(
            library.registerLookupProvider(createDictionaryProvider(options)),
        );
        receipt = await library.ingestContentPack(
            path.join(ctx.moduleRoot, "data"),
        );
        ctx.contributePublicCapability("study:language:en", LANGUAGE);
        ctx.flow.extend(
            "bootstrap-platform",
            "register-flows",
            { id: "study-language-en:registerLanguage" },
            () => LANGUAGE,
        );
    } catch (error) {
        removeProviders();
        log?.("error", "English language pack activation failed.", {
            component: "study-language-en",
            operation: "bootstrap",
            fatal: true,
            errorName: error instanceof Error ? error.name : "Error",
        });
        throw error;
    }
    log?.("info", "English learning module enabled.", {
        component: "study-language-en",
        operation: "bootstrap",
        packId: receipt.packId,
        contentRevision: receipt.contentRevision,
        unchanged: receipt.unchanged,
    });
    return removeProviders;
}
