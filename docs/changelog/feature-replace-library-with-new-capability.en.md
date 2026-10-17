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
- [0284e55f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c98](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
- [67870fc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/67870fcd764378f0ee8d27a29dcc51a493bd877f)
- [1c31c7c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1c31c7cb63c6d377a1059e1206b928cc4716068c)
- [3dfd7f1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3dfd7f1e52402dbc876c5011c75c066cb0f1c1d9)
