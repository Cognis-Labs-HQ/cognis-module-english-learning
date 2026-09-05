# Use the shared Study library

**Feature Branch:** work

## Capability-backed learning records

The module now installs its declarative English content pack atomically through the host-provided `study:library` capability. Its duplicate library API, store, page, and navigation entry have been removed in favor of schema-driven host rendering.

## English flag artwork

The module icon now uses a scalable SVG rendition of the English flag instead of the generic Cognis lettermark.

## Preserve the selected language

The package advertises canonical English language metadata so Cognis can generate Library navigation with the validated `language=en` context required by Cognis PR #213.

## Versioned language-package contract

The English pack now owns the `en` namespace, publishes localized schema metadata and semantic layer roles, uses a new immutable schema and package version, and advertises its validated package identity through the language capability as required by Cognis PR #214.

## Data-only Study package

Removed the module-owned alphabet, classroom, navbar, CLI, API, and styling surfaces. Cognis now discovers and renders the English package generically from its advertised immutable package descriptor, semantic schema, and localized metadata. Only the locale bundle remains statically registered.

## Documentation and contracts

The manifest now requires `study:library`, the module version is 1.2.18, and localized documentation directs users to the shared Study library.

## Commits

- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30df435)
