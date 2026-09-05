# Use the shared Study library

**Feature Branch:** work

## Capability-backed learning records

The module now installs its declarative English content pack atomically through the host-provided `study:library` capability. Its duplicate library API, store, page, and navigation entry have been removed in favor of schema-driven host rendering.

## English flag artwork

The module icon now uses a scalable SVG rendition of the English flag instead of the generic Cognis lettermark.

## Preserve the selected language

The language capability now provides `languageCode: "en"` using the canonical Study language descriptor. Cognis PR #215 stores that code on the generated Study sub-navigation button and carries the selection in router state, so module URLs remain clean and no longer contain a language query.

## Versioned language-package contract

The English pack now owns the `en` namespace, publishes localized schema metadata and semantic layer roles, uses a new immutable schema and package version, and advertises its validated package identity through the language capability as required by Cognis PR #214.

## Data-only Study package

Removed the module-owned alphabet, classroom, navbar, CLI, API, and styling surfaces. Cognis now discovers and renders the English package generically from its advertised immutable package descriptor, semantic schema, and localized metadata. Only the locale bundle remains statically registered.

## Resolvable dictionary definitions

The schema now declares the Library definition-localization contract and an explicit required alphabet-to-definition relationship. Every seeded letter links to a definition whose string key resolves in each module locale bundle, with matching localized text stored in the content record.

## Documentation and contracts

The manifest now requires `study:library`, the module version is 1.2.20, and localized documentation directs users to the shared Study library.

## Commits

- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
