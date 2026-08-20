import { escapeHtml, showError } from "./reuse.js";

const root =
    document.querySelector("#study-language-en-library-root") ??
    document.querySelector("main");

async function mount(target) {
    try {
        const response = await fetch(
            "/api/v1/modules/study-language-en/library/snapshot",
            { credentials: "same-origin" },
        );
        const payload = await response.json();
        if (!response.ok) throw new Error("request_failed");
        const layers = Object.entries(payload.data);
        target.innerHTML = `<section class="english-learning card-elevated"><h1 data-i18n="module.study_language_en.library.title">English Library</h1><p data-i18n="module.study_language_en.library.intro">Review the learning records supplied by this module.</p><div class="library-grid">${layers.map(([name, rows]) => `<article><strong>${escapeHtml(name.replace("_", " "))}</strong><span>${rows.length}</span></article>`).join("")}</div></section>`;
    } catch {
        showError("module.study_language_en.library.error");
    }
}

if (root) void mount(root);
