# Offline Study

**Feature Branch:** feature-offline-study

## Offline Mode

Study keeps bounded lightweight JSON snapshots in the current tab: schemas, permitted character/card data, locations, viewed IDs, favourites and previously opened decks. Language schemas opt in with `metadata.offline: { cache: "lightweight" }`. The Library cache holds at most 16 MB and 100 reads; other read caches hold at most 4 MB and 100 reads. No audio bytes, dictionary responses, credentials or authenticated documents are persisted.

Explore previews resolve relationships from already-authorized cached rows. Drawing works locally with fresh guidance; flashcard practice advances locally. Audio and dictionary/ElevenLabs requests stop, and offline practice does not save progress, XP, rewards, favourites or edits. Only previously loaded content that fits the cache is available; missing dependencies remain absent.

Private Study requires the same previously verified, unexpired account session in the same tab. Reloads and first visits retain the public-only offline contract. Account/session changes, preference changes, module lifecycle changes and provider disposal invalidate private snapshots. Server revocations cannot be learned while disconnected. Recovery uses the existing unsaved-change guard and reloads to refresh server authorization.

## Commits

- [3af85bf](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3af85bf8defd0334fda4f75589618375fa9d6799)
- [6ead1c5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6ead1c5d81c882f580c97b65f0d03f75bc05eff2)
