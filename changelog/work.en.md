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

## Latest Library schema

The pack follows the latest Study Library schema: alphabet records provide pronunciation lists and remote audio, vocabulary is linked to ordered spellings and localized definitions, and sentence sequences distinguish lexical words from grammatical particles. No binary media is packaged.

## Latest host compatibility

The package now uses schema and content-pack version 9. Lowercase letters form the fixed base grid, and every capitalized alternate declares the host-required variant discriminator before consistently unfolding on the right. Common digraphs remain compound writing units with separately labeled composition and definition relationships; required metadata defaults and stable identities preserve current host behavior.

## Documentation and contracts

The manifest requires `study:library`, follows the current host-owned atomic activation contract, and publishes module version 1.2.26.

## Commits

- [Capital-variant alignment](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5034aab)
- [Composition-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a42d840)
- [Directional-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4d4bd7e)
- [Latest host-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d0aad0d)
- [Latest schema implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bc26d0d)
- [Latest preceding implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/60701c547812a699d6e1514cbaa8fa90b9630ea4)
- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
