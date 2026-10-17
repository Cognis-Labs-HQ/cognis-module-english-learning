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

## Vokabelillustrationen

Jede mitgelieferte Vokabelkarte besitzt jetzt eine eigene generierte Illustration im Buntstift- und Aquarellstil (192 Karten). Konkrete Gegenstände, Handlungen und Kontextbilder für abstrakte Begriffe erscheinen in der vorhandenen Kartendetailgalerie und Bildvorschau. Die bisherigen Quellfotos wurden ersetzt. Der [Bildkatalog](data/library/assets/images/catalog.json) dokumentiert Erzeugungsquelle, Stil, Bildausschnitte, Prüfsummen und Kartenzuordnungen; die [Bildlizenz](data/library/assets/images/LICENSE.md) beschreibt die mitgelieferten Illustrationen. Bilder werden lokal geladen, eigene Benutzerbilder bleiben bei Anbieter-Neuladevorgängen durch den Host erhalten.

## Haushaltsvokabular

Fünfzehn Alltagsnomen ergänzen Möbel, Kleidung, Gegenstände und Lebensmittel mit Bedeutungen in vier Sprachen, Ausspracheverknüpfungen, eigenen Aufnahmen und einem Stapel für Alltagsgegenstände. Zählbare englische Nomen enthalten aufgenommene Pluraltransformationen, einschließlich des unveränderten Plurals fish; rice bleibt ein Stoffname. Japanische Anfängerschreibweisen verknüpfen vollständige Lesungen mit einzelnen Kana, einschließlich des Langvokalzeichens ー in テーブル und コート.

## Lebensmittel und Körperteile

32 illustrierte Substantive ergänzen jeweils sechzehn Lebensmittel und Körperbegriffe mit Bedeutungen in vier Sprachen sowie eigenen Lernstapeln für Lebensmittel und Körperteile. Englisch enthält 25 aufgenommene Zahltransformationen, darunter feet, teeth, potatoes und mouths mit stimmhaftem Konsonanten; Stoffnamen wie Hühnerfleisch, Rindfleisch, Butter und Haut erhalten keine Pluralfamilie. Japanisch bewahrt vollständige Verknüpfungen zu einzelnen Kana, trennt die Bedeutungen Fuß und Bein von あし in eigene Definitionen und verwendet vorhandene muttersprachliche Aufnahmen bei identischen Ausspracheeingaben weiter. Vier einzeln verfasste Beispielsätze pro Sprache besitzen direkte neuronale Aufnahmen mit Vorrang vor exakt aus den Bestandteilen zusammengesetzten Ersatzaufnahmen. Alle Illustrationen werden lokal im etablierten sprachspezifischen Zeichenstil mitgeliefert.
