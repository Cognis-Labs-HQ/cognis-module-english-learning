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

Alle Buchstaben und Verbindungen enthalten eigene normalisierte JSON-Druckschriftvorlagen mit geordneten Strichen, Zeitstempeln und Zeichengruppen. Der Schreibanbieter liefert Kopien der Paketdaten ohne Netzabfragen. Diese einführenden Vorlagen schreiben keinen Handschriftstil vor. Die mitgelieferten Audiodateien werden unten beschrieben; externe TTS-URLs sind keine Paket-Assets.

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

## Ausspracheaufnahmen

Die Startaufnahmen werden mit der ElevenLabs-API erzeugt: `ELEVENLABS_EN_VOICE_ID` bestimmt die englische und `ELEVENLABS_JA_VOICE_ID` die japanische Stimme. Die Clips verwenden langsameres Sprechtempo, 128 kbit/s, 200 ms Vorlauf, 180 ms Nachlauf und begrenzte Spitzennormalisierung. Das Verzeichnis dokumentiert Modell und Verarbeitung; `data/audio/VOICE-LICENSE.txt` erläutert die geltenden ElevenLabs-Bedingungen.

Das Verzeichnis mit `node scripts/generate-audio.mjs` erneuern. Python, FFmpeg, `ELEVENLABS_API_KEY` und die Stimmenvariable der Sprache bereitstellen und `python3 scripts/synthesize-audio.py --cache <privates-cache-verzeichnis>` ausführen. Der Cache verwendet API-Antworten bei einer Fortsetzung erneut. Zugangsdaten und Stimmenkennungen werden nie im Paket gespeichert. Die Erzeugung ist ein Entwicklerwerkzeug; die Wiedergabe benötigt keine ElevenLabs-Zugangsdaten.

## Vertrag des Audioanbieters

Bootstrap verlangt `study:audio:provider` und registriert neben Wörterbuch- und Strichanbietern einen entfernbaren Audioanbieter. Dieser löst mitgelieferte Aufnahmen nach gesprochener Bezeichnung und bevorzugter Lesung auf, mit begrenzten Dateizugriffen und ausdrücklichen Fehlern bei fehlendem Audio. Beim Entfernen werden laufende Abrufe abgebrochen. Cognis prüft den Kartenzugriff, leitet gewählte Transformationstexte aus dem Schema ab und speichert Aufnahmen privat über Files, ohne verfasste Felder zu ändern. Der Ablauf `study:library:audio` führt Autorisierung, Validierung und Auflösung aus; `study:audio:fetch` prüft und liest die Bytes des Anbieters. Sätze behalten die geordnete Wiedergabe ihrer Bestandteile.

Audio wird erst abgerufen, wenn Lernende die Wiedergabe anfordern; das bloße Öffnen einer Karte löst keine Audioanfrage aus. Wiedergabefehler verwenden den lokalisierten Toast des Hosts und strukturierte Protokolle. Satzbestandteile behalten ihre gewählten Transformationsdeskriptoren; der authentifizierte Audioendpunkt leitet die gesprochene Form aus dem Schema ab, statt beliebigen Anzeigetext anzunehmen. Englische Buchstabenkombinationen werden aus ihren verfassten IPA-Phonemen synthetisiert, während Alphabetaufnahmen Buchstabennamen sprechen.

## Wörterbuchaudio und Host-Cache

Fehlt eine angeforderte Aussprache im Paket, ruft English Study das Wort über die English Dictionary API ab und lädt eine passende MP3 von deren Aussprache-Medienendpunkt. Eine bevorzugte IPA-Lesung muss übereinstimmen; eine andere Aussprache wird niemals ersatzweise verwendet. Nur HTTPS-Medien auf `api.dictionaryapi.dev` sind erlaubt. Weiterleitungen werden abgelehnt, Abfrage und Download teilen eine Frist, und beide Antworten haben Byte-Grenzen beim Streaming. Fehlende Aufnahmen bleiben ausdrückliche Fehler. Google-Sprachdienste werden nicht verwendet.

Cognis verwaltet den Aufnahme-Cache, nicht das Modul. Nach der Autorisierung verwendet sein privater Files-Cache erfolgreiche Aufnahmen über Karten und Neustarts hinweg wieder. Gleichzeitige Wiedergabeanfragen teilen Abruf und Speicherung. Schlüssel enthalten Anbieteridentität, Revision, Sprache, Rolle, Bezeichnung und Lesungen; geänderte Lesungen oder Anbieterrevisionen werden getrennt aufgelöst. Fehlgeschlagene Anfragen oder Schreibvorgänge können erneut versucht werden. Das Modul kontaktiert das Wörterbuch nur bei einer Wiedergabeanforderung ohne Cache-Treffer.

## Wiedergabe mit Pausen und manueller Ersatz

Satzkarten können ein optionales Audiofeld besitzen. Beim ersten Abspielen prüft Cognis den Zugriff auf jeden Bestandteil, wählt nur die erste Aussprachegruppe, wendet gewählte Transformationen an und erzeugt eine durchgehende WAV mit stillem Vorlauf und gezielten Wort-, Komma- und Satzpausen. Die Aufnahme wird privat zwischengespeichert; Bestandteildaten, Lesungen, Transformationen und Pausen bestimmen die Identität. Neue und vorhandene Karten werden bei Bedarf verarbeitet. Eine im normalen Editor hochgeladene Audiodatei ersetzt die generierte Wiedergabe sofort. Nach Entfernen dieser Datei erfolgt wieder die automatische Zusammensetzung. Anbieter liefern Wortaufnahmen; Cognis verwaltet Zusammensetzung und Cache.

## Abdeckung der Referenzverzeichnisse

Der japanische Referenzkatalog umfasst alle 13.108 Zeichen der mitgelieferten offiziellen KANJIDIC2-Daten. Der englische Katalog enthält alle 135.969 lexikalischen Einträge von Open English WordNet mit 127.311 normalisierten Schlüsseln. Es sind eigenständige, bedarfsgeladene Wörterbuchanbieter und keine 149.077 sofort importierten Startkarten. In der Study-Suche das Referenzwörterbuch wählen, um unterstützte Einträge über die normale Graphprüfung zu importieren. Fehlende Bedeutungen und nutzbare Lesungen bleiben unbekannt; Aussprache, Übersetzungen und Strichbilder werden nicht erfunden. Das Verzeichnis umfasst weder alle Unicode-Han-Zeichen noch jedes denkbare englische Wort.

Japanische Kanji-Lesungen werden nach häufigen JMdict-Belegen und verfügbaren Häufigkeitsmarkern einschließlich Okurigana-Formen geordnet. Gruppierte Verweise und Startaufnahmen folgen genau dieser Reihenfolge. Kanji-Audio verwendet immer die erste verfasste Aussprache. Vorhandene englische Wortkarten haben jeweils eine IPA-Lesung; Referenzeinträge bewahren die Quellreihenfolge innerhalb der bevorzugten britischen Varietät vor anderen Varietäten. Aussprachehäufigkeit hängt vom Kontext ab; die Quellen liefern keine allgemeingültige Rangfolge für jede Lesung.

Referenzdateien werden mit `python3 scripts/import-reference.py --source <source-file>` erstellt; Japanisch unterstützt `--priorities <reading-priorities.json>`. `data/reference/manifest.json` enthält Quellprüfsumme, Herkunft, Anzahlen und Datei-Hashes. Nur die Dateien angefragter Schlüssel werden geladen; Laufzeitergebnisse verwenden den Cognis-Cache.

## Vollständige Ausspracheaufnahmen der Referenzdaten

Japanisch enthält zusätzlich 2.913 neuronale Aufnahmen vollständiger Lesungen in begrenzten Dateien unter `data/audio/reference/`. Zusammen mit den Startaufnahmen decken sie die erste Lesung aller 12.356 Quellzeichen mit bekannter Lesung ab; für die übrigen 752 Zeichen werden keine Aussprachen erfunden. Der Index wählt die erste verfasste Lesung und prüft Dateigrenzen und Abbruch. Mit `python3 scripts/reference-audio.py plan --work <directory>` einen Plan erstellen, dessen Verzeichnisse mit dem Syntheseskript verarbeiten und mit `pack` die begrenzten Dateien schreiben.

Das japanische Sortierwerkzeug akzeptiert `--dictionary <JMdict.gz> --kanji-dictionary <KANJIDIC2.xml.gz> --output <priorities.json>` und optional `--content-root data/library/content`. Es bevorzugt häufige eigenständige Wortlesungen, ordnet weitere Lesungen nach häufigkeitsgewichteten Zuordnungen belegter Wörter und erhält geprüfte Einzelkarten-Vorgaben aus `data/audio/primary-readings.json`. Stimmhaftigkeit und Gemination werden auf kanonische Quelllesungen zurückgeführt. Kun-, On- und Namenslesungen bleiben verfügbar; allein die erste ausgewählte Lesung bestimmt Wiedergabe und Cache-Identität. Häufigkeitsmarker dienen der Reihenfolge und sind keine allgemeingültige Aussprachemessung.

Die automatische Zusammensetzung benötigt Aufnahmen für ihre gesprochenen Bestandteile. Fehlende Aufnahmen bleiben ausdrückliche Fehler und lassen sich über das normale Audio-Upload-Feld ergänzen. Nicht mit dem Paketalphabet verknüpfbare Schreibweisen behalten Quelltext und Bedeutungen ohne erfundene Schreibverweise.
