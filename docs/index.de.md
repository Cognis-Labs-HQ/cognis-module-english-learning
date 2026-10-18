# Englisch lernen

Englisch lernen liefert einen versionierten Lerngraphen, englische Wörterbuchergänzungen, eigene Druckschrift-Vorlagen und zehn Startdecks. Cognis verwaltet die Lernoberfläche und sämtliche Nutzerdaten.

## Nutzungsbeispiele

- Erkunden Sie `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` und `/study/en/sentences`.
- Suchen Sie mit dem freien Wörterbuch in der Study-Navigation. Ausgewählte Wortschatztreffer füllen den Karteneditor des Hosts.
- Unter `/study/flashcards` stehen Englisches Alphabet, Erste englische Wörter, Englische Verben im Alltag und Erste englische Sätze bereit. Cognis übernimmt Lernen, Favoriten und Freigaben.

## Technische Spezifikation

### Anbietervertrag und Lebenszyklus

Die dauerhafte Modul-UUID lautet `b1adc29f-9d54-5785-9bea-2ce76f1981e4`, die erforderliche Study-Gateway-UUID `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap verlangt `ctx.capabilities.require("study:library:provider")` mit funktionsfähigen Methoden `ingestContentPack`, `registerLookupProvider` und `deleteContentPack`. Nach Registrierung der Schreib- und Wörterbuchanbieter wird `data/` eingelesen. Anschließend werden `study:language:en` und ein entfernbarer Beitrag zum Ablauf `bootstrap-platform` veröffentlicht. Der Deskriptor enthält `code`, `languageCode`, Modulversion, Paket und `starterDecks`.

Die nur Administratoren erlaubten Routen `GET`, `PUT` und `DELETE /api/v1/modules/study-language-en/config` bleiben bei deaktiviertem Modul verfügbar. GET liest die gespeicherte `voiceId`; PUT prüft und speichert sie in `module_study_language_en_config`, auch über Neustarts und erneutes Aktivieren hinweg. DELETE löscht ausschließlich diese Konfiguration. Alle drei liefern HTTP 200 mit einem JSON-Datenumschlag; Lerninhalte werden dabei nicht gelöscht. Anbieter werden bei Deaktivierung oder fehlgeschlagenem Start entfernt. Die Deinstallation behält Inhalte, sofern nicht `deleteContent: true` die transaktionale Host-Operation `deleteContentPack` anfordert. Fehler werden weitergegeben und sicher strukturiert protokolliert.

### Inhaltsgraph

Das Inhaltspaket liefert Klein- und Großbuchstaben, Schreibkombinationen, Wortschatz, Satzstrukturen und lokalisierte Definitionen. Definitionen verwenden das Host-Präfix `studyenglish:definitions`, Marktplatztexte `module.study.language.en.*`. Modul- und Inhaltsmetadaten stehen in den jeweiligen Manifesten.

Geordnete Schreib- und Satzverweise führen zu echten Karten. Verborgene Flexionskarten liefern wörtliche Ziele für die Satzvalidierung; interaktive Formulare verwenden 37 deklarative Verb-, Kopula- und Adjektivparadigmen mit unregelmäßigen Formen und IPA. IPA bleibt Lautschrift und wird nicht mit sachfremden Buchstaben verknüpft. Großgeschriebene Satzanfänge erhalten den tatsächlichen Satztext. Nicht editierbare Grammatikpartikeln umfassen Verneinung, Präpositionen, Konjunktionen und Satzzeichen. Definitionsbeziehungen sind auf zehn Einträge begrenzt.

Formverträge deklarieren Schreibfelder, Buchstabenkarussells für Wörter, Wort-/Partikelkarussells für Sätze und ein Satzstrukturkarussell. Der Host übernimmt Validierung, UUID-Auflösung, Leerzeichen, Import, Grenzen und Benachrichtigungen. Das Alphabet behält sieben Spalten und Großbuchstaben als Kinder der Kleinbuchstaben. Nur atomare Buchstaben verwenden minimale Vorschauen.

### Schreibvorlagen und Medien

Alle Buchstaben und Verbindungen enthalten eigene normalisierte JSON-Druckschriftvorlagen mit geordneten Strichen, Zeitstempeln und Zeichengruppen. Der Schreibanbieter liefert Kopien der Paketdaten ohne Netzabfragen. Diese einführenden Vorlagen schreiben keinen Handschriftstil vor.

### Wörterbuchgrenze

Das freie Wörterbuch fragt ausschließlich englische Wörter über `https://api.dictionaryapi.dev/api/v2/entries/en/<word>` ab. Der versionierte, feldbezogene Anbieter unterstützt die Suche, aber weder Satzübersetzung noch Schreibvorlagen. Eingaben sind begrenzt, der Endpunkt ist fest, Weiterleitungen werden abgelehnt, Anfragen enden nach 15 Sekunden und Antworten werden validiert und begrenzt. Doppelte Lesungen und Bedeutungen werden bei erhaltener Quellenreihenfolge entfernt; höchstens zehn Definitionen und Lesungen werden geliefert. Quellen und Lizenzangaben verbleiben im verborgenen Feld `dictionary_data`. Externe Bedeutungen bleiben Englisch, bis die Host-Lokalisierung weitere Sprachen ergänzt. Einzelheiten stehen in der Wörterbuchdokumentation.

Paketkarten behalten ihre kuratierte primäre IPA und Paradigmen-Tags. Neue reine Buchstabenschreibungen verknüpfen vorhandene Buchstaben; unbekannte Verben erhalten keine geratenen Formen. Bei 404 wird ein echter lokaler Treffer verwendet, andere fehlerhafte Antworten erzeugen einen sicheren Fehler. Cognis Core verwaltet dauerhafte Suchcaches, Prüfungen nach einer Stunde und die Veröffentlichung geänderter Ergebnisse nach zwölf Stunden. Das Modul hält nur unveränderliche Inhaltsindizes, keine Antwortcaches oder Zeitgeber.

### Paketierung und Prüfung

Privilegien erlauben den Host-Sprachnamensraum, umgehen aber keine Study-Berechtigungen. Laufzeitimporte bleiben im Repository, Tests verwenden lokale öffentliche Vertragsattrappen. Alle vier Sprachen und Dokumentationsvarianten werden mitgeliefert. Eigene Inhalte und Vorlagen stehen unter AGPL-3.0-or-later; externe Wörterbuchangaben bleiben getrennt.

Führen Sie `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` und `git diff --check` aus. Erzeugen Sie die Manifest-Hashes nach den letzten Änderungen neu. Änderungsprotokolle gehören nicht zum Paketinhalt.

## Erweiterte Startdecks

Englisch liefert zehn Startdecks. Großbuchstaben, Buchstabenverbindungen und Alltagsadjektive ergänzen die vier bestehenden Stapel. Stabile Schlüssel, übersetzte Namen und vollständige Alphabetreihen werden geprüft.

Das Schema bietet eine Adjektivfilteroption und erhält stabile Inhaltsidentitäten. ctx ist das Anwendungsrückgrat; Cognis verwaltet Aktionsabläufe, Nutzerdaten und Wörterbuchcaches.

## Gemeinsame Sprachseiten

Die Sprachauswahl öffnet Cognis-eigene Erkunden-Seiten auch ohne Unterseiten des Inhaltsanbieters. Ein Sprachwechsel behält die entsprechende Schrift-, Wortschatz- oder Satzrolle. Lernkarten, Bibliothek und Anfragen behalten ihren gemeinsamen Seitenkontext. Englisch deklariert Alphabet, Buchstabenverbindungen, Wortschatz und Sätze über eigene Pfadnamen. Abgebrochene Favoritenabfragen beenden die Einbindung ohne irreführende Fehlermeldung.

## Alphabet, Grammatik und Substantivzahl

Das Alphabet trennt Buchstabennamen von optionalen IPA-Angaben in `letter_sounds` und enthält keine Füllzellen. Satzzeichen besitzen ein eigenes Satzbaukarussell. Satz- und Diskursstrukturen enthalten lokalisierte Bedeutungen und Aussprachen. Geprüfte zählbare Substantivgruppen aktivieren Cognis-Pluralformen mit `optInTag: plural`, einschließlich geänderter Schreibweisen und Aussprachen. Stoffnamen bleiben ausgenommen; Formen entstehen aus Basiskarten statt doppelten Datensätzen.

### Mitwirkendenstruktur und Zuständigkeit des Hosts

Neue Module beginnen mit [cognis-module-template](https://github.com/Cognis-Labs-HQ/cognis-module-template); dieses Repository folgt der in `AGENTS.md` festgehaltenen Vorlagenrevision. `bootstrap.js` orchestriert den Lebenszyklus, `api/index.js` verdrahtet ctx-Abhängigkeiten, `api/routes/<domain>/index.js` enthält HTTP-Handler und `api/reuse/` wiederverwendbaren Servercode. Browserfunktionen liegen unter `ui/`, Styles unter `ui/styles/`, wiederverwendbare Vorlagen unter `ui/templates/` und lokalisierte Dokumentation unter `docs/index.<locale>.md`. Historische Veröffentlichungen liegen in `docs/changelog/` und werden nicht gehasht. Nicht unterstützte optionale Bereiche entfallen.

Öffentliche ctx-Fähigkeiten und deklarierte Abläufe nutzen; niemals Cognis-Interna oder benachbarte Module importieren. Dashboard-Anbieter für Fähigkeiten und Navigation exportieren `mountProvider(scopedUiCtx)` und geben Aufräumfunktionen für eigene Ressourcen zurück. Importe registrieren kein Modulverhalten. Der Host entfernt Fähigkeiten, Ablauf-Hooks, Listener und Anbieterzustand beim Deaktivieren und bindet zwischengespeicherte Anbieter beim erneuten Aktivieren neu ein. Einstellungen, Administration und Anmeldefußzeilen folgen ihren jeweiligen dokumentierten Host-Verträgen. Diese Verträge mit eigenständigen Testdoubles prüfen, die ausführbare Strukturprüfung ausführen, Hashes nach der letzten Paketänderung erneuern und vor der Veröffentlichung Lint, Tests und Manifestprüfung ausführen.

Die Paketprüfung stellt sicher, dass Einstiegspunkte, Icons, Banner und Screenshots reguläre Dateien innerhalb des Checkouts sind, auch nach Pfadauflösung. Die Dokumentation beschreibt öffentliche Verträge und verweist für Veröffentlichungsmetadaten auf Manifeste; Änderungsprotokolle behalten die Herkunft der Veröffentlichung.

Satzkarten benötigen im Library-Schema mindestens zwei Wortverweise. Die Begrüßung lautet „Hello, my friend!“ und enthält passende Zusammensetzungsverweise und lokalisierte Definitionen. IPA bleibt das präzise Ausspracheformat; die Library des Hosts stellt die Zeichen mit gut lesbarer Typografie dar.

## Aufbau der Study-Module

Das Inhaltspaket liegt in `data/library/`, Startdecks in `data/starter-decks.json`. Anbieter liegen in `api/dictionary/` und `api/strokes/`, deterministisches Laden und bytebegrenzte Antwortdekodierung in `api/reuse/`. Übergreifende Tests liegen in `tests/`, API-Tests in `api/tests/`. Das Manifest deklariert `api/routes/config/index.js` als `disabledApi`: Im deaktivierten Zustand registriert dieser Einstiegspunkt administrative GET-, PUT- und DELETE-Konfigurationsrouten, ohne Inhalte einzulesen oder Anbieter zu aktivieren. Veröffentlichte Ablaufkennungen bleiben stabil.

## Wortarten und Pluralformen korrekt halten

Free Dictionary liefert getrennte Vorschläge je Wortart mit ausschließlich passenden Definitionen, Tags und kuratierten Flexionsmustern. Anfragen mit Apostroph oder Bindestrich werden abgelehnt, da der aktuelle Alphabetgraph diese Schreibweisen nicht abbildet. Antworten sind auf eine Million gestreamte Bytes begrenzt und werden bei Überschreitung sofort abgebrochen. Die veröffentlichte Ablaufkennung `study-language-en:bootstrap-registration` bleibt erhalten. Die Pluralbildung bleibt beim Singular `book`, nicht beim bereits pluralen `books`; `houses` verwendet `/haʊzɪz/`. Zehn lokalisierte Startdecks sind dokumentiert.

## Sprache und Aufnahmen

Das Paket enthält geprüfte WAV-Aufnahmen für jede vertonte kuratierte Karte, jedes Zeichen, jede Partikel und jede erreichbare Schematransformation, einschließlich Pluralformen und mehrstufiger Verbformen. `gJx1vCzNCD1EQHT212Ls` ist die festgelegte Stimme dieser Sprache. `data/audio/recordings.json` dokumentiert Anforderungen, Stimme, Modell, Einstellungen, Transformationspfade und Prüfsummen; Zugangsdaten und Erzeugungswerkzeuge werden nicht mitgeliefert.

Sätze verwenden exakt die PCM-Abtastwerte ihrer geordneten Wort- und Partikelaufnahmen einschließlich ausgewählter Transformationen. Gebündelte Sätze behalten dadurch dieselbe Stimme und Aussprache wie die Einzelwiedergabe. Neue Sätze verwenden die Zusammenstellung des Hosts; eine fehlende Variante darf niemals durch die Aussprache der Grundform ersetzt werden. Die Aufnahmen decken das kuratierte Paket ab, nicht sämtliche Wörterbucheinträge oder mögliche selbst verfasste Sätze.

Bootstrap registriert einen entfernbaren Anbieter über `study:audio:provider.registerProvider`. Gebündelte Karten und Varianten funktionieren ohne installiertes oder konfiguriertes ElevenLabs. Fehlende Wortaufnahmen können die optionale konfigurierte Fähigkeit `elevenlabs-tts:synthesis` verwenden. Standardmäßig wird die festgelegte Sprachstimme angefordert; Administratoren können für neue Synthese eine andere Stimme konfigurieren. Neue Sätze fordern keine separate vollständige Satzsynthese an. Cognis verwaltet Berechtigungen globaler Karten, Zwischenspeicherung, manuelle Uploads und die Regeln für persönliche und Klasseninhalte. Nur die erste verfasste Aussprache wird gewählt.

Erzeugte Dateien enthalten Mono-PCM mit 24 kHz und 16 Bit, begrenzten Spitzenwerten und geprüftem hörbarem Inhalt. Anforderungen verwenden feste sprachspezifische Modelle, Geschwindigkeit 0,9, Ähnlichkeit 0,85 und Stil 0; die Stabilität beträgt für Englisch 0,75 und für Japanisch 0,9. Startwerte bleiben je Anforderung dokumentiert; verworfene stille Ausgaben werden ohne Stimmenwechsel erneut erzeugt. Englisch verwendet verfasste IPA-Phonem-Tags. Das Inhaltsmanifest deklariert das mitgelieferte Medienverzeichnis und erhöht die Paketversion für die Installation.

Jede Ebene stellt das optionale Referenzbildfeld im Karteneditor und in der Detailansicht bereit. Vokabeln verwenden eigene, mit OpenAI erzeugte Illustrationen im Buntstift- und Aquarellstil; fremde Fotografien sind nicht enthalten. `data/library/assets/images/catalog.json` dokumentiert Erzeugung, Bildausschnitte, Kartenzuordnungen und Prüfsummen; `data/library/assets/images/LICENSE.md` beschreibt die Bildlizenz. Administratoren können weitere Referenzbilder über Cognis hochladen.

## Aufnahmeverzeichnisse

`data/audio/recordings.json` ist ein kompaktes Manifest mit Sprache, Stimme, Modell, gemeinsamen Verarbeitungseinstellungen, Gesamtzahlen und geprüften Inventarpfaden. Dateien unter `data/audio/inventories/` beschreiben getrennt Zeichen, Vokabeln, Transformationen, direkte Sätze und zusammengesetzte Ersatzaufnahmen. Jede Datei bleibt unter 800 Zeilen und enthält die genauen Anforderungen, Stimmenherkunft, Transformationspfade und Audio-Prüfsummen. Bootstrap prüft vor der Wiedergaberegistrierung jede Prüfsumme und Anzahl; Audiodaten und Suchpriorität bleiben unverändert.

## Explizite Katalognormalisierung und Satzkompositionen

Der Katalogleser erhält seine Normalisierungsregel vom Sprachanbieter: NFC für Englisch, NFKC für Japanisch. Gemeinsamer Suchcode verzweigt nicht mehr nach einer bestimmten Sprache. Die Inventare heißen `sentence-compositions`; jeder Eintrag beschreibt eine echte paketierte Aufnahme aus geordneten Einzelaufnahmen. Direkte neuronale Satzaufnahmen bleiben getrennt und haben Wiedergabevorrang.
