import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("uses host-router navigation and module-owned translations", async () => {
    const classroom = await readFile("ui/classroom.js", "utf8");
    const navbar = await readFile("ui/navbar.js", "utf8");
    assert.match(classroom, /data-cognis-route/);
    assert.doesNotMatch(classroom, /window\.location/);
    assert.match(classroom, /\/study\?language=en/);
    assert.match(navbar, /\/study\/alphabet\?language=en/);
    assert.match(navbar, /stringsBaseUrl/);
});

test("keeps locale keys synchronized", async () => {
    const locales = await Promise.all(
        ["en", "de", "id", "ja"].map((locale) =>
            readFile(`ui/languages/${locale}/strings.xml`, "utf8"),
        ),
    );
    const keys = (xml) =>
        [...xml.matchAll(/name="([^"]+)"/g)].map((match) => match[1]).sort();
    for (const locale of locales.slice(1))
        assert.deepEqual(keys(locale), keys(locales[0]));
});

test("uses an English flag SVG for the module icon", async () => {
    const icon = await readFile("assets/icon.svg", "utf8");

    assert.match(icon, /<title[^>]*>Flag of England<\/title>/);
    assert.match(icon, /fill="#ce1124"/);
    assert.doesNotMatch(icon, /<text\b/);
});
