# Releasing

Releases keep the external-module identity and all declared package metadata consistent while producing a verifiable manifest file inventory.

## Usage examples

Run `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check` before committing a release.

## Technical specification

Synchronize the version in `package.json`, `package-lock.json`, `manifest.json`, and the language capability descriptor. Never change the manifest UUID. Regenerate `manifest.files` only after the final file change, then validate its paths and SHA-256 hashes.
