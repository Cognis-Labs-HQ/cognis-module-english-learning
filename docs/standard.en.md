# Cognis English Module

The Cognis English module provides an installable English learning experience for the Cognis Study gateway, as a versioned, declarative data-only content pack.

## Usage Examples

- Open `/study/library?language=en` to explore the English content through the schema-driven shared Study library.
- Resolve the host-provided `study:library` capability to access the versioned `en` content pack with localized schema metadata and semantic layer roles.
- Resolve the `study:language:en` capability to integrate the language descriptor without importing module internals.

## Technical Specification

The module is a read-only external Cognis extension. Its permanent UUID identifies it across releases, and its `requires` entry declares the Study gateway by UUID.

### Integration Contract

- `bootstrap.js` is the only platform integration entrypoint.
- The supplied `ctx` is the only cross-component bus for capability, flow, and locale-resource registrations.
- Runtime imports remain repository-relative and never access Cognis internals or sibling components.
- Scoped registrations are removable when the module is disabled or uninstalled.

- The uninstall hook records lifecycle cleanup; the module has no saved configuration or user-owned content because its learning datasets are read-only packaged files.

### Security

- The host Library validates the package namespace, semantic version, license, safe paths, localized schema, typed fields, and complete record graph before an atomic write.
- Ingestion failures are sent to the host logger with safe structured metadata.

### Release Process

- Keep the versions in `manifest.json`, `package.json`, and `package-lock.json` synchronized, and never change the module UUID.
- Run `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check` before committing a release.
- Regenerate `manifest.files` after the final shipped-file change so every repository-relative path and SHA-256 digest remains verifiable.
