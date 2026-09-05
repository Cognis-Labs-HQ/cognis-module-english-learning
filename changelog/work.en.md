# Use the shared Study library

**Feature Branch:** work

## Capability-backed learning records

The module now installs its declarative English content pack atomically through the host-provided `study:library` capability and reads alphabet entries from the shared Study Library API. Its duplicate library API, store, page, and navigation entry have been removed.

## English flag artwork

The module icon now uses a scalable SVG rendition of the English flag instead of the generic Cognis lettermark.

## Preserve the selected language

English module and classroom links now carry the validated `language=en` query so Study and Library navigation retain the selected BCP-47 language as required by Cognis PR #213.

## Documentation and contracts

The manifest now requires `study:library`, the module version is 1.2.17, and localized documentation directs users to the shared Study library.

## Commits

- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3092c91)
