# Englisch lernen

Englisch lernen liefert einen versionierten Lerngraphen, englische Wörterbuchergänzungen, eigene Druckschrift-Vorlagen und sieben Startdecks. Cognis verwaltet die Lernoberfläche und sämtliche Nutzerdaten.

## Nutzungsbeispiele

- Erkunden Sie `/study/en/alphabet`, `/study/en/letter-combinations`, `/study/en/vocabulary` und `/study/en/sentences`.
- Suchen Sie mit dem freien Wörterbuch in der Study-Navigation. Ausgewählte Wortschatztreffer füllen den Karteneditor des Hosts.
- Unter `/study/flashcards` stehen Englisches Alphabet, Erste englische Wörter, Englische Verben im Alltag und Erste englische Sätze bereit. Cognis übernimmt Lernen, Favoriten und Freigaben.

## Technische Spezifikation

### Anbietervertrag und Lebenszyklus

Die dauerhafte Modul-UUID lautet `b1adc29f-9d54-5785-9bea-2ce76f1981e4`, die erforderliche Study-Gateway-UUID `338b9237-a2c8-5bcf-9437-bccc9abd9a27`. Bootstrap verlangt `ctx.capabilities.require("study:library:provider")` mit funktionsfähigen Methoden `ingestContentPack`, `registerLookupProvider` und `deleteContentPack`. Nach Registrierung der Schreib- und Wörterbuchanbieter wird `data/` eingelesen. Anschließend werden `study:language:en` und ein entfernbarer Beitrag zum Ablauf `bootstrap-platform` veröffentlicht. Der Deskriptor enthält `code`, `languageCode`, Modulversion, Paket und `starterDecks`.

Bei Deaktivierung oder fehlgeschlagenem Start werden Suchanbieter entfernt. Der Host verwaltet Routen, statische Verzeichnisse, Fähigkeiten und Ablaufbeiträge im Modulkontext. Das nur Administratoren erlaubte `DELETE /api/v1/modules/study-language-en/config` liefert 204 und bleibt bei Deaktivierung verfügbar; das Modul speichert keine Konfiguration. Bei Deinstallation behält `deleteContent: false` das Paket, während `true` die weiterhin verfügbare Anbietermethode `deleteContentPack` aufruft. Cognis übernimmt transaktionale Kaskadenlöschung und Benachrichtigungen. Fehler werden weitergegeben und sicher strukturiert protokolliert.

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

Englisch liefert sieben Startdecks. Großbuchstaben, Buchstabenverbindungen und Alltagsadjektive ergänzen die vier bestehenden Stapel. Stabile Schlüssel, übersetzte Namen und vollständige Alphabetreihen werden geprüft.

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

Das Inhaltspaket liegt in `data/library/`: Manifest, Schema und Inhaltsdateien bilden eine gemeinsame Import- und Löschgrenze. Startdecks bleiben in `data/starter-decks.json`. Laufzeitanbieter liegen in `api/dictionary/` und `api/strokes/`; deterministisches Laden und bytebegrenztes Dekodieren von Antworten liegen in `api/reuse/`. Übergreifende Inhalts- und Lebenszyklustests liegen in `tests/`, Anbieter-, Transport- und API-Tests in `api/tests/`. Das Manifest deklariert `api/routes/config/index.js` als `disabledApi`; dieser Einstiegspunkt registriert nur die administrative DELETE-Konfigurationsroute und aktiviert weder Inhalte noch Anbieter. Veröffentlichte Ablaufkennungen bleiben stabil.

## Wortarten und Pluralformen korrekt halten

Free Dictionary liefert getrennte Vorschläge je Wortart mit ausschließlich passenden Definitionen, Tags und kuratierten Flexionsmustern. Anfragen mit Apostroph oder Bindestrich werden abgelehnt, da der aktuelle Alphabetgraph diese Schreibweisen nicht abbildet. Antworten sind auf eine Million gestreamte Bytes begrenzt und werden bei Überschreitung sofort abgebrochen. Die veröffentlichte Ablaufkennung `study-language-en:bootstrap-registration` bleibt erhalten. Die Pluralbildung bleibt beim Singular `book`, nicht beim bereits pluralen `books`; `houses` verwendet `/haʊzɪz/`. Sieben lokalisierte Startdecks sind dokumentiert.

## Sprache und Aufnahmen

Das Modul registriert seine Sprache bei `study:audio:provider` und speichert eine optionale ElevenLabs-Stimmen-ID über `db:executor`. Leer lassen, um `voiceId` auszulassen und die Standardstimme zu verwenden. Zugangsdaten, Stimmensuche und Testaudio werden im separaten ElevenLabs-Modul konfiguriert. Sprachpakete enthalten keine erzeugten Aufnahmen oder HTTP-Implementierung des Anbieters.

Cognis prüft gespeicherte globale Karten vor dem Aufruf von `elevenlabs-tts:synthesis`. Beim Öffnen einer Karte wird kein Audio erzeugt. Administratoren können globale Karten im Editor neben dem Player neu vertonen. Private und Klassenkarten erlauben Uploads oder Mikrofonaufnahmen bis 5 MiB. Sätze behalten die kontinuierliche Zusammenstellung vorhandener Aufnahmen als Rückfall; dabei wird für private und Klassenkarten niemals Synthese ausgelöst. Explizite Aufnahmen haben Vorrang. Nur die erste verfasste Aussprache wird verwendet.

Die Inhaltspaketversion wird bei Inhaltsänderungen erhöht, um Konflikte mit früher eingelesenen Revisionen zu verhindern.

ElevenLabs ist als optionale Modulabhängigkeit deklariert. Bei der Installation kann es für Sprachsynthese ausgewählt werden; Study-Aktivierung sowie manuelle und zusammengesetzte Audioaufnahmen bleiben ohne dieses Modul verfügbar.

`elevenlabs-tts:synthesis` im eigenen Modulnamensraum veröffentlichen und die Privilegien-Markierung entfernen. English und Japanese Study lösen diese Fähigkeit über ctx und ihre bestehende optionale Modulabhängigkeit auf. Die Study-Brücke erhält den aktuellen Fähigkeitszugriff vom Aufrufer und bewahrt Deaktivierung, erneute Aktivierung und konfigurierte Stimmen.
