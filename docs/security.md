# Security

All library endpoints authenticate before reading data. The library is read-only, paths are fixed by the store, and layer names are allow-listed. API failures return stable public messages while initialization details are written only to the host logger as structured metadata.
