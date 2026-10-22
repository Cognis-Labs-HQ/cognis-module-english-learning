# Englisch lernen

[English](README.en.md) · [Deutsch](README.de.md) · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Englische Lerninhalte und Anbieterintegration für Cognis Study.

## Enthaltene Lerninhalte

Das Paket bietet Schreibvorlagen, thematischen Wortschatz, verknüpfte Beispiele, Illustrationen und Startdecks. Die paketierten Inhalte und Medienverzeichnisse sind maßgeblich für die Verfügbarkeit.

## Funktionen

- Buchstaben- und Verbindungskarten bieten eigene JSON-Schreibvorlagen; Vokabel-, Grammatik- und Satzzeichenkarten sind mit Beispielsätzen verknüpft.
- Kuratierte Verb-, Kopula- und Adjektivparadigmen mit unregelmäßigen Formen und IPA; verborgene Karten erhalten vollständige Satzgraphen.
- Suchbares freies Wörterbuch mit begrenzten Definitionen und Lesungen, verborgenen Quellenangaben und hostverwaltetem Cache.
- lokalisierte Startdecks verwenden Cognis-Lernkarten, Favoriten und Freigaben.

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

Mitgelieferte WAV-Dateien werden auf Prüfsumme, Format und PCM-Integrität geprüft. Die Prüfung durch Anhören wird getrennt dokumentiert und kann unbestätigt sein. `data/audio/recordings.json` führt vorhandene Aufnahmen und Zusammensetzungen auf. `data/audio/unavailable.json` nennt Karten ohne mitgelieferte Audiodatei ausdrücklich; fehlende Aufnahmen sind keine Wiedergabe-URLs. Die festgelegte Stimme ist `gJx1vCzNCD1EQHT212Ls`. Zugangsdaten und Offline-Erzeugungswerkzeuge werden nicht mitgeliefert.

Bei der Wiedergabe mitgelieferter Sätze hat die Zusammensetzung aus exakten PCM-Wortaufnahmen einschließlich der vorgesehenen grammatischen Formen Vorrang. Separat erzeugte vollständige Satzaufnahmen bleiben mit ihrer ursprünglichen Herkunft erhalten. Fehlt eine passende Wortaufnahme, hat der Satz kein mitgeliefertes Audio; fehlende Formen werden nie durch Grundformen ersetzt.

Bootstrap registriert einen entfernbaren Anbieter über `study:audio:provider.registerProvider`. Gebündelte Karten und Varianten funktionieren ohne installiertes oder konfiguriertes ElevenLabs. Fehlende Wortaufnahmen können die optionale konfigurierte Fähigkeit `elevenlabs-tts:synthesis` verwenden. Standardmäßig wird die festgelegte Sprachstimme angefordert; Administratoren können für neue Synthese eine andere Stimme konfigurieren. Neue Sätze fordern keine separate vollständige Satzsynthese an. Cognis verwaltet Berechtigungen globaler Karten, Zwischenspeicherung, manuelle Uploads und die Regeln für persönliche und Klasseninhalte. Nur die erste verfasste Aussprache wird gewählt.

Erzeugte Dateien enthalten Mono-PCM mit 24 kHz und 16 Bit, begrenzten Spitzenwerten und geprüftem hörbarem Inhalt. Anforderungen verwenden feste sprachspezifische Modelle, Geschwindigkeit 0,9, Ähnlichkeit 0,85 und Stil 0; die Stabilität beträgt für Englisch 0,75 und für Japanisch 0,9. Startwerte bleiben je Anforderung dokumentiert; verworfene stille Ausgaben werden ohne Stimmenwechsel erneut erzeugt. Englisch verwendet verfasste IPA-Phonem-Tags. Das Inhaltsmanifest deklariert das mitgelieferte Medienverzeichnis und erhöht die Paketversion für die Installation.

## Vokabelillustrationen

Vokabelkarten verwenden generierte Illustrationen im Buntstift- und Aquarellstil. Konkrete Gegenstände, Handlungen und Kontextbilder für abstrakte Begriffe erscheinen in der vorhandenen Kartendetailgalerie und Bildvorschau. Die bisherigen Quellfotos wurden ersetzt. Der [Bildkatalog](data/library/assets/images/catalog.json) dokumentiert Erzeugungsquelle, Stil, Bildausschnitte, Prüfsummen und Kartenzuordnungen; die [Bildlizenz](data/library/assets/images/LICENSE.md) beschreibt die mitgelieferten Illustrationen. Bilder werden lokal geladen, eigene Benutzerbilder bleiben bei Anbieter-Neuladevorgängen durch den Host erhalten.

## Haushaltsvokabular

Alltagsnomen ergänzen Möbel, Kleidung, Gegenstände und Lebensmittel mit Bedeutungen in vier Sprachen, Ausspracheverknüpfungen, eigenen Aufnahmen und einem Stapel für Alltagsgegenstände. Zählbare englische Nomen enthalten aufgenommene Pluraltransformationen, einschließlich des unveränderten Plurals fish; rice bleibt ein Stoffname. Japanische Anfängerschreibweisen verknüpfen vollständige Lesungen mit einzelnen Kana, einschließlich des Langvokalzeichens ー in テーブル und コート.

## Lebensmittel und Körperteile

Vorbereitete Sätze verwenden exakt zusammengesetzte PCM-Daten einschließlich gewählter Transformationen. Unabhängig erzeugte vollständige Satzaufnahmen bleiben mit ursprünglichen Stimmen- und Anfragedaten im Inventar, überschreiben jedoch keine zusammengesetzte Aufnahme. Neue Sätze verwenden weiterhin die vom Host verwaltete Komposition und Zwischenspeicherung.

## Aufnahmeverzeichnisse

`data/audio/recordings.json` verwendet Inventarformat 2 mit Sprache, Stimme, Modell, Verarbeitungseinstellungen, Gesamtzahlen und geprüften Zweckindexpfaden. Dateien unter `data/audio/indexes/` verweisen mit Prüfsummen auf die Dateien unter `data/audio/inventories/`, getrennt nach Zeichen, Vokabeln, Transformationen, direkten Sätzen und Satzkompositionen. Haupt- und Zweckindizes bleiben unter 400 Zeilen, Aufnahmedateien bei höchstens 800 Zeilen. Vor der Wiedergaberegistrierung prüft der Lader beide Ebenen, Anzahlen, erlaubte Pfade, Zweckzuordnung und doppelte Pfade. Aufnahmeobjekte, Audiodaten und Suchpriorität bleiben erhalten.

## Explizite Katalognormalisierung und Satzkompositionen

Der Katalogleser erhält seine Normalisierungsregel vom Sprachanbieter: NFC für Englisch, NFKC für Japanisch. Gemeinsamer Suchcode verzweigt nicht mehr nach einer bestimmten Sprache. Die Inventare heißen `sentence-compositions`; jeder Eintrag beschreibt eine echte paketierte Aufnahme aus geordneten Einzelaufnahmen. Zusammengesetzte Satzaufnahmen haben Wiedergabevorrang; direkte neuronale Aufnahmen bleiben getrennt im Inventar.

## Lokalisierte Bildbezeichnungen und neutrale Dateinamen

Dateinamen und IDs der Illustrationen verwenden ihren SHA-256-Hash; Quellblätter verwenden den Hash ihrer Quelldaten. Die Katalogmetadaten liefern deutsche, englische, indonesische und japanische Bezeichnungen aus den vorhandenen Bedeutungen der Karten. Anzeige und neutrale Speicherkennung sind getrennt. Bilddaten und Kartenidentitäten bleiben unverändert; Inhaltsrevisionen aktualisieren alle Bildverweise.

## Abschließende Prüfung und Zugriff bei deaktivierter Sprache

Die Deinstallation löscht gespeicherte Stimmeneinstellungen unabhängig vom Erhalt der Lerninhalte. Deaktivieren entfernt Modulrouten, statische Oberflächen und Anbieterregistrierungen; Einstellungen überstehen Deaktivierung und Neustarts und sind nur im aktivierten Zustand erreichbar. Cognis sperrt gespeicherte Schemata, Karten und Medien anhand des aktiven Sprachanbieters und stellt den Zugriff beim Aktivieren wieder her. Referenzergebnisse vereinen gleichwertige Quellenidentitäten und bewahren Quelldaten, Lesereihenfolge und Bedeutungen. Vorbereitete Sätze verwenden exakte zusammengesetzte PCM-Aufnahmen vor getrennt erhaltenen Direktaufnahmen. Sprachanfragen prüfen normalisierten, begrenzten Text; KanjiVG verwirft abgelehnte Antwortdaten und akzeptiert Langvokalzeichen.

Der Wortschatz zeigt anfangs alle Wortarten. Der optionale Wortartfilter kann gewählt oder aufgehoben werden; eine Auswahl von Substantiven ist nicht mehr erforderlich. Composer-Wortschatz bleibt in Cognis regulär durchsuchbarer lexikalischer Inhalt.
