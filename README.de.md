# Englisch lernen

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Englische Lerninhalte und Anbieterintegration für Cognis Study.

## Funktionen

- 52 Buchstabenkarten und 17 Verbindungen mit eigenen JSON-Schreibvorlagen; 123 Anfängerwörter, 21 Grammatik-/Satzzeichenkarten und 45 verknüpfte Sätze.
- 37 kuratierte Verb-, Kopula- und Adjektivparadigmen mit unregelmäßigen Formen und IPA; verborgene Karten erhalten vollständige Satzgraphen.
- Suchbares freies Wörterbuch mit begrenzten Definitionen und Lesungen, verborgenen Quellenangaben und hostverwaltetem Cache.
- Sieben lokalisierte Startdecks verwenden Cognis-Lernkarten, Favoriten und Freigaben.

## Installation

Installieren und aktivieren Sie dieses Repository im Cognis-Modulmarktplatz. Study-Gateway und Fähigkeit `study:library:provider` sind erforderlich.

## Architektur

Bootstrap registriert Anbieter über ctx, importiert das geschützte Paket, veröffentlicht den englischen Deskriptor und einen entfernbaren Ablaufbeitrag. Deaktivierung entfernt Anbieter; Deinstallation behält Inhalte oder löscht sie über Cognis kaskadierend. Host-Oberfläche, Cache-Richtlinien und interne Komponenten werden nicht dupliziert.

[`docs/index.de.md`](docs/index.de.md) · [`docs/dictionary.de.md`](docs/dictionary.de.md)

## Prüfungen für Beiträge

```sh
npm install
npm run manifest:hashes
npm test
npm run lint
npm run check:manifest
git diff --check
```

## Sprache und Aufnahmen

Das Paket enthält geprüfte WAV-Aufnahmen für jede vertonte kuratierte Karte, jedes Zeichen, jede Partikel und jede erreichbare Schematransformation, einschließlich Pluralformen und mehrstufiger Verbformen. `gJx1vCzNCD1EQHT212Ls` ist die festgelegte Stimme dieser Sprache. `data/audio/recordings.json` dokumentiert Anforderungen, Stimme, Modell, Einstellungen, Transformationspfade und Prüfsummen; Zugangsdaten und Erzeugungswerkzeuge werden nicht mitgeliefert.

Mitgelieferte Sätze verwenden direkt erzeugte vollständige Satzaufnahmen vor zusammengesetztem Audio. Neue oder nicht aufgezeichnete Sätze nutzen die Zusammenstellung des Hosts mit exakt geordneten PCM-Bestandteilen und ausgewählten Transformationen; fehlende Varianten werden niemals durch die Grundform ersetzt. Die Aufnahmen decken das kuratierte Paket ab, nicht jeden Wörterbucheintrag oder möglichen selbst verfassten Satz.

Bootstrap registriert einen entfernbaren Anbieter über `study:audio:provider.registerProvider`. Gebündelte Karten und Varianten funktionieren ohne installiertes oder konfiguriertes ElevenLabs. Fehlende Wortaufnahmen können die optionale konfigurierte Fähigkeit `elevenlabs-tts:synthesis` verwenden. Standardmäßig wird die festgelegte Sprachstimme angefordert; Administratoren können für neue Synthese eine andere Stimme konfigurieren. Neue Sätze fordern keine separate vollständige Satzsynthese an. Cognis verwaltet Berechtigungen globaler Karten, Zwischenspeicherung, manuelle Uploads und die Regeln für persönliche und Klasseninhalte. Nur die erste verfasste Aussprache wird gewählt.

Erzeugte Dateien enthalten Mono-PCM mit 24 kHz und 16 Bit, begrenzten Spitzenwerten und geprüftem hörbarem Inhalt. Anforderungen verwenden feste sprachspezifische Modelle, Geschwindigkeit 0,9, Ähnlichkeit 0,85 und Stil 0; die Stabilität beträgt für Englisch 0,75 und für Japanisch 0,9. Startwerte bleiben je Anforderung dokumentiert; verworfene stille Ausgaben werden ohne Stimmenwechsel erneut erzeugt. Englisch verwendet verfasste IPA-Phonem-Tags. Das Inhaltsmanifest deklariert das mitgelieferte Medienverzeichnis und erhöht die Paketversion für die Installation.

## Referenzfotos für Vokabeln

63 kuratierte Vokabelkarten enthalten jetzt mitgelieferte Referenzfotos (55 Bilddateien). Alle konkreten Substantive sowie bildlich klare Handlungen und Eigenschaften sind abgedeckt; Grammatik, Pronomen und andere abstrakte Begriffe erhalten keine irreführenden Füllbilder. Japanische Homophone wie 花/鼻, 橋/箸, 雨/飴 und 紙/髪/神 verwenden unterschiedliche Referenzen. Die Bilder werden lokal in der vorhandenen Detailgalerie und Vollbildvorschau geladen. Quelltitel, Urheber, individuelle Creative-Commons- beziehungsweise Gemeinfreiheitslizenzen und Prüfsummen stehen im [Bildkatalog](data/library/assets/images/catalog.json) und in den [Bildnachweisen](data/library/assets/images/LICENSE.md). Eigene Kartenbilder bleiben beim erneuten Laden der Anbieter durch den Host geschützt.
