import { escapeHtml, showError } from './reuse.js';

const root = document.querySelector('#study-language-en-alphabet-root') ?? document.querySelector('main');

async function mount(target) {
  try {
    const response = await fetch('/api/v1/modules/study-language-en/library/characters', { credentials: 'same-origin' });
    const payload = await response.json();
    if (!response.ok) throw new Error('request_failed');
    target.innerHTML = `<section class="english-learning card-elevated"><h1 data-i18n="module.study_language_en.alphabet.title">English Alphabet</h1><p data-i18n="module.study_language_en.alphabet.intro">Explore the 26 letters of the English alphabet.</p><div class="alphabet-grid">${payload.data.map((character) => `<article class="alphabet-cell"><strong>${escapeHtml(character.symbol)}</strong><span>${escapeHtml(character.romanization)}</span></article>`).join('')}</div></section>`;
  } catch {
    showError('module.study_language_en.alphabet.error');
  }
}

if (root) void mount(root);
