# Cognis English

**English** · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Cognis English is the installable English language-learning extension for the Cognis Study gateway. It preserves the permanent module UUID and packaged English library data from the original built-in Study language module while following the Cognis external-module contract.

## Features

- English alphabet data and an authenticated alphabet page at `/study/alphabet`.
- An administrator-only library summary at `/study/en-library`.
- A classroom entry point at `/study/en-classroom`.
- A read-only authenticated library API under `/api/v1/modules/study-language-en/library`.
- A `study:language:en` capability for Study integration without importing Cognis internals.
- Localized navigation, pages, and marketplace metadata in English, German, Indonesian, and Japanese.
- An uninstall cleanup hook for the module lifecycle.

## Installation

Add this Git repository as a module source in the Cognis module marketplace, review its declared Study gateway dependency and authentication capability, install it, and enable it. The required Study gateway UUID is `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Architecture

`bootstrap.js` is the only host integration point. It registers module-owned UI and API surfaces through `ctx`, contributes the English language descriptor as a public capability, and extends the platform bootstrap flow. Runtime code uses repository-relative imports and does not import Cognis internals.

The manifest publishes `ui.stringsBaseUrl` so Cognis can load module-owned translations before the browser UI starts. UI and API registrations remain scoped so disabling or uninstalling the module leaves no module-owned behavior behind.

## Contributor quality checks

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

After changing a shipped file, run `npm run manifest:hashes` before validating or committing. See [`docs/standard.en.md`](docs/standard.en.md) for the complete integration contract; equivalent German, Indonesian, and Japanese references live beside it.
