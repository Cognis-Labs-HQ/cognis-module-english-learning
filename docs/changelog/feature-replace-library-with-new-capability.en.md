# English provider alignment

**Feature Branch:** feature-replace-library-with-new-capability

## Ship seeded pronunciation recordings

Spoken seed cards include deduplicated offline-generated MP3 files and voice attribution. Sentences continue using ordered constituent playback.

## Register scoped audio retrieval

Both Study modules expose the same removable audio-provider contract and retrieve bundled recordings with bounded local reads. The host owns authorization, cache policy and composite playback.

## Package targets and developer guidance

Release 1.3.8 — Package validation checks that entrypoints, icons, banners and screenshots are regular files inside the checkout, including resolved paths. Documentation describes public contracts and refers to manifests for release metadata; changelogs retain release provenance.

## Expanded learning graph

635 validated records include 123 visible words, 45 sentences, writing guides, 37 accurate transformation sets and four starter decks. Existing namespace and source IDs are preserved; hidden forms and capitalized starters make sentence dependencies explicit.

## Current Cognis provider contract

Require the narrow provider capability, remove registrations on failure/disable and invoke host content-pack deletion when uninstall requests it. Host flows, cache policy, permissions, flashcards and sharing retain ownership.

## Search and writing enrichment

Free Dictionary provides bounded vocabulary meanings and IPA, preserves attribution and links letters. Original JSON writing patterns support all 52 letters and 17 combinations without binary assets. Invalid packaged TTS URLs are removed and audio becomes optional.

## Validation and documentation

Standalone behavioral tests cover lifecycle, dictionary failures/limits, graph dependencies, inflections and decks. Readability checks retain declaration spacing. All four localized standards, dictionary guides, README files and locale resources are synchronized. Module 1.3.0 ships pack 15.0.0/schema 15.

## Expanded Starter Decks

English now supplies seven starter decks, adding uppercase alphabet, common spelling combinations and everyday adjectives to the four existing decks. Existing keys remain stable; localized names and complete alphabet order are validated.

## Content and Contract Corrections

Schema revision 16 removes the duplicate adjective filter option. Module 1.3.1 and content pack 16.0.0 retain the existing content identities. Instructions establish ctx as the application backbone; Cognis owns action flows, user data and dictionary caching.

## Shared Language Pages

Language selection opens Cognis-owned Explore pages even when content providers declare no child pages. Switching languages preserves the equivalent writing, vocabulary or sentence role; Flashcards, Library and Requests keep their shared page context. English declares alphabet, letter combinations, vocabulary and sentences using its opinionated slugs. Aborted favourites loads release their mount without misleading failure toasts.

## Alphabet, grammar and noun-number families

Schema 17 and content pack 17.0.0 separate letter names from optional `letter_sounds` IPA details and contain no filler alphabet cells. Punctuation has its own sentence-composer carousel. Twenty-two additional clause and discourse structures include localized meanings and speech pronunciations. Thirty-three reviewed countable noun families opt into Cognis plural transformations with `optInTag: plural`; rules include changed spellings and readings. Mass nouns remain outside those families. Forms are derived from base cards rather than shipped as duplicate entries. Module version: 1.3.3.

## Template contributor standard

Synchronize AGENTS.md with the external-module template while retaining domain-specific rules. Adopt the canonical release-note location and preserve historical content and permanent module identity.

## Standard structure and owned integration

Synchronize template guidance, domain route paths, localized integration documentation, executable structure checks and final package digests. Keep existing public URLs and module identity. Browser contributions follow their owning host lifecycle contracts.

## Study branding and artwork

Rebrand the module as English Study and provide a matching PNG icon and banner, keeping essential artwork inside the marketplace’s center-crop safe area. Translate the visible module name and update integration documentation while preserving module UUIDs, language codes, package names and content identities.

## Consistent marketplace descriptions

Use short action summaries and concrete feature descriptions across marketplace metadata, keeping localized meanings aligned.

## Require multiword sentences

Sentence cards require at least two word references through the Library schema. The starter greeting is “Hello, my friend!” with matching composition links and localized definitions. Precise IPA remains the pronunciation format; the host Library renders its symbols with readable typography.

## Require language keys without literal fallbacks

AI instructions prohibit hardcoded English user-facing strings in every path. Missing preferred-language values may use the same keys from English XML resources; absent or empty English fallback values must fail explicitly instead of rendering literal English, raw keys, or blank text. Missing-translation errors must not be suppressed.

## Keep dictionary senses representable

Free Dictionary returns separate suggestions per part of speech, with only matching definitions, tags, and curated paradigms. Queries containing apostrophes or hyphens are rejected because the current alphabet graph cannot represent those spellings.

## Bound streamed dictionary responses

Response bodies are limited to one million streamed bytes and cancelled immediately when oversized.

## Preserve the published bootstrap stage

The published `study-language-en:bootstrap-registration` flow identifier remains unchanged.

## Correct noun plural transformations

Plural derivation stays on singular `book`, not already-plural `books`; `houses` uses `/haʊzɪz/`.

## Document seven starter decks

Seven localized starter decks are documented.

## Study module layout

The content pack lives in `data/library/`: its manifest, schema, and content shards form one ingestion and deletion boundary. Starter decks remain in `data/starter-decks.json`. Runtime providers live in `api/dictionary/` and `api/strokes/`; deterministic shard loading and byte-bounded response decoding live in `api/reuse/`. Cross-layer content and lifecycle tests live in `tests/`, while provider, transport, and API tests live in `api/tests/`. The manifest declares `api/routes/config/index.js` as `disabledApi`; that entrypoint registers only the administrator-only configuration DELETE route and does not ingest content or activate providers. Published flow identifiers remain stable.

## Commits

- [c92c6123](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212babe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce057](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a72](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095fe](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385bb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e0171127](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
