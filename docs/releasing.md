# Releasing

Synchronize the version in `package.json`, `package-lock.json`, `manifest.json`, and the language capability descriptor. Never change the manifest UUID. Run `npm install`, `npm test`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check` before committing a release.
