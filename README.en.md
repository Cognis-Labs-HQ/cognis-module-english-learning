# English Study

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

English learning content and provider integration for Cognis Study.

## Features

- 52 alphabet cards and 17 letter combinations with original JSON writing guides; 123 beginner words, 21 grammar/punctuation cards and 45 linked sentences.
- 37 curated verb, copula and adjective paradigms with irregular forms and IPA; hidden supporting forms preserve complete sentence graphs.
- Searchable Free Dictionary lookup, bounded definitions/readings, hidden attribution and host-owned caching.
- Seven localized starter decks use Cognis flashcards, favourites and sharing.

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

The module registers its language with `study:audio:provider` and stores an optional ElevenLabs voice ID using `db:executor`. Leave it blank to omit `voiceId` from speech requests and use the speech module default. Configure credentials, voice discovery and test audio in the separate ElevenLabs module. Language packs contain no generated recordings or provider HTTP implementation.

Cognis authorizes saved global cards before requesting `elevenlabs-tts:synthesis`. Merely opening a card does not generate audio. Administrators can regenerate global-card audio beside the player when editing. Private and classroom cards accept manual uploads or microphone recordings, limited to 5 MiB. Sentences retain the continuous composite fallback when constituent recordings are already available; private and classroom composition never triggers provider synthesis. Explicit recordings take priority. Only the primary authored pronunciation is used.

Content pack versions advance whenever packaged content changes, preventing activation conflicts with earlier ingested revisions.

ElevenLabs is declared as an optional module dependency. Installation can offer it for speech synthesis, but Study enablement and manual or composite audio remain available without it.

Publish `elevenlabs-tts:synthesis` within the module-owned namespace and remove the privileged flag. English and Japanese Study resolve this capability through ctx using their existing optional module dependency. The Study bridge receives the live capability getter from its caller, preserving provider disable/re-enable and configured voice handling.
