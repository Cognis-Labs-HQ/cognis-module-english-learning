import path from "node:path";

const pages = [
    {
        id: "study-language-en-alphabet",
        pattern: "^/study/alphabet$",
        base: "/study/alphabet",
        page: "alphabet",
        minRole: "user",
    },
    {
        id: "study-language-en-classroom",
        pattern: "^/study/en-classroom$",
        base: "/study/en-classroom",
        page: "classroom",
        minRole: "user",
    },
];

export function registerUi(ctx) {
    ctx.registerStaticDir("", path.join(ctx.moduleRoot, "ui"));
    for (const page of pages) {
        ctx.registerSpaRoute({
            id: page.id,
            pattern: page.pattern,
            base: page.base,
            scriptUrl: `/static/modules/study-language-en/${page.page}.js`,
            stylesheets: [
                "/static/modules/study-language-en/styles/english.css",
            ],
            access: { minRole: page.minRole },
        });
    }
    ctx.registerNavbarPlugin({
        scriptUrl: "/static/modules/study-language-en/navbar.js",
        access: { minRole: "user" },
    });
}
