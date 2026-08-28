# AI Instructions for Cognis English

These instructions are the module-relevant subset of the Cognis repository guidance. They apply to this entire repository.

## Session startup

Before exploring, implementing, linting, or testing, run `npm install`. Use `rg` rather than recursive `grep` for searches.

## External module contract

This repository delivers exactly one external Cognis module. Keep `manifest.json`, `package.json`, `routes.json`, `bootstrap.js`, and all declared entrypoints at the repository root or their declared repository-relative paths. Preserve the module UUID permanently. Every `requires` value must be a component UUID.

Keep the versions in `manifest.json`, `package.json`, and `package-lock.json` synchronized. Keep `package.json` configured with `type: module`, keep `routes.json` as an array, and preserve exact filename casing. Always set `ui.stringsBaseUrl` in `manifest.json` to the module-owned locale bundle base URL so Cognis can resolve localized manifest metadata before the module UI loads. After the final file change, regenerate every SHA-256 digest in `manifest.files`; do not include `manifest.json` in its own digest list. Keep repository metadata pointed at this project, review dependencies carefully, and never add secrets or personal data.

## Component isolation and ctx

`bootstrap.js` is the sole system integration entrypoint. Runtime code and tests must not import Cognis internals, sibling components, or private implementations. Treat `ctx` as the complete cross-component bus: obtain behavior through capabilities, register behavior through capabilities and named flow stages, detect optional components through capabilities, and keep all registrations removable. Route handlers validate and orchestrate; ctx-provided capabilities execute provider-specific work.

Return a disposer from `bootstrapModule` or export `teardownModule(ctx)` when the module owns work that scoped registration cannot remove. Enable-disable-enable and uninstall cycles must leave no module-owned routes, contributions, capabilities, hooks, timers, listeners, or sockets behind.

## Structure and reuse

Keep API code under `api/`, browser code under `ui/`, CLI code under `cli/`, documentation under `docs/`, datasets under `data/`, and artwork under `assets/`. Put genuinely reusable layer-local code in `reuse/`. Do not create directories named `shared`, `utils`, `helpers`, or `common`. Keep feature-specific code beside its feature.

Keep files at or below 1000 lines. Prefer descriptive names and avoid one- or two-letter bindings except conventional coordinates, loop counters, row/column counters, `_`, and `id`.

## Changelog entries

Store changelog entries under `changelog/`, with one localized Markdown file per supported language for every pull request. Use `<branch-name-without-copilot-prefix>.<lang>.md`; for example, branch `copilot/fix-library-filter` produces `fix-library-filter.en.md`, `fix-library-filter.de.md`, `fix-library-filter.id.md`, and `fix-library-filter.ja.md`.

Each entry must begin with a localized `#` release title and a single localized feature-branch metadata line. Use one `##` heading per change point, followed by the full detail for that point. Finish with a localized `##` commit section containing links to the implementation commits described by the entry. Use `N/A` as the branch and omit commit links only for directory index documents. Translate the content genuinely in every language, and do not rewrite historical entries except to correct facts.

Every implementation commit described by the current changelog must ensure that the changelog links the immediately preceding implementation commit. If provenance is requested immediately before implementation, finish with a dedicated changelog-only bookkeeping commit that links the preceding implementation commit and does not link itself.

## UI requirements

Use the Cognis page composer and client-side router contracts. Never navigate with `window.location.href`, `window.location.replace`, or `window.location.reload`. Resolve user-facing text through module-owned XML resources, using lowercase namespaced keys with German, English, Indonesian, and Japanese parity and genuine translations. Use host capabilities for timestamp formatting, transient feedback, fonts, and themes. Do not use `alert`, `confirm`, or `prompt`, or place result messages in arbitrary DOM nodes. Preserve standard avatar hover and navigation behavior. Do not add CSS comments; prefer themeable SVG assets to emoji or platform-dependent glyphs.

## API, security, and logging

Validate and sanitize inputs at API boundaries. Authenticate and authorize before business logic, use least privilege and secure defaults, and never expose internal errors. Log caught failures at `error` level with safe structured metadata including component and operation. Mark uncaught failures fatal and log state-changing user activity at `info`. Never leave silent catches. Do not use `Math.random()` for generated values; use Web Crypto or Node Crypto. Do not add obsolete compatibility shims or tests that merely assert removed artifacts are absent.

## Tests and quality

Tests live under `api/tests/`, `ui/tests/`, and `cli/tests/`, run standalone, and use local fakes for external capabilities. Test public contracts rather than sibling Cognis implementations. Every behavior change requires suitable tests, logging, and documentation. Keep localized documentation synchronized and do not put AI reasoning or process notes in product files.

Before committing, run `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check`. Use the repository Prettier configuration: four-space indentation, double quotes in JavaScript, and trailing commas in multiline structures. Avoid tabs and trailing whitespace, and never wrap imports in `try`/`catch`.

## Review discipline

Treat human and automated review comments as actionable unless they conflict with higher-priority requirements. Record intentionally deferred items in root `TODO.md` with a concrete technical reason. Keep changes focused while improving directly adjacent violations.
