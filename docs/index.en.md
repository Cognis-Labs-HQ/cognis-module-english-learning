# English Study

English Study supplies a versioned learning graph, English dictionary enrichment, original print-letter writing guides and starter decks. Cognis owns the learning UI and all user data.

## Packaged content

The pack provides writing guides, themed vocabulary, linked examples, illustrations and starter decks. The packaged content and media inventories are the source of truth for availability.

## Usage Examples

- Explore `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` and `/study/en/sentences`.
- Search with Free Dictionary in the Study navigation; selected vocabulary results populate the host composer.
- Browse the English Alphabet, First English Words, Everyday English Verbs and First English Sentences decks under `/study/flashcards`. Cognis manages deck study, favourites and sharing.

## Technical Specification

### Provider contract and lifecycle

The permanent module UUID is `b1adc29f-9d54-5785-9bea-2ce76f1981e4`; the required Study gateway UUID is `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap requires `ctx.capabilities.require("study:library:provider")` with working `ingestContentPack`, `registerLookupProvider` and `deleteContentPack` methods. It registers the writing and dictionary providers, ingests `data/library/`, then publishes `study:language:en` and a removable `bootstrap-platform` flow contribution. The descriptor has `code`, `languageCode`, module version, package and `starterDecks`.

Administrator-only GET, PUT and DELETE configuration routes are registered only during enabled bootstrap. The module has no disabled-runtime entrypoint. Voice settings persist through disable/restart and are cleared on uninstall, independently of whether learning content is retained.

### Content graph

The content pack supplies lowercase and uppercase alphabet cards, spelling combinations, vocabulary, sentence structures and localized definitions. Definition records use the host’s `studyenglish:definitions` prefix; marketplace strings use `module.study.language.en.*`. Module and content metadata are declared in their manifests.

Ordered spelling and sentence references resolve to actual records. Hidden inflection cards provide literal targets for seeded sentence validation; interactive forms use declarative verb, copula and adjective paradigms, including irregular forms and their IPA. IPA readings remain speech notation rather than being linked to unrelated alphabet glyphs. Capitalized sentence starters preserve actual sentence text. Grammar particles include negation, prepositions, conjunctions and punctuation, and are non-editable. Definition relationships have a maximum of ten.

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

English supplies localized starter decks covering alphabet, uppercase letters, spelling combinations, vocabulary, verbs, adjectives, sentences, everyday objects, food and body vocabulary. Stable keys and complete alphabet ordering are validated against `data/starter-decks.json`.

The schema offers one adjective filter option and retains stable content identities. ctx is the application backbone; Cognis owns action flows, user data and dictionary caching.

## Shared Language Pages

Language selection opens Cognis-owned Explore pages even when content providers declare no child pages. Switching languages preserves the equivalent writing, vocabulary or sentence role; Flashcards, Library and Requests keep their shared page context. English declares alphabet, letter combinations, vocabulary and sentences using its opinionated slugs. Aborted favourites loads release their mount without misleading failure toasts.

## Alphabet, grammar and noun-number families

The alphabet separates letter names from optional `letter_sounds` IPA details and has no filler cells. Punctuation has its own sentence-composer carousel. Clause and discourse structures include localized meanings and speech pronunciations. Reviewed countable noun families opt into Cognis plural transformations with `flag: "transform:plural"`, including spelling and pronunciation changes. Mass nouns remain outside those families; forms derive from base cards rather than duplicate records.

### Contributor layout and host ownership

Start new modules from [cognis-module-template](https://github.com/Cognis-Labs-HQ/cognis-module-template); this repository follows its pinned contributor guidance in `AGENTS.md`. `bootstrap.js` owns lifecycle orchestration, `api/index.js` wires ctx-derived dependencies, `api/routes/<domain>/index.js` owns HTTP handlers, and reusable server code belongs in `api/reuse/`. Browser features stay under `ui/`, styles under `ui/styles/`, reusable markup under `ui/templates/`, and localized documentation under `docs/index.<locale>.md`. Historical release entries live in `docs/changelog/` and are excluded from package hashes. Optional concerns are omitted when unsupported.

Consume public ctx capabilities and declared flows; do not import Cognis internals or sibling modules. Dashboard capability/navbar providers export `mountProvider(scopedUiCtx)` and return cleanup for owned resources. Imports must not register module behavior. The host disposes scoped capabilities, flow hooks, listeners and provider state when disabled, then mounts cached providers again when re-enabled. Settings/admin factories and authentication-footer descriptor providers follow their own documented host contracts. Test these contracts with standalone fakes, run the executable layout guard, regenerate hashes after the final packaged edit, and run lint, tests and manifest validation before publishing.

Package validation checks that entrypoints, icons, banners and screenshots are regular files inside the checkout, including resolved paths. Documentation describes public contracts and refers to manifests for release metadata; changelogs retain release provenance.

Sentence cards require at least two word references through the Library schema. The starter greeting is “Hello, my friend!” with matching composition links and localized definitions. Precise IPA remains the pronunciation format; the host Library renders its symbols with readable typography.

## Study module layout

Administrator-only GET, PUT and DELETE configuration routes are registered only during enabled bootstrap. The module has no disabled-runtime entrypoint. Voice settings persist through disable/restart and are cleared on uninstall, independently of whether learning content is retained.

## Keep dictionary senses and plural forms correct

Free Dictionary returns separate suggestions per part of speech, with only matching definitions, tags, and curated paradigms. Queries containing apostrophes or hyphens are rejected because the current alphabet graph cannot represent those spellings. Response bodies are limited to one million streamed bytes and cancelled immediately when oversized. The published `study-language-en:bootstrap-registration` flow identifier remains unchanged. Plural derivation stays on singular `book`, not already-plural `books`; `houses` uses `/haʊzɪz/`. Localized starter decks are documented.

## Speech and recordings

Bundled WAV files receive checksum, format and PCM integrity checks; listening review is recorded separately and may be unverified. `data/audio/recordings.json` lists available recordings and compositions. `data/audio/unavailable.json` explicitly lists cards without bundled audio; missing recordings are not playback URLs. The designated voice is `gJx1vCzNCD1EQHT212Ls`. Credentials and offline generation tools are not packaged.

Sentences reuse the exact PCM samples of their ordered word and particle recordings, including selected transformations. The bundled sentence files therefore preserve the same voice and pronunciation as individual playback. New sentences use host composition; a missing variant must never substitute its base-form pronunciation. Recordings cover the curated pack, not every lazy dictionary entry or possible user-authored sentence.

Bootstrap registers a removable `study:audio:provider.registerProvider` implementation. Bundled cards and their variants work without ElevenLabs installed or configured. Missing lexical recordings may use the optional configured `elevenlabs-tts:synthesis` capability; the default request voice is the designated language voice, with an administrator voice override available for new synthesis. New sentences never request separate whole-sentence synthesis. Cognis owns global-card authorization, caching, manual uploads and private/classroom composition policy. Only the primary authored pronunciation is selected.

Generated files use 24 kHz mono 16-bit PCM with bounded peaks and verified non-silent output. Requests use fixed per-language models, speed 0.9, similarity 0.85 and style 0; stability is 0.75 for English and 0.9 for Japanese. Seeds are retained per request; rejected silent outputs are recorded and retried without changing voices. English uses IPA phoneme tags where authored. The content manifest declares its packaged asset directory and advances the content-pack version for installation.

Every layer exposes the optional reference-image field in the host editor and detail view. Vocabulary uses original AI-generated colored-pencil and watercolor artwork made with OpenAI image generation; no third-party photographs are included. `data/library/assets/images/catalog.json` records generation and crop provenance, card assignments and checksums; `data/library/assets/images/LICENSE.md` documents the artwork license. Administrators can upload additional reference images through Cognis.

## Recording Inventories

`data/audio/recordings.json` uses inventory format 2 with language, voice, model, processing settings, totals and hashed purpose-index paths. Files under `data/audio/indexes/` list the hashed shards under `data/audio/inventories/`, grouped into characters, vocabulary, transformations, direct sentences and sentence compositions. Root and purpose indexes stay below 400 lines; recording shards stay at or below 800 lines. The loader verifies both levels, counts, allowed paths, purpose/kind agreement and duplicate paths before registering playback. Recording objects, audio bytes and lookup precedence are preserved.

## Explicit catalog normalization and sentence composition inventories

The catalog reader accepts its normalization policy from the language provider: NFC for English, NFKC for Japanese. Shared lookup code no longer branches on a specific language. Sentence composition inventories are named `sentence-compositions`; each entry describes a real packaged recording assembled from its ordered constituent clips. Constituent-composed recordings take playback priority; direct neural recordings remain inventoried separately.

## Localized illustration labels and neutral asset names

Illustration filenames and IDs use their SHA-256 digest, and source-sheet identifiers use source digests. Catalog metadata supplies labels in German, English, Indonesian and Japanese from each card’s existing authored meanings. Display labels are separate from neutral storage identifiers. Artwork bytes and card identities are unchanged; content revisions update every bundled image reference.

## Final Review and Disabled-Language Access

Uninstall clears stored voice configuration independently of content retention. Disable removes module routes, static UI and provider registrations; configuration persists across disable/restart and is served only while enabled. Cognis gates retained schemas, cards and media by the live language provider, restoring access on re-enable. Reference results merge equivalent source identities while preserving source records, ordered readings and meanings. Packaged sentences use exact constituent-composed PCM before separately retained direct recordings. Speech requests validate normalized, bounded language text; KanjiVG cancels rejected response bodies and accepts prolonged sound marks.

## Generated Transformations

Each transformation set declares a required `flag`, such as `transform:verb` or `transform:plural`, alongside its grammatical `matchTags`. Only flagged base cards activate that family. Unknown or unproductive flags fail validation. Forms are read-only views identified by the canonical base UUID and `{setId, path}`; they cannot be authored, imported or shipped as independent cards. Genuine lexical homographs with a different grammatical class remain valid.

Detail views, sentence validation and audio use the same resolver. Generated views preserve reference images but clear base audio and stroke fields. Audio lookup uses the generated spelling and primary pronunciation; refreshing it does not modify the base card. Drawing composes the generated spelling from writing-unit patterns, preserving stroke groups and ignoring spaces. Provider recording tests require every enabled rule to have a path-bound clip. No materialized-card representation or compatibility aliases are supported.

The public provider contract declares `transformationModel: "generated"`; both language modules require it before registering providers. Every rule in an enabled family must resolve for that source. Rules may declare `resultClass` when a form changes grammatical class, such as an adjective becoming an adverb. Explicit invalid references fail rather than substituting the root.

## Offline Study

Study keeps bounded lightweight JSON snapshots in the current tab: schemas, permitted character/card data, locations, viewed IDs, favourites and previously opened decks. Language schemas opt in with `metadata.offline: { cache: "lightweight" }`. The Library cache holds at most 16 MB and 100 reads; other read caches hold at most 4 MB and 100 reads. No audio bytes, dictionary responses, credentials or authenticated documents are persisted.

Explore previews resolve relationships from already-authorized cached rows. Drawing works locally with fresh guidance; flashcard practice advances locally. Audio and dictionary/ElevenLabs requests stop, and offline practice does not save progress, XP, rewards, favourites or edits. Only previously loaded content that fits the cache is available; missing dependencies remain absent.

Private Study requires the same previously verified, unexpired account session in the same tab. Reloads and first visits retain the public-only offline contract. Account/session changes, preference changes, module lifecycle changes and provider disposal invalidate private snapshots. Server revocations cannot be learned while disconnected. Recovery uses the existing unsaved-change guard and reloads to refresh server authorization.
