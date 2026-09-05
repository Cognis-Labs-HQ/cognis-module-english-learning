import { readFile } from "node:fs/promises";
import path from "node:path";

const LANGUAGE = Object.freeze({
    code: "en",
    name: "English",
    flag: "GB",
    version: "1.2.18",
});

async function ingestContentPack(library, moduleRoot) {
    const root = path.join(moduleRoot, "data");
    const descriptor = JSON.parse(
        await readFile(path.join(root, "manifest.json"), "utf8"),
    );
    await library.ingestContentPack(root);
    return Object.freeze({
        ...descriptor,
        license: Object.freeze({ ...descriptor.license }),
    });
}

export async function uninstallModule(ctx, { deleteContent }) {
    ctx.log?.("info", "English learning module cleanup completed.", {
        component: "study-language-en",
        operation: "uninstall_cleanup",
        deleteContent,
    });
}

export async function bootstrapModule(ctx) {
    ctx.registerStaticDir("", path.join(ctx.moduleRoot, "ui"));
    const library = ctx.getCapability("study:library");
    if (!library || typeof library.ingestContentPack !== "function") {
        ctx.log?.("error", "Study library capability is unavailable.", {
            component: "study-language-en",
            operation: "ingest_content_pack",
        });
        throw new Error("study_library_unavailable");
    }
    let packageDescriptor;
    try {
        packageDescriptor = await ingestContentPack(library, ctx.moduleRoot);
    } catch (error) {
        ctx.log?.("error", "English content-pack ingestion failed.", {
            component: "study-language-en",
            operation: "ingest_content_pack",
            fatal: true,
            error: error instanceof Error ? error.message : String(error),
        });
        throw error;
    }
    const language = Object.freeze({ ...LANGUAGE, package: packageDescriptor });
    ctx.contributePublicCapability("study:language:en", language);
    ctx.flow.extend(
        "bootstrap-platform",
        "register-flows",
        { id: "study-language-en:bootstrap-registration" },
        () => language,
    );
    ctx.log?.("info", "English learning module enabled.", {
        component: "study-language-en",
        operation: "bootstrap",
    });
}
