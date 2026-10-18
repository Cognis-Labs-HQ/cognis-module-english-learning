# English Study updates

**Feature Branch:** feature-replace-library-with-new-capability

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

Schema version 14 adopts Cognis PR #226’s external-package boundary. The content manifest marks provider records as protected and carries validated JSON-compatible catalog metadata; schema metadata likewise publishes stable provider identity. Bootstrap now resolves the lifecycle-available `study:library` capability, requires both `inspectContentPack` and `ingestContentPack`, performs the non-mutating inspection first, and then requests atomic ingestion. All fields continue to use built-in validated types, so no custom validation escape hatch is needed.

## Explicit authoring and relationship semantics

The authoritative 14.1.0 release evolves schema compatibility version 14 in place, following the same-pack migration used by the Japanese reference implementation. Every record now carries a provider-neutral content class; definitions are hidden, sentences are composite, and particles are explicitly non-editable. True spelling and ordered-sequence relationships declare `composition`, while definition and variant links have no resolver role so reverse navigation remains unified without polluting composed titles. Field schemas now provide localized authoring controls and an English-scoped audio-file contract without enabling a module-owned editor.

## Enable-time capability availability

The module now follows the working Japanese reference by declaring and resolving the lifecycle-available `study:library` capability. The separately published `study:library:provider` surface is not guaranteed to exist during external-module dependency preflight, which caused enablement to fail with HTTP 409 before bootstrap ran. Read-only inspection and atomic ingestion remain ordered through the internal Library service, so validation behavior is unchanged while enablement no longer depends on a late public capability.

## Documentation and contracts

The manifest requires `study:library`, follows the current host-owned atomic activation contract, and publishes module version 1.2.37.

## Standardized changelog structure

Added the localized, per-pull-request changelog convention used by Cognis and automated checks for language parity, entry details, branch metadata, and commit provenance.

## Synchronized AI instructions

Added repository-local Copilot guidance and kept it aligned with the module-wide agent instructions so AI-assisted contributions follow the same rules.

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

## Dictionary audio and host caching

When a requested pronunciation is not bundled, English Study retrieves the word from the English Dictionary API and downloads a matching MP3 from its pronunciation media endpoint. A preferred IPA reading must match; a different pronunciation is never substituted. Only HTTPS media on `api.dictionaryapi.dev` is accepted, redirects are rejected, lookup and download share one deadline, and both responses have streaming byte limits. Missing recordings remain explicit errors. No Google speech service is used.

Cognis owns the recording cache, not the module. After authorization, its private Files cache reuses successful recordings across cards and restarts. Concurrent playback requests share retrieval and persistence. Keys include provider identity, revision, language, role, label and readings; a changed reading or provider revision resolves independently. Failed requests or writes remain retryable. The module contacts the dictionary only on a cache miss when playback is requested.

## Paced composition and replacement

Seed recordings use the offline Kokoro multilingual neural model with the English `bf_emma` and Japanese `jf_alpha` voices. Clips are encoded at 128 kbps with a 200 ms lead-in, a 180 ms tail, bounded peak normalization and slower speech. Model attribution and Apache licensing are recorded in `data/audio/VOICE-LICENSE.txt`; the recording inventory records the voice and processing settings.

An audio field is optional on sentence cards. On first playback Cognis authorizes every constituent, selects only the first pronunciation group, applies selected transformations, and creates one continuous WAV with a quiet lead-in and deliberate word, comma and sentence pauses. The generated recording is cached privately; constituent bytes, reading changes, transformations and pacing affect its identity. It is generated on demand for new cards as well as existing cards. Uploading an audio file in the normal composer replaces generated playback immediately. Removing that explicit file restores automatic composition. Providers supply lexical clips; Cognis owns composition and cache policy.

## Reference inventory coverage

The Japanese reference catalog includes all 13,108 characters in the packaged official KANJIDIC2 snapshot. The English catalog includes all 135,969 Open English WordNet lexical entries (127,311 normalized keys). These are separate lazy dictionary providers, not 149,077 eagerly imported seed cards. Choose Reference Dictionary in Study search to import supported entries through the normal graph validation. Source records without meanings or usable readings remain unknown; no pronunciation, translation or stroke diagram is fabricated. This inventory is not all Unicode Han and is not a claim to enumerate every possible English word.

Japanese Kanji readings are ranked from common JMdict attestations and available frequency markers, including okurigana forms; grouped links and seed audio follow that exact order. Kanji playback always uses the first authored pronunciation. Existing English word cards have one authored IPA reading; reference entries preserve authoritative order within the preferred British variety before other varieties. Pronunciation frequency depends on context, and the sources do not provide a universal frequency rank for every reading.

## Whole-reading reference audio

Japanese additionally ships 2,913 whole-reading neural clips in bounded banks under `data/audio/reference/`. Together with seed recordings they cover the primary readings of all 12,356 source characters that have a reading; the remaining 752 source characters have no recorded reading and do not receive invented audio. The bank index selects the first authored reading and checks file bounds and cancellation. Generate a plan with `python3 scripts/reference-audio.py plan --work <directory>`, render its inventories with the synthesis script, then use `pack` to write the bounded banks.

The Japanese ranking tool accepts `--dictionary <JMdict.gz> --kanji-dictionary <KANJIDIC2.xml.gz> --output <priorities.json>` and optional `--content-root data/library/content`. It prefers common standalone lexical readings, ranks other readings from frequency-weighted alignments of attested words, and preserves reviewed isolated-card choices from `data/audio/primary-readings.json`. Voicing and gemination map back to canonical source readings. Kun, on and name readings remain available; a selected first reading alone determines playback and lookup cache identity. Source frequency markers are an ordering aid, not a universal pronunciation-frequency measurement.

## Optional speech integration

ElevenLabs is declared as an optional module dependency. Installation can offer it for speech synthesis, but Study enablement and manual or composite audio remain available without it.

## Publish speech without privilege

Publish `elevenlabs-tts:synthesis` within the module-owned namespace and remove the privileged flag. English and Japanese Study resolve this capability through ctx using their existing optional module dependency. The Study bridge receives the live capability getter from its caller, preserving provider disable/re-enable and configured voice handling.

## Keep speech optional

The published capability reports live `configured` readiness. Study enables automatic speech only after both the API key and default voice are saved. If ElevenLabs is absent, disabled, or unconfigured, language registration still succeeds and uploaded audio and composite fallback remain available; no synthesis is requested.

## Fix installation without bundled media

Remove the unused asset-directory declaration from the data-only content pack and advance its version. Validate declared pack paths against a temporary installation built solely from packaged files, preventing activation from depending on empty checkout directories.

## Ship consistent voice recordings

Package designated-language recordings for every spoken curated card and reachable plural or verb/adverb variant. Sentence WAV files reuse exact ordered constituent PCM, including selected transformations. Voice/model/request provenance, digests and silence checks are recorded; no credentials are bundled.

## Saved Study Controls

The bundled reference catalog is named Open English WordNet. Dedicated recordings cover all 32 curated noun plural forms. Selected-form playback resolves each variant by its label and preferred reading; missing forms never substitute a base recording.

## Reference Images

Add optional image-list fields, private image uploads and detail galleries. Both language modules bundle a licensed reference photograph and expose the same field on every layer.

## Direct Sentence Audio

Shipped sentences use directly generated whole-sentence recordings before composite audio. New or unrecorded sentences use host composition with the exact ordered constituent PCM and selected transformations; missing variants never substitute their base form. Recordings cover the curated pack, not every lazy dictionary entry or possible user-authored sentence. Includes 45 newly generated sentence recordings using voice `gJx1vCzNCD1EQHT212Ls`. Japanese regenerates 124 kana clips and sends kana/kanji rather than romaji. Requests retain documented stable model, speed, similarity, seed and voice provenance.

## Vocabulary Reference Photos

63 curated vocabulary cards now have bundled reference photographs (55 image files). Coverage includes every concrete noun plus visually clear actions and qualities; grammar, pronouns and other abstract concepts do not receive misleading filler images. Japanese homophones such as 花/鼻, 橋/箸, 雨/飴 and 紙/髪/神 use distinct references. Images load locally through the existing card detail gallery and full-image preview. Source titles, creators, individual Creative Commons/public-domain licenses and file checksums are recorded in [the image catalog](../../data/library/assets/images/catalog.json) and [photo credits](../../data/library/assets/images/LICENSE.md). Existing custom card images remain protected by the host during provider reloads.

## Vocabulary Illustrations

Every shipped vocabulary card now has its own generated colored-pencil and watercolor illustration (160 cards). Concrete objects, actions and contextual scenes for abstract concepts use the existing card-detail gallery and full-image popup. The old source photographs have been replaced. [The image catalog](../../data/library/assets/images/catalog.json) records generation source, style, crop provenance, checksums and card assignments; [image licensing](../../data/library/assets/images/LICENSE.md) describes the bundled artwork. Images load locally, and the host preserves custom user images during provider reloads.

## Household Vocabulary

Fifteen everyday nouns cover furniture, clothing, objects and food, with four-language meanings, pronunciation links, dedicated recordings and a Household Essentials deck. English countable nouns include recorded plural transformations, including unchanged plural fish; rice remains a mass noun. Japanese beginner spellings link complete readings to atomic kana, including the long-vowel mark ー used in テーブル and コート.

## Food and Body Vocabulary

Add 32 illustrated nouns: sixteen food items and sixteen body terms, with four-language meanings and separate Food and Body starter decks. English includes 25 recorded number transformations, including feet, teeth, potatoes and voiced mouths, while mass-noun senses such as chicken meat, beef, butter and skin have no plural family. Japanese keeps complete atomic-Kana paths, distinguishes both meanings of あし with separate foot and leg definitions, and reuses existing native recordings when pronunciation inputs are identical. Four individually authored example sentences per language have direct neural recordings that take priority over exact-constituent precomposed sentence recordings. All illustrations are bundled locally in the established language-specific art style.

## Review fixes and recording inventories

Recording metadata now uses a compact manifest and checksummed inventories grouped by characters, vocabulary, transformations, sentences and sentence compositions. Audio bytes, voice/request provenance and lookup priority are preserved. Reference imports read packaged language metadata; provider cleanup attempts every registration even after a disposer fails. Dictionary failures release response bodies and reference content loads can retry. Documentation reflects the current configuration and generated artwork.

## Explicit catalog normalization and sentence composition inventories

The catalog reader accepts its normalization policy from the language provider: NFC for English, NFKC for Japanese. Shared lookup code no longer branches on a specific language. Sentence composition inventories are named `sentence-compositions`; each entry describes a real packaged recording assembled from its ordered constituent clips. Direct neural sentence recordings remain separate and take playback priority.

## Localized illustration labels and neutral asset names

Illustration filenames and IDs use their SHA-256 digest, and source-sheet identifiers use source digests. Catalog metadata supplies labels in German, English, Indonesian and Japanese from each card’s existing authored meanings. Display labels are separate from neutral storage identifiers. Artwork bytes and card identities are unchanged; content revisions update every bundled image reference.

## Usage

Move ElevenLabs synthesis into its own configurable module. Study uses optional per-language voices for saved global cards, while private and classroom cards accept bounded uploads and microphone recordings. Preserve continuous sentence composition as a fallback using existing constituent recordings. Administrators can regenerate global audio while editing.

## Fix Study enablement

Advance the actual English and Japanese content-pack versions when removing bundled recordings. Complete unrelated module reconciliation before reporting a failed activation so consent routes retain their registered flows.

## Regenerate every recording

All 331 packaged recordings now use the configured ElevenLabs voice for this language. Authored readings, card identities, quiet lead-ins and paced sentence composition are preserved. The generation tool uses environment credentials, resumable API-response caching and atomic output replacement; packages contain no credentials. Inventories, attribution, content revisions and integrity hashes reflect the new recordings.

## Final Review and Disabled-Language Access

Uninstall clears stored voice configuration independently of content retention. Disable removes module routes, static UI and provider registrations; configuration persists across disable/restart and is served only while enabled. Cognis gates retained schemas, cards and media by the live language provider, restoring access on re-enable. Reference results merge equivalent source identities while preserving source records, ordered readings and meanings. Packaged sentences use exact constituent-composed PCM before separately retained direct recordings. Speech requests validate normalized, bounded language text; KanjiVG cancels rejected response bodies and accepts prolonged sound marks.

## Commits

- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [60701c5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/60701c547812a699d6e1514cbaa8fa90b9630ea4)
- [8048575](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/80485757bae9c748a47691b2369673c467ebde6d)
- [c92c612](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212bab](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce05](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e017112](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
- [0284e55](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c9](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
- [67870fc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/67870fcd764378f0ee8d27a29dcc51a493bd877f)
- [1c31c7c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1c31c7cb63c6d377a1059e1206b928cc4716068c)
- [3dfd7f1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3dfd7f1e52402dbc876c5011c75c066cb0f1c1d9)
- [1ae45ef](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1ae45efa393bd95002a2622e9d871a66fa1eab12)
- [f79d59e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f79d59e97f4bcad73be1ba89090b0e1370d2e7e5)
- [f446d6c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f446d6c46cda70e1075185883126c2f65cb5af40)
- [b21877e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b21877e5e193c54e89de4e0458fd3d2055f41cf5)
- [5579d8c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5579d8ced788d25f09c459de54cfd4d7f58c56de)
- [b9c5743](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b9c57434a537e646516cbf3657a0d5b645773d86)
- [2c2e676](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/2c2e6762e43ea9351ba0a22879a9cc3b32087bbb)
- [c27ce4e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c27ce4eb7e3b7197044d37656a8906a394df0935)
- [af0ee61](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/af0ee61ea40640ece10fc7c9754769000bf6df5a)
- [87be13f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/87be13f6b19b64c15d6866e62c10cfcd39040124)
- [4b95cc1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4b95cc17b5bd2dbba73f38f1d90298a5bb682a2b)
