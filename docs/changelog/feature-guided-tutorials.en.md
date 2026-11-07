# Guided tutorial

**Feature Branch:** feature-guided-tutorials

## Technical Specification

Explore and Flashcards routes are resolved by Study’s public `study:tutorialTargets` capability. The language module contributes language data and plays only; Cognis retains route, enrollment, cache and learning UI ownership. English and Japanese use the same provider implementation. Cached content can be explained offline. Targets that are missing after navigation follow the host missing-target policy.

The module registers its own play and localized strings through ctx. The host owns the catalog, callouts, arrows, spotlight, keyboard and pointer controls, guarded SPA navigation and accessibility. Closing a tutorial, navigating away, losing access or disabling the module releases the session. Failed provider mounting rolls back its registrations.

Provider tests check the public contract, all four translations, availability rules, rollback and rejection of unsupported host versions.

## Page-bound First Visits

The host owns callouts, arrows, spotlight, accessibility and the shared floating action menu. First-time runs offer Next throughout, without Cancel or Skip. Replays offer Cancel with `btn-cancel`. Completion is stored per account in the browser. Navigation, access loss and provider removal release the session; failed mounts roll back registrations.

## Module Translation Keys

Tutorial translation keys use the complete manifest module ID as one namespace segment, including its hyphens.

## Actionable Tutorial Copy

Tutorial steps focus on the controls and tasks available on the page, without unrelated reassurances about permissions or actions the guide does not perform.

## Author Next cues per step

Each tutorial step now explicitly declares `highlightNext`: explanations that require Next or Finish enable it, while interaction- and wait-driven exercises disable it. The cue retains a static outline for reduced motion.

Tutorial coverage is required for every UI-facing component. Contributor guidance requires user-first, task-focused walkthroughs and a review of existing tutorials whenever features or UI behavior change.

## Visible tutorial regions

Tutorial regions and Next cues are authored explicitly.

## Shared floating-menu queue

Menus follow the shared queued host contract and component lifetime.

## Documented recovery controls

Missing-target views provide Next and Restart Tutorial; replay also provides Cancel.

## Intentional tutorial guidance

Tutorials explain distinct visible controls in UI order. Shared guidance covers active-view discovery, stable examples, empty states, conditional branches and lifecycle cleanup. Replay controls and reduced-motion documentation match the shared host.

## Commits

- [e1d021b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e1d021bff42813deefaf1996c9254fa4c1989197)
- [2634251](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/26342513e70ae51ab235ab276c73515857836e54)
- [69ea9e2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/69ea9e2bad4a19dd701fd3de40ea037b3222822b)
- [ba6400e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ba6400eec803d69d53b7099dd34161ca98738b0a)
- [6e6f062](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6e6f0625fa5598da1c6c6237c75f6ecd197b7609)
- [b696b59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b696b59c123632458fe2f16e0e2b1e538fd3b44a)
