import { registerApiRoutes } from "./api/index.js";
import { registerUi } from "./api/ui.js";

const LANGUAGE = Object.freeze({
    code: "en",
    name: "English",
    flag: "GB",
    version: "1.2.10",
    childComponents: [
        {
            id: "alphabet",
            labelKey: "module.study_language_en.alphabet.title",
            pageUrl: "/study/alphabet",
            order: 0,
        },
        {
            id: "library",
            labelKey: "module.study_language_en.library.title",
            pageUrl: "/study/en-library",
            minRole: "admin",
            order: 100,
        },
        {
            id: "classroom",
            labelKey: "module.study_language_en.classroom.title",
            pageUrl: "/study/en-classroom",
            order: 999,
        },
    ],
});

export function bootstrapModule(ctx) {
    registerUi(ctx);
    const library = registerApiRoutes(ctx.router, ctx);
    ctx.contributePublicCapability(
        "study:language:en",
        Object.freeze({
            ...LANGUAGE,
            snapshot: library.snapshot,
        }),
    );
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
