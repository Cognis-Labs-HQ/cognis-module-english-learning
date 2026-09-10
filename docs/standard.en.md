# Cognis English Module

The Cognis English module provides an installable English learning experience for the Cognis Study gateway, as a versioned, declarative data-only content pack.

## Usage Examples

- Open `/study/library` to explore the English content through the schema-driven shared Study library.
- Resolve the host-provided `study:library` capability to access the versioned `en` content pack with localized schema metadata, semantic layer roles, and definition relationships backed by module-owned strings.
- Resolve the `study:language:en` capability to obtain the canonical `languageCode: "en"` descriptor used by the generated Study sub-navigation button.

## Technical Specification

The module is a read-only external Cognis extension. Its permanent UUID identifies it across releases, and its `requires` entry declares the Study gateway by UUID.

### Integration Contract

- `bootstrap.js` is the only platform integration entrypoint.
- Browser exposure is restricted to `ui/languages`; the data-only module contributes no host UI extension and no platform-bootstrap stage hook.
- The supplied `ctx` is the only cross-component bus for capability, flow, and locale-resource registrations.
- Runtime imports remain repository-relative and never access Cognis internals or sibling components.
- Scoped registrations are removable when the module is disabled or uninstalled.

- The uninstall hook records lifecycle cleanup; the module has no saved configuration or user-owned content because its learning datasets are read-only packaged files.

### Current Study data model

Schema version 12 models alphabet entries as atomic writing units with pronunciation lists and HTTPS audio references. It links words to ordered letter spellings and localized definitions, introduces grammatical particles, and composes sentences from ordered word and particle references. Audio remains remote, so the module ships no binary media. It also models common digraphs as compound writing units whose resolver-backed composition references are distinct from their localized definition references. The alphabet publishes a fixed chart grid, and required metadata filters declare their initial tags. The lowercase chart cards are addressed by stable numeric display IDs, and every capitalized alternate uses an explicit variant relationship to its lowercase parent. Word, particle, and sentence cards prefer their required localized definition instead of exposing internal record labels. Only the alphabet character layer requests minimal cards, so its entries show compact primary labels while composites and every higher-level layer retain their full presentation. Sentence labels must be reconstructed exactly after whitespace normalization from contiguous ordered lexical-unit and particle references; the seeded period is therefore an explicit punctuation particle rather than unlinked label text. The alphabet uses seven columns and two explicit trailing blanks to form four balanced rows. Letter records include their names and common IPA phonemes, while seven seeded digraphs cover `ch`, `sh`, `th`, `ph`, `wh`, `ng`, and `ck`. Variant relationships no longer prescribe a direction; the current host selects a bounded available position dynamically.

### Bootstrap failure policy

Content ingestion and the `study:language:en` capability are the module’s complete runtime behavior. The current host performs content imports atomically and returns the module to its disabled state after any remaining bootstrap failure, so the module follows that host-owned policy without a manifest override.

### Security

- The host Library validates the package namespace, semantic version, license, safe paths, localized schema, typed fields, and complete record graph before an atomic write.
- Ingestion failures are sent to the host logger with safe structured metadata.

### Release Process

- Keep the versions in `manifest.json`, `package.json`, and `package-lock.json` synchronized, and never change the module UUID.
- Run `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest`, and `git diff --check` before committing a release.
- Regenerate `manifest.files` after the final shipped-file change so every repository-relative path and SHA-256 digest remains verifiable.
