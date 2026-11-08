export const definition = {
    moduleId: "study-language-en",
    language: "en",
    version: 1,
    id: "introduction",
    titleKey: "module.study-language-en.tutorial.title",
    steps: [
        {
            highlightNext: true,
            id: "explore",
            titleKey: "module.study-language-en.tutorial.explore.title",
            bodyKey: "module.study-language-en.tutorial.explore.body",
            effects: {
                callout: true,
                arrow: true,
                spotlight: true,
            },
            missing: {
                timeoutMs: 5000,
                action: "retry",
            },
            target: "study.navigation",
        },
        {
            highlightNext: true,
            id: "practice",
            titleKey: "module.study-language-en.tutorial.practice.title",
            bodyKey: "module.study-language-en.tutorial.practice.body",
            effects: {
                callout: true,
                arrow: true,
                spotlight: true,
            },
            missing: {
                timeoutMs: 5000,
                action: "retry",
            },
            target: "study.modules",
        },
    ],
};
