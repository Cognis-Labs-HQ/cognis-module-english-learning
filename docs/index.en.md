# English Study

English Study supplies a versioned learning graph, English dictionary enrichment, original print-letter writing guides and ten starter decks. Cognis owns the learning UI and all user data.

## Usage Examples

- Explore `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` and `/study/en/sentences`.
- Search with Free Dictionary in the Study navigation; selected vocabulary results populate the host composer.
- Browse the English Alphabet, First English Words, Everyday English Verbs and First English Sentences decks under `/study/flashcards`. Cognis manages deck study, favourites and sharing.

## Technical Specification

### Provider contract and lifecycle

The permanent module UUID is `b1adc29f-9d54-5785-9bea-2ce76f1981e4`; the required Study gateway UUID is `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap requires `ctx.capabilities.require("study:library:provider")` with working `ingestContentPack`, `registerLookupProvider` and `deleteContentPack` methods. It registers the writing and dictionary providers, ingests `data/`, then publishes `study:language:en` and a removable `bootstrap-platform` flow contribution. The descriptor has `code`, `languageCode`, module version, package and `starterDecks`.

Administrator-only `GET`, `PUT` and `DELETE /api/v1/modules/study-language-en/config` remain available while disabled. GET reads the persisted `voiceId`; PUT validates and saves it in `module_study_language_en_config`, surviving restarts and disable/enable cycles. DELETE clears only that configuration. All three return HTTP 200 with a JSON data envelope; clearing configuration does not delete learning content. Provider registrations are removed on disable or failed activation. Uninstall preserves content unless `deleteContent: true` requests the host provider’s transactional `deleteContentPack` operation. Failures propagate with safe structured logs.

### Content graph

The content pack supplies lowercase and uppercase alphabet cards, spelling combinations, vocabulary, sentence structures and localized definitions. Definition records use the host’s `studyenglish:definitions` prefix; marketplace strings use `module.study.language.en.*`. Module and content metadata are declared in their manifests.

Ordered spelling and sentence references resolve to actual records. Hidden inflection cards provide literal targets for seeded sentence validation; interactive forms use 37 declarative verb, copula and adjective paradigms, including irregular forms and their IPA. IPA readings remain speech notation rather than being linked to unrelated alphabet glyphs. Capitalized sentence starters preserve actual sentence text. Grammar particles include negation, prepositions, conjunctions and punctuation, and are non-editable. Definition relationships have a maximum of ten.

The form contracts declare alphabet/composite writing fields, vocabulary spelling carousels, sentence word/particle carousels and a sentence-structure carousel. The host controls form validation, UUID resolution, literal spacing, imports, limits and user notifications. The alphabet retains its seven-column chart and uppercase child variants. Only atomic letters request minimal previews.

### Writing guides and media

Every alphabet and letter-combination record has an original normalized JSON print-letter guide with ordered strokes, timestamps and per-character groups. The stroke provider returns cloned packaged patterns and performs no remote request. These are introductory print guides, not a mandatory handwriting style.

### Dictionary boundary

Free Dictionary queries `https://api.dictionaryapi.dev/api/v2/entries/en/<word>` for English vocabulary only. It is searchable, versioned and field-focused; it does not translate sentences or supply writing guidance. Input is restricted to bounded English words, the endpoint is fixed, redirects are rejected, requests have a 15-second timeout and responses are validated and bounded. Duplicate readings/glosses are removed while source order is retained, and at most ten definitions/readings are returned. Source/license attribution is retained in hidden `dictionary_data`; externally supplied meanings stay English until the host's localization facility supplies other languages. See the dictionary documentation for details.

Native records retain their curated primary IPA and paradigm tags. New alphabet-only spellings link to packaged letters; unknown verbs receive no guessed irregular paradigm. A 404 uses a genuine native match when available, while failed/malformed requests produce a safe error. Cognis core owns persisted query caching, one-hour probes and twelve-hour changed-result publication. The module only retains immutable content indexes, not dictionary-response caches or timers.

### Packaging and validation

Privilege is needed for the host-owned language namespace; it does not bypass Study permissions. Runtime imports are repository-relative and tests use local public-contract fakes. All four locale bundles and documentation variants ship together. Original content and guides use the pack's AGPL-3.0-or-later license; dictionary results retain their external attribution separately.

Run `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` and `git diff --check`. After final shipped-file edits, regenerate manifest hashes. Changelogs are release metadata outside the packaged inventory.

## Expanded Starter Decks

English supplies ten localized starter decks covering alphabet, uppercase letters, spelling combinations, vocabulary, verbs, adjectives, sentences, everyday objects, food and body vocabulary. Stable keys and complete alphabet ordering are validated against `data/starter-decks.json`.

The schema offers one adjective filter option and retains stable content identities. ctx is the application backbone; Cognis owns action flows, user data and dictionary caching.

## Shared Language Pages

Language selection opens Cognis-owned Explore pages even when content providers declare no child pages. Switching languages preserves the equivalent writing, vocabulary or sentence role; Flashcards, Library and Requests keep their shared page context. English declares alphabet, letter combinations, vocabulary and sentences using its opinionated slugs. Aborted favourites loads release their mount without misleading failure toasts.

## Alphabet, grammar and noun-number families

The alphabet separates letter names from optional `letter_sounds` IPA details and has no filler cells. Punctuation has its own sentence-composer carousel. Clause and discourse structures include localized meanings and speech pronunciations. Reviewed countable noun families opt into Cognis plural transformations with `optInTag: plural`, including spelling and pronunciation changes. Mass nouns remain outside those families; forms derive from base cards rather than duplicate records.

### Contributor layout and host ownership

Start new modules from [cognis-module-template](https://github.com/Cognis-Labs-HQ/cognis-module-template); this repository follows its pinned contributor guidance in `AGENTS.md`. `bootstrap.js` owns lifecycle orchestration, `api/index.js` wires ctx-derived dependencies, `api/routes/<domain>/index.js` owns HTTP handlers, and reusable server code belongs in `api/reuse/`. Browser features stay under `ui/`, styles under `ui/styles/`, reusable markup under `ui/templates/`, and localized documentation under `docs/index.<locale>.md`. Historical release entries live in `docs/changelog/` and are excluded from package hashes. Optional concerns are omitted when unsupported.

Consume public ctx capabilities and declared flows; do not import Cognis internals or sibling modules. Dashboard capability/navbar providers export `mountProvider(scopedUiCtx)` and return cleanup for owned resources. Imports must not register module behavior. The host disposes scoped capabilities, flow hooks, listeners and provider state when disabled, then mounts cached providers again when re-enabled. Settings/admin factories and authentication-footer descriptor providers follow their own documented host contracts. Test these contracts with standalone fakes, run the executable layout guard, regenerate hashes after the final packaged edit, and run lint, tests and manifest validation before publishing.

Package validation checks that entrypoints, icons, banners and screenshots are regular files inside the checkout, including resolved paths. Documentation describes public contracts and refers to manifests for release metadata; changelogs retain release provenance.

Sentence cards require at least two word references through the Library schema. The starter greeting is “Hello, my friend!” with matching composition links and localized definitions. Precise IPA remains the pronunciation format; the host Library renders its symbols with readable typography.

## Study module layout

The content pack lives in `data/library/`, with starter decks in `data/starter-decks.json`. Providers live in `api/dictionary/` and `api/strokes/`; deterministic loading and byte-bounded response decoding live in `api/reuse/`. Cross-layer tests live in `tests/` and API tests in `api/tests/`. The manifest declares `api/routes/config/index.js` as `disabledApi`, registering administrator-only GET, PUT and DELETE configuration routes while disabled, without ingesting content or activating providers. Published flow identifiers remain stable.

## Keep dictionary senses and plural forms correct

Free Dictionary returns separate suggestions per part of speech, with only matching definitions, tags, and curated paradigms. Queries containing apostrophes or hyphens are rejected because the current alphabet graph cannot represent those spellings. Response bodies are limited to one million streamed bytes and cancelled immediately when oversized. The published `study-language-en:bootstrap-registration` flow identifier remains unchanged. Plural derivation stays on singular `book`, not already-plural `books`; `houses` uses `/haʊzɪz/`. Ten localized starter decks are documented.

## Speech and recordings

The pack includes verified WAV recordings for every spoken curated card, character, particle and reachable schema transformation, including plurals and chained verb forms. `gJx1vCzNCD1EQHT212Ls` is the designated voice for this language. `data/audio/recordings.json` records each request, voice, model, settings, transformation path and file checksum; credentials and generation tools are not packaged.

Sentences reuse the exact PCM samples of their ordered word and particle recordings, including selected transformations. The bundled sentence files therefore preserve the same voice and pronunciation as individual playback. New sentences use host composition; a missing variant must never substitute its base-form pronunciation. Recordings cover the curated pack, not every lazy dictionary entry or possible user-authored sentence.

Bootstrap registers a removable `study:audio:provider.registerProvider` implementation. Bundled cards and their variants work without ElevenLabs installed or configured. Missing lexical recordings may use the optional configured `elevenlabs-tts:synthesis` capability; the default request voice is the designated language voice, with an administrator voice override available for new synthesis. New sentences never request separate whole-sentence synthesis. Cognis owns global-card authorization, caching, manual uploads and private/classroom composition policy. Only the primary authored pronunciation is selected.

Generated files use 24 kHz mono 16-bit PCM with bounded peaks and verified non-silent output. Requests use fixed per-language models, speed 0.9, similarity 0.85 and style 0; stability is 0.75 for English and 0.9 for Japanese. Seeds are retained per request; rejected silent outputs are recorded and retried without changing voices. English uses IPA phoneme tags where authored. The content manifest declares its packaged asset directory and advances the content-pack version for installation.

Every layer exposes the optional reference-image field in the host editor and detail view. Vocabulary uses original AI-generated colored-pencil and watercolor artwork made with OpenAI image generation; no third-party photographs are included. `data/library/assets/images/catalog.json` records generation and crop provenance, card assignments and checksums; `data/library/assets/images/LICENSE.md` documents the artwork license. Administrators can upload additional reference images through Cognis.

## Recording Inventories

`data/audio/recordings.json` is a compact manifest with language, voice, model, shared processing settings, totals and integrity-checked inventory paths. Purpose-grouped files under `data/audio/inventories/` separately describe characters, vocabulary, transformations, direct sentences and precomposed sentence recordings. Each file stays below 800 lines and retains exact requests, per-clip voice provenance, transformation paths and audio checksums. Bootstrap verifies every inventory checksum and count before registering playback; the recording bytes and lookup precedence are unchanged.

## Explicit catalog normalization and sentence composition inventories

The catalog reader accepts its normalization policy from the language provider: NFC for English, NFKC for Japanese. Shared lookup code no longer branches on a specific language. Sentence composition inventories are named `sentence-compositions`; each entry describes a real packaged recording assembled from its ordered constituent clips. Direct neural sentence recordings remain separate and take playback priority.

## Localized illustration labels and neutral asset names

Illustration filenames and IDs use their SHA-256 digest, and source-sheet identifiers use source digests. Catalog metadata supplies labels in German, English, Indonesian and Japanese from each card’s existing authored meanings. Display labels are separate from neutral storage identifiers. Artwork bytes and card identities are unchanged; content revisions update every bundled image reference.
