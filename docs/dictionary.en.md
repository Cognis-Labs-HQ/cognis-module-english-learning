# English Dictionary

The English module registers Free Dictionary through `study:library:provider`; Cognis owns lookup UI and caching.

## Usage Examples

Search an English word in the Study navigation, or use a vocabulary composer lookup. Same-composition readings and meanings are combined by Cognis. The API performs exact word lookup, not fuzzy/full-text suggestions or whole-sentence translation.

## Technical Specification

Only schema `english`, language `en`, layer `words` is supported. Endpoint: `https://api.dictionaryapi.dev/api/v2/entries/en/`. Query length is at most 100 characters; only English letters, internal spaces, apostrophes and hyphens are accepted. Each request has a 15-second timeout; redirects are rejected; JSON responses larger than one million characters or malformed records fail safely.

Meanings retain provider order, remove duplicate/empty glosses and stop at ten. IPA readings are deduplicated and bounded to ten. Curated native primary IPA remains first so existing transformation pronunciation rules continue to match. Part-of-speech tags preserve known local paradigms; unknown verbs get no invented inflection. Complete alphabet-only spellings resolve packaged letter IDs.

A 404 returns a genuine packaged match, or no results. Server/network/parse failures are logged safely and reported to Cognis. Failed loads discard the immutable index promise so later attempts can retry. Query results are never cached or scheduled by the module: Cognis owns one-hour probes, twelve-hour changed-result publication and persisted results.

Definitions received from the service remain English. Cognis may translate through its localization capability. `dictionary_data` is hidden from card details and retains the endpoint, declared license and approved Wiktionary sources rather than the complete raw response. Results may carry CC BY-SA 3.0 and Wiktionary attribution; preserve those obligations when reusing external definitions. The service may provide multiple parts of speech under one spelling and does not publish authoritative inflection paradigms.

## Saved Study Controls

The bundled reference catalog is named Open English WordNet. Dedicated recordings cover all 32 curated noun plural forms. Selected-form playback resolves each variant by its label and preferred reading; missing forms never substitute a base recording.
