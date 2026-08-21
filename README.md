# Cognis English

Cognis English is the installable English language-learning extension for the Cognis Study gateway. It was extracted from [`src/modules/study/languages/en`](https://github.com/Cognis-Labs-HQ/Cognis/tree/feature-remove-modules-from-administration-page/src/modules/study/languages/en) while preserving its permanent module UUID and English library data.

The repository follows the external-module contract introduced by [Cognis PR #172](https://github.com/Cognis-Labs-HQ/Cognis/pull/172) and the repository layout used by the Cognis HQ [Jitsi Meet](https://github.com/Cognis-Labs-HQ/cognis-module-jitsi-meet) and [Nextcloud Whiteboard](https://github.com/Cognis-Labs-HQ/cognis-module-nextcloud-whiteboard) modules.

## Features

- English alphabet data and an authenticated alphabet page at `/study/alphabet`.
- An administrator-only library summary at `/study/en-library`.
- A classroom entry point at `/study/en-classroom`.
- A read-only authenticated library API under `/api/v1/modules/study-language-en/library`.
- A `study:language:en` capability for Study integration without importing Cognis internals.
- Localized module navigation and page strings in English, German, Indonesian, and Japanese.
- Localized marketplace metadata and an uninstall cleanup hook for the module lifecycle.

## Development

```sh
npm install
npm test
npm run check:manifest
```

After changing a shipped file, run `npm run manifest:hashes` before validating or committing.

## Installation

Add this Git repository as a module source in the Cognis module marketplace, review its declared Study gateway dependency and authentication capability, install it, and enable it. The Study gateway UUID requirement remains `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Architecture

`bootstrap.js` is the only host integration point. It registers module-owned UI and API surfaces through `ctx`, contributes the English language descriptor as a public capability, and extends the platform bootstrap flow. Runtime code uses repository-relative imports and does not import Cognis internals.
