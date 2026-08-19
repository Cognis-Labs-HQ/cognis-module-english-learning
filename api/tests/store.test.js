import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';
import { EnglishLibrary } from '../store.js';

test('loads the extracted English alphabet and library layers', async () => {
  const library = new EnglishLibrary(path.resolve('data'));
  await library.initialise();
  const characters = library.query('characters');
  assert.equal(characters.length, 26);
  assert.deepEqual(characters[0], { id: 'en:char:a', symbol: 'A', romanization: 'a' });
  assert.deepEqual(Object.keys(library.snapshot()), ['characters', 'alt_characters', 'definitions', 'words', 'sentences']);
});

test('filters known layers and rejects unknown layer names', async () => {
  const library = new EnglishLibrary(path.resolve('data'));
  await library.initialise();
  assert.equal(library.hasLayer('characters'), true);
  assert.equal(library.hasLayer('secrets'), false);
  assert.deepEqual(library.query('characters', { symbol: 'Z' }), [{ id: 'en:char:z', symbol: 'Z', romanization: 'z' }]);
});
