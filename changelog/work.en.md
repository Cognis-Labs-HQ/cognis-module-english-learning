# Use the shared Study library

**Feature Branch:** work

## Capability-backed learning records

The module now installs its declarative English content pack atomically through the host-provided `study:library` capability and reads alphabet entries from the shared Study Library API. Its duplicate library API, store, page, and navigation entry have been removed.

## English flag artwork

The module icon now uses a scalable SVG rendition of the English flag instead of the generic Cognis lettermark.

## Documentation and contracts

The manifest now requires `study:library`, the module version is 1.2.16, and localized documentation directs users to the shared Study library.

## Commits

- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4a9978f)
