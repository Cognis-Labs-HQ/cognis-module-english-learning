# Generated Study Forms

**Feature Branch:** feature-generated-transformations

## Generate Forms from Base Cards

English grammatical families now generate plural, verb, adjective, manner-adverb and gradable-adverb forms from explicitly flagged base cards. Reviewed irregular spellings and IPA remain rule overrides. Sentence references retain the base ID and transformation path, including “running”, “ran”, “want to run” and “wanted to run”. Independently stored inflections are removed.

## Preserve Recordings and Writing

Packaged recordings retain their designated voice and exact sentence constituent audio. Additional clips cover the new chained and adverb forms. Coverage tests require every enabled rule and selected path to have matching media. Generated spelling remains compatible with the host writing-pattern resolver.

## Show every vocabulary class

Made the Part of Speech browse filter optional without a noun default, so sentences’ verbs, pronouns, adjectives and other words remain discoverable. Card editing still requires a Part of Speech value.

## Keep sentence vocabulary discoverable

Sentence-structure carousels explicitly declare `excludeFromBrowse: false`, so their lexical words also appear in Vocabulary. Punctuation-only carousels remain excluded. Tests cover every sentence vocabulary reference, hidden pronunciation aliases and optional filter coverage.

## Curate learner-facing tags

English card pills now expose localized, meaningful metadata instead of internal transformation and form tags. Part-of-speech options and filters use their localized labels and provider order. Optional filters start unselected, including when only one value is present; authored tags and generated transformations remain intact.

## Generic difficulty profiles

Both Study modules use the canonical `difficulty_level` field. Their identical normalizer and contract tests read `data/library/difficulty.json`; labels, ordered options, source tag mappings, basic-layer defaults and transformation requirements are data. Japanese presents JLPT N5–N1; English uses its existing beginner/intermediate/advanced categories. Unknown values remain unclassified. The host ranks declared fields without language-specific rules or alternate field names.

## Commits

- [58369ddb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/58369ddb55a1b12162a37567e3027f4b1cf6b83c)
- [8aecdc0a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8aecdc0a5c0f0d2315b2947a5315fb3545a8c20b)
- [d26a0f0c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d26a0f0cdbdbf56720cc244bdf2f44cfeb7452bc)
- [a4f284f7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a4f284f71438edf5c3e6b67fc1018cdcdf4782d1)
- [ae9407b6](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ae9407b684ff6ca0083f7a8b502243f600487c88)

Implementation reference: [`fb16ed21797dafcafea82cddb2d0870a88b31c40`](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/fb16ed21797dafcafea82cddb2d0870a88b31c40).

Dedicated whole-sentence recordings take priority in both card playback and provider lookups. Exact constituent-composed recordings remain available for sentences without a dedicated recording, including selected grammatical forms; missing forms never substitute base-form clips. New sentences continue through host-owned composition and caching.

Implementation reference: [`19bb9d8eb20350566381f89ed7655269ff9da700`](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/19bb9d8eb20350566381f89ed7655269ff9da700).
