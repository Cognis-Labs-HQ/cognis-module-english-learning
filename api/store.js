import { readFile } from 'node:fs/promises';
import path from 'node:path';

const LAYERS = Object.freeze({
  characters: ['characters', 'latin.json'],
  alt_characters: ['alt-characters', 'common.json'],
  definitions: ['definitions', 'common.json'],
  words: ['words', 'common.json'],
  sentences: ['sentences', 'common.json'],
});

function clone(value) {
  return structuredClone(value);
}

export class EnglishLibrary {
  #root;
  #layers = new Map();

  constructor(root) {
    this.#root = root;
  }

  async initialise() {
    for (const [layer, parts] of Object.entries(LAYERS)) {
      const rows = JSON.parse(await readFile(path.join(this.#root, ...parts), 'utf8'));
      if (!Array.isArray(rows)) throw new Error(`Invalid ${layer} data.`);
      const ids = new Set();
      for (const row of rows) {
        if (!row || typeof row.id !== 'string' || !row.id.trim() || ids.has(row.id)) {
          throw new Error(`Invalid ${layer} record.`);
        }
        ids.add(row.id);
      }
      this.#layers.set(layer, rows);
    }
  }

  hasLayer(layer) {
    return Object.hasOwn(LAYERS, layer);
  }

  query(layer, query = {}) {
    const rows = this.#layers.get(layer) ?? [];
    const filters = Object.entries(query);
    return clone(rows.filter((row) => filters.every(([key, expected]) => String(row[key] ?? '') === expected)));
  }

  snapshot() {
    return Object.fromEntries(Object.keys(LAYERS).map((layer) => [layer, this.query(layer)]));
  }
}
