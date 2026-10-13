# Cognis English Module

Cognis English 1.3.2 supplies a versioned learning graph, English dictionary enrichment, original print-letter writing guides and seven starter decks. Cognis owns the learning UI and all user data.

## Usage Examples

- Explore `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` and `/study/en/sentences`.
- Search with Free Dictionary in the Study navigation; selected vocabulary results populate the host composer.
- Browse the English Alphabet, First English Words, Everyday English Verbs and First English Sentences decks under `/study/flashcards`. Cognis manages deck study, favourites and sharing.

## Technical Specification

### Provider contract and lifecycle

The permanent module UUID is `b1adc29f-9d54-5785-9bea-2ce76f1981e4`; the required Study gateway UUID is `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap requires `ctx.capabilities.require("study:library:provider")` with working `ingestContentPack`, `registerLookupProvider` and `deleteContentPack` methods. It registers the writing and dictionary providers, ingests `data/`, then publishes `study:language:en` and a removable `bootstrap-platform` flow contribution. The descriptor has `code`, `languageCode`, module version, package and `starterDecks`.

Lookup registrations are removed on disable or failed activation. Host-scoped routes, static directories, capabilities and hooks follow the module lifecycle. An administrator-only `DELETE /api/v1/modules/study-language-en/config` returns 204 and remains available when disabled; the module stores no configuration. On uninstall, `deleteContent: false` retains the pack; `true` invokes the lifecycle-available provider's `deleteContentPack`. Cognis owns transactional cascade deletion and notifications. Failures propagate with safe structured logs.

### Content graph

Pack `english-core` 16.0.0, schema `english` revision 16 and content revision `2026-10-11.3` preserve the existing namespace and record identities. The pack contains 635 records: 52 alphabet entries, 17 letter combinations, 123 visible vocabulary entries, 135 hidden inflections, 10 hidden capitalized sentence starters, 21 grammar/punctuation entries, 45 sentences and 232 hidden definitions. All definitions have English, German, Indonesian and Japanese meanings. Definition localization uses the host's `studyenglish:definitions` prefix; marketplace keys use `module.study.language.en.*`.

Ordered spelling and sentence references resolve to actual records. Hidden inflection cards provide literal targets for seeded sentence validation; interactive forms use 37 declarative verb, copula and adjective paradigms, including irregular forms and their IPA. IPA readings remain speech notation rather than being linked to unrelated alphabet glyphs. Capitalized sentence starters preserve actual sentence text. Grammar particles include negation, prepositions, conjunctions and punctuation, and are non-editable. Definition relationships have a maximum of ten.

The form contracts declare alphabet/composite writing fields, vocabulary spelling carousels, sentence word/particle carousels and a sentence-structure carousel. The host controls form validation, UUID resolution, literal spacing, imports, limits and user notifications. The alphabet retains its seven-column chart and uppercase child variants. Only atomic letters request minimal previews.

### Writing guides and media

Every alphabet and letter-combination record has an original normalized JSON print-letter guide with ordered strokes, timestamps and per-character groups. The stroke provider returns cloned packaged patterns and performs no remote request. These are introductory print guides, not a mandatory handwriting style. No binary media is shipped. Audio is optional: external TTS URLs are not valid packaged audio assets and are therefore omitted. Cognis may use its own pronunciation facilities or user-uploaded audio.

### Dictionary boundary

Free Dictionary queries `https://api.dictionaryapi.dev/api/v2/entries/en/<word>` for English vocabulary only. It is searchable, versioned and field-focused; it does not translate sentences or supply writing guidance. Input is restricted to bounded English words, the endpoint is fixed, redirects are rejected, requests have a 15-second timeout and responses are validated and bounded. Duplicate readings/glosses are removed while source order is retained, and at most ten definitions/readings are returned. Source/license attribution is retained in hidden `dictionary_data`; externally supplied meanings stay English until the host's localization facility supplies other languages. See the dictionary documentation for details.

Native records retain their curated primary IPA and paradigm tags. New alphabet-only spellings link to packaged letters; unknown verbs receive no guessed irregular paradigm. A 404 uses a genuine native match when available, while failed/malformed requests produce a safe error. Cognis core owns persisted query caching, one-hour probes and twelve-hour changed-result publication. The module only retains immutable content indexes, not dictionary-response caches or timers.

### Packaging and validation

Privilege is needed for the host-owned language namespace; it does not bypass Study permissions. Runtime imports are repository-relative and tests use local public-contract fakes. All four locale bundles and documentation variants ship together. Original content and guides use the pack's AGPL-3.0-or-later license; dictionary results retain their external attribution separately.

Run `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` and `git diff --check`. After final shipped-file edits, regenerate manifest hashes. Changelogs are release metadata outside the packaged inventory.

## Expanded Starter Decks

English now supplies seven starter decks, adding uppercase alphabet, common spelling combinations and everyday adjectives to the four existing decks. Existing keys remain stable; localized names and complete alphabet order are validated.

Schema revision 16 removes the duplicate adjective filter option. Module 1.3.2 and content pack 16.0.0 retain the existing content identities. Instructions establish ctx as the application backbone; Cognis owns action flows, user data and dictionary caching.

## Shared Language Pages

Language selection opens Cognis-owned Explore pages even when content providers declare no child pages. Switching languages preserves the equivalent writing, vocabulary or sentence role; Flashcards, Library and Requests keep their shared page context. English declares alphabet, letter combinations, vocabulary and sentences using its opinionated slugs. Aborted favourites loads release their mount without misleading failure toasts.

## Alphabet, grammar and noun-number families

Schema 17 and content pack 17.0.0 separate letter names from optional `letter_sounds` IPA details and contain no filler alphabet cells. Punctuation has its own sentence-composer carousel. Twenty-two additional clause and discourse structures include localized meanings and speech pronunciations. Thirty-three reviewed countable noun families opt into Cognis plural transformations with `optInTag: plural`; rules include changed spellings and readings. Mass nouns remain outside those families. Forms are derived from base cards rather than shipped as duplicate entries. Module version: 1.3.3.

### Contributor layout and host ownership

Start new modules from [cognis-module-template](https://github.com/Cognis-Labs-HQ/cognis-module-template); this repository follows its pinned contributor guidance in `AGENTS.md`. `bootstrap.js` owns lifecycle orchestration, `api/index.js` wires ctx-derived dependencies, `api/routes/<domain>/index.js` owns HTTP handlers, and reusable server code belongs in `api/reuse/`. Browser features stay under `ui/`, styles under `ui/styles/`, reusable markup under `ui/templates/`, and localized documentation under `docs/index.<locale>.md`. Historical release entries live in `docs/changelog/` and are excluded from package hashes. Optional concerns are omitted when unsupported.

Consume public ctx capabilities and declared flows; do not import Cognis internals or sibling modules. Dashboard capability/navbar providers export `mountProvider(scopedUiCtx)` and return cleanup for owned resources. Imports must not register module behavior. The host disposes scoped capabilities, flow hooks, listeners and provider state when disabled, then mounts cached providers again when re-enabled. Settings/admin factories and authentication-footer descriptor providers follow their own documented host contracts. Test these contracts with standalone fakes, run the executable layout guard, regenerate hashes after the final packaged edit, and run lint, tests and manifest validation before publishing.
