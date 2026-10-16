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

Das Modul registriert seine Sprache bei `study:audio:provider` und speichert eine optionale ElevenLabs-Stimmen-ID über `db:executor`. Leer lassen, um `voiceId` auszulassen und die Standardstimme zu verwenden. Zugangsdaten, Stimmensuche und Testaudio werden im separaten ElevenLabs-Modul konfiguriert. Sprachpakete enthalten keine erzeugten Aufnahmen oder HTTP-Implementierung des Anbieters.

Cognis prüft gespeicherte globale Karten vor dem Aufruf von `elevenlabs-tts:synthesis`. Beim Öffnen einer Karte wird kein Audio erzeugt. Administratoren können globale Karten im Editor neben dem Player neu vertonen. Private und Klassenkarten erlauben Uploads oder Mikrofonaufnahmen bis 5 MiB. Sätze behalten die kontinuierliche Zusammenstellung vorhandener Aufnahmen als Rückfall; dabei wird für private und Klassenkarten niemals Synthese ausgelöst. Explizite Aufnahmen haben Vorrang. Nur die erste verfasste Aussprache wird verwendet.

Die Inhaltspaketversion wird bei Inhaltsänderungen erhöht, um Konflikte mit früher eingelesenen Revisionen zu verhindern.

ElevenLabs ist als optionale Modulabhängigkeit deklariert. Bei der Installation kann es für Sprachsynthese ausgewählt werden; Study-Aktivierung sowie manuelle und zusammengesetzte Audioaufnahmen bleiben ohne dieses Modul verfügbar.

`elevenlabs-tts:synthesis` im eigenen Modulnamensraum veröffentlichen und die Privilegien-Markierung entfernen. English und Japanese Study lösen diese Fähigkeit über ctx und ihre bestehende optionale Modulabhängigkeit auf. Die Study-Brücke erhält den aktuellen Fähigkeitszugriff vom Aufrufer und bewahrt Deaktivierung, erneute Aktivierung und konfigurierte Stimmen.

Die veröffentlichte Fähigkeit meldet ihre aktuelle Bereitschaft über `configured`. Study aktiviert automatische Sprache erst nach dem Speichern von API-Schlüssel und Standardstimme. Fehlt ElevenLabs oder ist es deaktiviert oder unkonfiguriert, gelingt die Sprachregistrierung weiterhin. Hochgeladene Aufnahmen und die Zusammenstellung vorhandener Audios bleiben verfügbar; Synthese wird nicht angefordert.
