import { ingestEnglishContentPack } from "./api/index.js";
import { registerUi } from "./api/ui.js";

const LANGUAGE = Object.freeze({
    code: "en",
    name: "English",
    flag: "GB",
    version: "1.2.17",
    childComponents: [
        {
            id: "alphabet",
            labelKey: "module.study_language_en.alphabet.title",
            pageUrl: "/study/alphabet",
            order: 0,
        },
        {
            id: "classroom",
            labelKey: "module.study_language_en.classroom.title",
            pageUrl: "/study/en-classroom",
            order: 999,
        },
    ],
});

export async function uninstallModule(ctx, { deleteContent }) {
    ctx.log?.("info", "English learning module cleanup completed.", {
        component: "study-language-en",
        operation: "uninstall_cleanup",
        deleteContent,
    });
}

export async function bootstrapModule(ctx) {
    registerUi(ctx);
    const library = ctx.getCapability("study:library");
    if (!library) {
        ctx.log?.("error", "Study library capability is unavailable.", {
            component: "study-language-en",
            operation: "ingest_content_pack",
        });
        throw new Error("study_library_unavailable");
    }
    try {
        await ingestEnglishContentPack(library, ctx.moduleRoot);
    } catch (error) {
        ctx.log?.("error", "English content-pack ingestion failed.", {
            component: "study-language-en",
            operation: "ingest_content_pack",
            fatal: true,
            error: error instanceof Error ? error.message : String(error),
        });
        throw error;
    }
    ctx.contributePublicCapability("study:language:en", LANGUAGE);
    ctx.flow.extend(
        "bootstrap-platform",
        "register-flows",
        { id: "study-language-en:bootstrap-registration" },
        () => ({ moduleId: "study-language-en", languageCode: "en" }),
    );
    ctx.log?.("info", "English learning module enabled.", {
        component: "study-language-en",
        operation: "bootstrap",
    });
}
