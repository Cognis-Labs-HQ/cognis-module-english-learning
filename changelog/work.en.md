# Use the shared Study library

**Feature Branch:** work

## Capability-backed learning records

The module now installs its declarative English content pack atomically through the host-provided `study:library:provider` capability. Its duplicate library API, store, page, and navigation entry have been removed in favor of schema-driven host rendering.

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

The package now uses schema and content-pack version 14. Only the alphabet character layer sets `minimal: true`; composites, definitions, words, particles, and sentences deliberately retain standard cards. The lowercase grid resolves stable numeric display IDs, capitalized alternates explicitly declare both variant identity and spatial parentage, and word, particle, and sentence layers opt into required localized display definitions. Common digraph compositions remain separate from definitions, while required metadata defaults and stable identities preserve current host behavior.

## Isolated browser surface

The module now serves only its locale bundle beneath the module static namespace and no longer hooks the global platform-bootstrap flow. Its data ingestion and public language capability remain unchanged, preventing this data-only package from participating in or disrupting host navigation and user-menu composition.

## Complete sentence composition

Sentence labels now resolve entirely from contiguous ordered lexical-unit and particle references, matching the latest Cognis content-pack validation. The final period is stored as a punctuation particle with its own localized definition, so the seeded sentence contains no unlinked text.

## Readable alphabet and expanded sounds

The alphabet now renders as a balanced seven-column, four-row chart with explicit trailing blanks. Each capital and lowercase record includes its letter name plus common IPA phonemes, and the content adds `ph`, `wh`, `ng`, and `ck` to the existing digraph set. Variant relationships now rely on the host’s current bounded dynamic placement contract instead of the removed direction hint, avoiding stale presentation data that could contribute to the reported Library runtime failure.

## Explicit spatial child relationships

Schema version 14 separates alternate-form identity from visual hierarchy as required by the latest host contract. The capital-to-lowercase relationship now declares both `variant: true` and `child: true`: the first classifies the uppercase record as an alternate spelling, while the second alone authorizes the card to unfold around its actual lowercase parent.

## Explicit host-namespace privilege

Cognis PR #220 restricts unprivileged modules to registrations under their own module ID. Because this language module must publish the host-defined `study:language:en` capability, its manifest now explicitly sets `privileged: true`. The request is narrowly documented: runtime behavior remains limited to content-pack ingestion, the language descriptor, and module-owned locale exposure, with no host routes or security-sensitive flow hooks.

## Contextual vocabulary definitions

Vocabulary records now demonstrate PR #196’s definition priority with the single-letter word `a`. Its localized meaning describes the indefinite article and deliberately differs from the source alphabet card’s letter definition. Every seeded vocabulary card retains its own four-locale meaning where the lexical concept is distinct; the host may use a source definition only when a lexical entry supplies none, and unrelated navigation clears that fallback.

## Authoritative external-package contract

Schema version 14 adopts Cognis PR #226’s external-package boundary. The content manifest marks provider records as protected and carries validated JSON-compatible catalog metadata; schema metadata likewise publishes stable provider identity. Bootstrap now resolves the public `study:library:provider` capability, requires both `inspectContentPack` and `ingestContentPack`, performs the non-mutating inspection first, and then requests atomic ingestion. All fields continue to use built-in validated types, so no custom validation escape hatch is needed.

## Explicit authoring and relationship semantics

The authoritative 14.1.0 release evolves schema compatibility version 14 in place, following the same-pack migration used by the Japanese reference implementation. Every record now carries a provider-neutral content class; definitions are hidden, sentences are composite, and particles are explicitly non-editable. True spelling and ordered-sequence relationships declare `composition`, while definition and variant links have no resolver role so reverse navigation remains unified without polluting composed titles. Field schemas now provide localized authoring controls and an English-scoped audio-file contract without enabling a module-owned editor.

## Documentation and contracts

The manifest requires `study:library:provider`, follows the current host-owned atomic activation contract, and publishes module version 1.2.36.

## Commits

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0c5afdd)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0c579e3)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/090e11f)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a5e4adb)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6819fb5)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/cb62fd2)

- [Complete-sequence implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3b52255)

- [Locale-isolation implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/78c86f0)
- [Latest presentation-contract implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4ac2cd4)
- [Explicit-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/33ba470)
- [Capital-variant alignment](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5034aab)
- [Composition-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a42d840)
- [Directional-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4d4bd7e)
- [Latest host-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d0aad0d)
- [Latest schema implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bc26d0d)
- [Latest preceding implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/60701c547812a699d6e1514cbaa8fa90b9630ea4)
- [Implementation baseline](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
