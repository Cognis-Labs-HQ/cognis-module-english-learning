import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "../..");
const TEMPLATE = resolve(ROOT, ".github/DOCUMENTATION_TEMPLATE.en.md");
const LANGUAGES = ["de", "en", "id", "ja"];

function markdownFiles(directory) {
    return readdirSync(directory).flatMap((name) => {
        const path = resolve(directory, name);
        if (statSync(path).isDirectory()) return markdownFiles(path);
        return name.endsWith(".md") ? [path] : [];
    });
}

function changelogFiles() {
    const changelogDirectory = resolve(ROOT, "changelog");
    return readdirSync(changelogDirectory)
        .filter((name) => name.endsWith(".md"))
        .map((name) => resolve(changelogDirectory, name));
}

function headingLevels(path) {
    return readFileSync(path, "utf8")
        .split("\n")
        .filter((line) => /^#{1,6} /.test(line))
        .map((line) => line.match(/^#+/)[0].length);
}

test("documentation follows the hidden heading convention", () => {
    const expected = headingLevels(TEMPLATE).slice(0, 3);
    const violations = markdownFiles(resolve(ROOT, "docs")).flatMap((path) => {
        const actual = headingLevels(path).slice(0, expected.length);
        return actual.length === expected.length &&
            actual.every((level, index) => level === expected[index])
            ? []
            : [relative(ROOT, path)];
    });
    assert.deepEqual(violations, []);
});

test("documentation templates exist for every supported language", () => {
    const expected = headingLevels(TEMPLATE);
    for (const language of LANGUAGES) {
        const template = resolve(
            ROOT,
            `.github/DOCUMENTATION_TEMPLATE.${language}.md`,
        );
        assert.ok(statSync(template).isFile());
        assert.deepEqual(headingLevels(template), expected);
    }
});

test("every documentation topic has one variant per supported language", () => {
    const documents = markdownFiles(resolve(ROOT, "docs"));
    const families = new Map();
    for (const path of documents) {
        const relativePath = relative(resolve(ROOT, "docs"), path);
        const match = /^(.*)\.(de|en|id|ja)\.md$/.exec(relativePath);
        assert.ok(
            match,
            `${relative(ROOT, path)} must include a language suffix`,
        );
        const [, topic, language] = match;
        const variants = families.get(topic) ?? new Set();
        variants.add(language);
        families.set(topic, variants);
    }
    for (const [topic, variants] of families) {
        assert.deepEqual([...variants].sort(), [...LANGUAGES].sort(), topic);
    }
});

test("changelogs use localized variants and include provenance", () => {
    const files = changelogFiles();
    const variantsByTopic = new Map();
    const violations = files.flatMap((path) => {
        const filename = relative(resolve(ROOT, "changelog"), path);
        const match = /^(.*)\.(de|en|id|ja)\.md$/.exec(filename);
        if (!match) return [relative(ROOT, path)];
        const [, topic, language] = match;
        const variants = variantsByTopic.get(topic) ?? new Set();
        variants.add(language);
        variantsByTopic.set(topic, variants);

        const markdown = readFileSync(path, "utf8");
        const branchMatches = [
            ...markdown.matchAll(
                /^\*\*(?:Feature Branch|Feature-Zweig|Cabang Fitur|機能ブランチ):\*\*\s+(.+)$/gm,
            ),
        ];
        const branch = branchMatches[0]?.[1]?.trim();
        const hasTitle = /^#\s+\S.+$/m.test(markdown);
        const hasChangeDetails = /^##\s+.+\n\n\S.+$/m.test(markdown);
        const hasCommitSection =
            /^## .*?(?:commits?|änderungen|komit|コミット).*$/im.test(markdown);
        const commitUrls = [
            ...markdown.matchAll(
                /https:\/\/github\.com\/Cognis-Labs-HQ\/cognis-module-english-learning\/commit\/[0-9a-f]+/gi,
            ),
        ];
        const valid =
            branchMatches.length === 1 &&
            branch &&
            hasTitle &&
            hasChangeDetails &&
            hasCommitSection &&
            (branch === "N/A"
                ? commitUrls.length === 0
                : commitUrls.length > 0);
        return valid ? [] : [relative(ROOT, path)];
    });

    for (const [topic, variants] of variantsByTopic) {
        if (
            [...variants].sort().join(",") !== [...LANGUAGES].sort().join(",")
        ) {
            violations.push(topic);
        }
    }
    assert.deepEqual(violations, []);
});
