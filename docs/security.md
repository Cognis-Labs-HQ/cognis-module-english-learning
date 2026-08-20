# Security

The module exposes a read-only, authenticated learning library while keeping implementation failures and host details out of public responses.

## Usage examples

Call library endpoints with an authenticated Cognis request. Invalid layers or unavailable data receive stable public errors; operators receive safe structured failure metadata through the host logger.

## Technical specification

All library endpoints authenticate before reading data. Paths are fixed by the store, and layer names are allow-listed. API failures return stable public messages while initialization details are written only to the host logger as structured metadata.
