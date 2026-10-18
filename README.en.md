# English Study

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

English learning content and provider integration for Cognis Study.

## Features

- 52 alphabet cards and 17 letter combinations with original JSON writing guides; 192 vocabulary cards, 21 grammar/punctuation cards and 49 linked sentences.
- 37 curated verb, copula and adjective paradigms with irregular forms and IPA; hidden supporting forms preserve complete sentence graphs.
- Searchable Free Dictionary lookup, bounded definitions/readings, hidden attribution and host-owned caching.
- Ten localized starter decks use Cognis flashcards, favourites and sharing.

## Installation

Install and enable this repository through the Cognis module marketplace. The Study gateway and `study:library:provider` capability are required.

## Architecture

Bootstrap registers providers through ctx, ingests the protected pack, publishes the English descriptor and contributes a removable flow hook. Disabling removes providers; uninstall may retain or cascade-delete the pack through Cognis. No host UI, cache policy or private component implementation is duplicated.

[`docs/index.en.md`](docs/index.en.md) · [`docs/dictionary.en.md`](docs/dictionary.en.md)

## Contributor Checks

```sh
npm install
npm run manifest:hashes
npm test
npm run lint
npm run check:manifest
git diff --check
```

## Speech and recordings

The pack includes verified WAV recordings for every spoken curated card, character, particle and reachable schema transformation, including plurals and chained verb forms. `gJx1vCzNCD1EQHT212Ls` is the designated voice for this language. `data/audio/recordings.json` records each request, voice, model, settings, transformation path and file checksum; credentials and generation tools are not packaged.

Shipped sentences use directly generated whole-sentence recordings before composite audio. New or unrecorded sentences use host composition with the exact ordered constituent PCM and selected transformations; missing variants never substitute their base form. Recordings cover the curated pack, not every lazy dictionary entry or possible user-authored sentence.

Bootstrap registers a removable `study:audio:provider.registerProvider` implementation. Bundled cards and their variants work without ElevenLabs installed or configured. Missing lexical recordings may use the optional configured `elevenlabs-tts:synthesis` capability; the default request voice is the designated language voice, with an administrator voice override available for new synthesis. New sentences never request separate whole-sentence synthesis. Cognis owns global-card authorization, caching, manual uploads and private/classroom composition policy. Only the primary authored pronunciation is selected.

Generated files use 24 kHz mono 16-bit PCM with bounded peaks and verified non-silent output. Requests use fixed per-language models, speed 0.9, similarity 0.85 and style 0; stability is 0.75 for English and 0.9 for Japanese. Seeds are retained per request; rejected silent outputs are recorded and retried without changing voices. English uses IPA phoneme tags where authored. The content manifest declares its packaged asset directory and advances the content-pack version for installation.

## Vocabulary Illustrations

Every shipped vocabulary card now has its own generated colored-pencil and watercolor illustration (192 cards). Concrete objects, actions and contextual scenes for abstract concepts use the existing card-detail gallery and full-image popup. The old source photographs have been replaced. [The image catalog](data/library/assets/images/catalog.json) records generation source, style, crop provenance, checksums and card assignments; [image licensing](data/library/assets/images/LICENSE.md) describes the bundled artwork. Images load locally, and the host preserves custom user images during provider reloads.

## Household Vocabulary

Fifteen everyday nouns cover furniture, clothing, objects and food, with four-language meanings, pronunciation links, dedicated recordings and a Household Essentials deck. English countable nouns include recorded plural transformations, including unchanged plural fish; rice remains a mass noun. Japanese beginner spellings link complete readings to atomic kana, including the long-vowel mark ー used in テーブル and コート.

## Food and Body Vocabulary

Packaged sentence playback uses exact constituent-composed PCM, including selected transformations. Independently generated whole-sentence recordings remain inventoried with their original voice and request provenance, but do not override the composed recording. New sentences continue through host-owned composition and caching.

## Recording Inventories

`data/audio/recordings.json` is a compact manifest with language, voice, model, shared processing settings, totals and integrity-checked inventory paths. Purpose-grouped files under `data/audio/inventories/` separately describe characters, vocabulary, transformations, direct sentences and precomposed sentence recordings. Each file stays below 800 lines and retains exact requests, per-clip voice provenance, transformation paths and audio checksums. Bootstrap verifies every inventory checksum and count before registering playback; the recording bytes and lookup precedence are unchanged.

## Explicit catalog normalization and sentence composition inventories

The catalog reader accepts its normalization policy from the language provider: NFC for English, NFKC for Japanese. Shared lookup code no longer branches on a specific language. Sentence composition inventories are named `sentence-compositions`; each entry describes a real packaged recording assembled from its ordered constituent clips. Constituent-composed recordings take playback priority; direct neural recordings remain inventoried separately.

## Localized illustration labels and neutral asset names

Illustration filenames and IDs use their SHA-256 digest, and source-sheet identifiers use source digests. Catalog metadata supplies labels in German, English, Indonesian and Japanese from each card’s existing authored meanings. Display labels are separate from neutral storage identifiers. Artwork bytes and card identities are unchanged; content revisions update every bundled image reference.

## Final Review and Disabled-Language Access

Uninstall clears stored voice configuration independently of content retention. Disable removes module routes, static UI and provider registrations; configuration persists across disable/restart and is served only while enabled. Cognis gates retained schemas, cards and media by the live language provider, restoring access on re-enable. Reference results merge equivalent source identities while preserving source records, ordered readings and meanings. Packaged sentences use exact constituent-composed PCM before separately retained direct recordings. Speech requests validate normalized, bounded language text; KanjiVG cancels rejected response bodies and accepts prolonged sound marks.
