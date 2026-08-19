# Architecture

The module keeps the external contract at its repository root. `bootstrap.js` registers API and UI contributions through the supplied `ctx`; it never imports host internals. `api/store.js` loads and validates the extracted read-only English datasets. Browser pages consume the module API and register with Cognis through SPA and navbar contributions.

The immutable UUID comes from the original in-tree English language manifest. The Study gateway UUID in `requires` makes the component relationship explicit, while `auth:requireAuth` protects API requests.
