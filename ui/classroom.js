const root =
    document.querySelector("#study-language-en-classroom-root") ??
    document.querySelector("main");
if (root) {
    root.innerHTML =
        '<section class="english-learning card-elevated"><h1 data-i18n="module.study_language_en.classroom.title">English Classroom</h1><p data-i18n="module.study_language_en.classroom.intro">Choose English in Study to begin a classroom session.</p><a class="primary-action" href="/study?language=en" data-cognis-route data-i18n="module.study_language_en.classroom.open">Open Study</a></section>';
}
