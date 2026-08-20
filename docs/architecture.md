# Architecture

The module keeps the external contract at its repository root. `bootstrap.js` registers API and UI contributions through the supplied `ctx`; it never imports host internals. `api/store.js` loads and validates the extracted read-only English datasets. Browser pages consume the module API and register with Cognis through SPA and navbar contributions.

## Usage examples

Cognis loads `bootstrap.js` through the manifest entrypoint and passes the host context to `bootstrapModule(ctx)`. Consumers use the registered `study:language:en` capability and the `/english` host route rather than importing module implementation files.

## Technical specification

The immutable UUID comes from the original in-tree English language manifest. The Study gateway UUID in `requires` makes the component relationship explicit, while `auth:requireAuth` protects API requests. Scoped context registrations own the module lifecycle and are removed when Cognis disables the module.
