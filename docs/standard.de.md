# Cognis Englischmodul

Cognis English 1.3.2 liefert einen versionierten Lerngraphen, englische Wörterbuchergänzungen, eigene Druckschrift-Vorlagen und sieben Startdecks. Cognis verwaltet die Lernoberfläche und sämtliche Nutzerdaten.

## Nutzungsbeispiele

- Erkunden Sie `/study/explore/en/alphabet`, `/study/explore/en/letter-combinations`, `/study/explore/en/vocabulary` und `/study/explore/en/sentences`.
- Suchen Sie mit dem freien Wörterbuch in der Study-Navigation. Ausgewählte Wortschatztreffer füllen den Karteneditor des Hosts.
- Unter `/study/flashcards` stehen Englisches Alphabet, Erste englische Wörter, Englische Verben im Alltag und Erste englische Sätze bereit. Cognis übernimmt Lernen, Favoriten und Freigaben.

## Technische Spezifikation

### Anbietervertrag und Lebenszyklus

Die dauerhafte Modul-UUID lautet `b1adc29f-9d54-5785-9bea-2ce76f1981e4`, die erforderliche Study-Gateway-UUID `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap verlangt `ctx.capabilities.require("study:library:provider")` mit funktionsfähigen Methoden `ingestContentPack`, `registerLookupProvider` und `deleteContentPack`. Nach Registrierung der Schreib- und Wörterbuchanbieter wird `data/` eingelesen. Anschließend werden `study:language:en` und ein entfernbarer Beitrag zum Ablauf `bootstrap-platform` veröffentlicht. Der Deskriptor enthält `code`, `languageCode`, Modulversion, Paket und `starterDecks`.

Bei Deaktivierung oder fehlgeschlagenem Start werden Suchanbieter entfernt. Der Host verwaltet Routen, statische Verzeichnisse, Fähigkeiten und Ablaufbeiträge im Modulkontext. Das nur Administratoren erlaubte `DELETE /api/v1/modules/study-language-en/config` liefert 204 und bleibt bei Deaktivierung verfügbar; das Modul speichert keine Konfiguration. Bei Deinstallation behält `deleteContent: false` das Paket, während `true` die weiterhin verfügbare Anbietermethode `deleteContentPack` aufruft. Cognis übernimmt transaktionale Kaskadenlöschung und Benachrichtigungen. Fehler werden weitergegeben und sicher strukturiert protokolliert.

### Inhaltsgraph

Paket `english-core` 16.0.0, Schema `english` Revision 16 und Inhaltsrevision `2026-10-11.3` erhalten Namensraum und vorhandene Datensatzidentitäten. Die 635 Datensätze umfassen 52 Buchstaben, 17 Buchstabenverbindungen, 123 sichtbare Wörter, 135 verborgene Flexionsformen, 10 verborgene großgeschriebene Satzanfänge, 21 Grammatik-/Satzzeichenkarten, 45 Sätze und 232 verborgene Definitionen. Jede Definition enthält Englisch, Deutsch, Indonesisch und Japanisch. Definitionen verwenden das Host-Präfix `studyenglish:definitions`, Marktplatztexte `module.study_language_en.*`.

Geordnete Schreib- und Satzverweise führen zu echten Karten. Verborgene Flexionskarten liefern wörtliche Ziele für die Satzvalidierung; interaktive Formulare verwenden 37 deklarative Verb-, Kopula- und Adjektivparadigmen mit unregelmäßigen Formen und IPA. IPA bleibt Lautschrift und wird nicht mit sachfremden Buchstaben verknüpft. Großgeschriebene Satzanfänge erhalten den tatsächlichen Satztext. Nicht editierbare Grammatikpartikeln umfassen Verneinung, Präpositionen, Konjunktionen und Satzzeichen. Definitionsbeziehungen sind auf zehn Einträge begrenzt.

Formverträge deklarieren Schreibfelder, Buchstabenkarussells für Wörter, Wort-/Partikelkarussells für Sätze und ein Satzstrukturkarussell. Der Host übernimmt Validierung, UUID-Auflösung, Leerzeichen, Import, Grenzen und Benachrichtigungen. Das Alphabet behält sieben Spalten und Großbuchstaben als Kinder der Kleinbuchstaben. Nur atomare Buchstaben verwenden minimale Vorschauen.

### Schreibvorlagen und Medien

Alle Buchstaben und Verbindungen enthalten eigene normalisierte JSON-Druckschriftvorlagen mit geordneten Strichen, Zeitstempeln und Zeichengruppen. Der Schreibanbieter liefert Kopien der Paketdaten ohne Netzabfragen. Diese einführenden Vorlagen schreiben keinen Handschriftstil vor. Binärmedien werden nicht mitgeliefert. Audio ist optional: externe TTS-URLs sind keine gültigen Paket-Audioassets und wurden entfernt. Cognis kann eigene Aussprachefunktionen oder hochgeladene Audiodateien verwenden.

### Wörterbuchgrenze

Das freie Wörterbuch fragt ausschließlich englische Wörter über `https://api.dictionaryapi.dev/api/v2/entries/en/<word>` ab. Der versionierte, feldbezogene Anbieter unterstützt die Suche, aber weder Satzübersetzung noch Schreibvorlagen. Eingaben sind begrenzt, der Endpunkt ist fest, Weiterleitungen werden abgelehnt, Anfragen enden nach 15 Sekunden und Antworten werden validiert und begrenzt. Doppelte Lesungen und Bedeutungen werden bei erhaltener Quellenreihenfolge entfernt; höchstens zehn Definitionen und Lesungen werden geliefert. Quellen und Lizenzangaben verbleiben im verborgenen Feld `dictionary_data`. Externe Bedeutungen bleiben Englisch, bis die Host-Lokalisierung weitere Sprachen ergänzt. Einzelheiten stehen in der Wörterbuchdokumentation.

Paketkarten behalten ihre kuratierte primäre IPA und Paradigmen-Tags. Neue reine Buchstabenschreibungen verknüpfen vorhandene Buchstaben; unbekannte Verben erhalten keine geratenen Formen. Bei 404 wird ein echter lokaler Treffer verwendet, andere fehlerhafte Antworten erzeugen einen sicheren Fehler. Cognis Core verwaltet dauerhafte Suchcaches, Prüfungen nach einer Stunde und die Veröffentlichung geänderter Ergebnisse nach zwölf Stunden. Das Modul hält nur unveränderliche Inhaltsindizes, keine Antwortcaches oder Zeitgeber.

### Paketierung und Prüfung

Privilegien erlauben den Host-Sprachnamensraum, umgehen aber keine Study-Berechtigungen. Laufzeitimporte bleiben im Repository, Tests verwenden lokale öffentliche Vertragsattrappen. Alle vier Sprachen und Dokumentationsvarianten werden mitgeliefert. Eigene Inhalte und Vorlagen stehen unter AGPL-3.0-or-later; externe Wörterbuchangaben bleiben getrennt.

Führen Sie `npm install`, `npm run manifest:hashes`, `npm test`, `npm run lint`, `npm run check:manifest` und `git diff --check` aus. Erzeugen Sie die Manifest-Hashes nach den letzten Änderungen neu. Änderungsprotokolle gehören nicht zum Paketinhalt.

## Erweiterte Startdecks

Englisch liefert sieben Startdecks. Großbuchstaben, Buchstabenverbindungen und Alltagsadjektive ergänzen die vier bestehenden Stapel. Stabile Schlüssel, übersetzte Namen und vollständige Alphabetreihen werden geprüft.

Schemarevision 16 entfernt den doppelten Adjektivfilter. Modul 1.3.2 und Inhaltspaket 16.0.0 behalten Datensatzidentitäten. Die Anleitung verankert ctx als Anwendungsrückgrat; Cognis besitzt Aktionsabläufe, Nutzerdaten und Wörterbuchcaches.

## Gemeinsame Sprachseiten

Die Sprachauswahl öffnet Cognis-eigene Erkunden-Seiten auch ohne Unterseiten des Inhaltsanbieters. Ein Sprachwechsel behält die entsprechende Schrift-, Wortschatz- oder Satzrolle. Lernkarten, Bibliothek und Anfragen behalten ihren gemeinsamen Seitenkontext. Englisch deklariert Alphabet, Buchstabenverbindungen, Wortschatz und Sätze über eigene Pfadnamen. Abgebrochene Favoritenabfragen beenden die Einbindung ohne irreführende Fehlermeldung.

## Alphabet, Grammatik und Substantivzahl

Schema 17 und Inhaltspaket 17.0.0 trennen Buchstabennamen von optionalen IPA-Angaben in `letter_sounds` und enthalten keine leeren Füllzellen. Satzzeichen erhalten ein eigenes Karussell. Zweiundzwanzig zusätzliche Satz- und Diskursstrukturen besitzen lokalisierte Bedeutungen und Lautschriften. Dreiunddreißig geprüfte zählbare Substantivgruppen aktivieren Cognis-Pluralformen über `optInTag: plural`, einschließlich geänderter Schreibweisen und Aussprachen. Stoffnamen bleiben ausgenommen. Formen entstehen aus Basiskarten statt doppelten Einträgen. Modulversion: 1.3.3.
