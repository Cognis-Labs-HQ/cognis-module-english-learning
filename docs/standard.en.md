# Cognis English Module

The Cognis English module provides an installable English learning experience for the Cognis Study gateway, including alphabet data, a read-only learning library, and classroom entry points.

## Usage Examples

- Open `/study/alphabet?language=en` to explore the 26-letter English alphabet.
- Open `/study/library?language=en` to review the English records in the shared Study library.
- Open `/study/en-classroom?language=en` to start an English classroom session through Study.
- Resolve the host-provided `study:library` capability to access the ingested English content pack.
- Resolve the `study:language:en` capability to integrate the language descriptor without importing module internals.

## Technical Specification

The module is a read-only external Cognis extension. Its permanent UUID identifies it across releases, and its `requires` entry declares the Study gateway by UUID.

### Integration Contract

- `bootstrap.js` is the only platform integration entrypoint.
- The supplied `ctx` is the only cross-component bus for routes, UI registrations, capabilities, and flow hooks.
- Runtime imports remain repository-relative and never access Cognis internals or sibling components.
- Scoped registrations are removable when the module is disabled or uninstalled.

- The uninstall hook records lifecycle cleanup; the module has no saved configuration or user-owned content because its learning datasets are read-only packaged files.

### Security

- Library endpoints authenticate requests before reading data.
- Layer names are allow-listed, and dataset paths are fixed by the module store.
- API responses use stable public errors without exposing implementation details.
- Initialization failures are sent to the host logger with safe structured metadata.

### Release Process

- Keep the versions in `manifest.json`, `package.json`, and `package-lock.json` synchronized, and never change the module UUID.
- Run `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check` before committing a release.
- Regenerate `manifest.files` after the final shipped-file change so every repository-relative path and SHA-256 digest remains verifiable.
