# Aktualisierungen für Englischlernen

**Feature-Zweig:** feature-replace-library-with-new-capability

## Capability-gestützte Lerninhalte

Das Modul installiert sein deklaratives englisches Inhaltspaket jetzt atomar über die vom Host bereitgestellte Capability `study:library`. Die doppelte Bibliotheks-API samt Speicher, Seite und Navigationseintrag wurde zugunsten der schemagesteuerten Hostdarstellung entfernt.

## Englische Flaggengrafik

Das Modulsymbol verwendet nun eine skalierbare SVG-Darstellung der englischen Flagge anstelle des allgemeinen Cognis-Buchstabensymbols.

## Ausgewählte Sprache beibehalten

Die Sprach-Capability liefert nun `languageCode: "en"` im kanonischen Study-Sprachdeskriptor. Cognis PR #215 speichert diesen Code auf der erzeugten Schaltfläche der Study-Unternavigation und übergibt die Auswahl im Routerzustand, sodass Modul-URLs ohne Sprachabfrage auskommen.

## Vertrag für versionierte Sprachpakete

Das Englischpaket besitzt nun den Namensraum `en`, veröffentlicht lokalisierte Schemametadaten und semantische Ebenenrollen, verwendet eine neue unveränderliche Schema- und Paketversion und gibt seine validierte Paketidentität gemäß Cognis PR #214 über die Sprach-Capability bekannt.

## Reines Study-Datenpaket

Die moduleigenen Alphabet-, Klassenzimmer-, Navigations-, CLI-, API- und Stiloberflächen wurden entfernt. Cognis erkennt und rendert das Englischpaket nun generisch anhand der veröffentlichten unveränderlichen Paketbeschreibung, des semantischen Schemas und der lokalisierten Metadaten. Statisch registriert bleibt nur das Sprachpaket.

## Auflösbare Wörterbuchdefinitionen

Das Schema deklariert nun den Bibliotheksvertrag für lokalisierte Definitionen und eine ausdrückliche erforderliche Beziehung vom Alphabet zur Definition. Jeder enthaltene Buchstabe verweist auf eine Definition, deren Zeichenkettenschlüssel in jedem Sprachpaket des Moduls auflösbar ist; der Datensatz enthält denselben lokalisierten Text.

## Aktuelles Bibliotheksschema

Das Paket folgt dem neuesten Schema der Study-Bibliothek: Alphabetdatensätze enthalten Aussprachelisten und externes Audio, Vokabeln sind mit geordneten Schreibweisen und lokalisierten Definitionen verknüpft, und Satzfolgen unterscheiden lexikalische Wörter von grammatischen Partikeln. Es werden keine binären Medien mitgeliefert.

## Aktuelle Host-Kompatibilität

Das Paket verwendet nun Schema- und Inhaltspaketversion 14. Nur die Alphabet-Zeichenebene setzt `minimal: true`; Zusammensetzungen, Definitionen, Wörter, Partikeln und Sätze behalten bewusst Standardkarten. Das Kleinbuchstabenraster löst stabile numerische Anzeige-IDs auf, Großbuchstabenalternativen deklarieren ausdrücklich sowohl Variantenidentität als auch räumliche Elternschaft, und Wort-, Partikel- sowie Satzebenen verwenden erforderliche lokalisierte Anzeigedefinitionen. Digraphenzusammensetzungen bleiben von Definitionen getrennt; erforderliche Metadatenvorgaben und stabile Identitäten bewahren das aktuelle Hostverhalten.

## Isolierte Browseroberfläche

Das Modul stellt im statischen Modulnamensraum nur noch sein Locale-Bündel bereit und hängt sich nicht mehr in den globalen Plattform-Bootstrap-Flow ein. Datenimport und öffentliche Sprach-Capability bleiben unverändert, sodass dieses reine Datenpaket weder an der Hostnavigation und Zusammensetzung des Benutzermenüs teilnimmt noch diese stören kann.

## Vollständige Satzzusammensetzung

Satzbeschriftungen werden nun vollständig aus lückenlosen geordneten Verweisen auf lexikalische Einheiten und Partikeln aufgelöst und entsprechen damit der neuesten Cognis-Inhaltspaketvalidierung. Der abschließende Punkt wird als Satzzeichenpartikel mit eigener lokalisierter Definition gespeichert, sodass der enthaltene Satz keinen unverknüpften Text mehr enthält.

## Lesbares Alphabet und erweiterte Laute

Das Alphabet wird nun als ausgeglichene Tafel mit sieben Spalten und vier Zeilen samt ausdrücklichen Leerfeldern am Ende dargestellt. Jeder Groß- und Kleinbuchstabendatensatz enthält den Buchstabennamen und häufige IPA-Phoneme; `ph`, `wh`, `ng` und `ck` ergänzen die vorhandenen Digraphen. Variantenbeziehungen verwenden nun den aktuellen Vertrag des Hosts für dynamische Platzierung innerhalb der Grenzen anstelle des entfernten Richtungshinweises, damit keine veralteten Darstellungsdaten zum gemeldeten Laufzeitfehler der Bibliothek beitragen.

## Ausdrückliche räumliche Kindbeziehungen

Schemaversion 14 trennt entsprechend dem neuesten Hostvertrag die Identität als Alternativform von der visuellen Hierarchie. Die Beziehung vom Groß- zum Kleinbuchstaben deklariert nun sowohl `variant: true` als auch `child: true`: Ersteres klassifiziert den Großbuchstabendatensatz als alternative Schreibweise, Letzteres erlaubt allein das Aufklappen der Karte um ihr tatsächliches Kleinbuchstaben-Elternelement.

## Ausdrückliches Privileg für den Hostnamensraum

Cognis PR #220 beschränkt nicht privilegierte Module auf Registrierungen unter ihrer eigenen Modul-ID. Da dieses Sprachmodul die vom Host definierte Capability `study:language:en` veröffentlichen muss, setzt sein Manifest nun ausdrücklich `privileged: true`. Die Anforderung ist eng begrenzt dokumentiert: Das Laufzeitverhalten bleibt auf den Inhaltspaketimport, die Sprachbeschreibung und moduleigene Locale-Ressourcen beschränkt; Hostrouten oder sicherheitssensible Flow-Hooks werden nicht verwendet.

## Kontextbezogene Vokabeldefinitionen

Vokabeldatensätze demonstrieren nun die Definitionspriorität aus PR #196 anhand des einbuchstabigen Worts `a`. Seine lokalisierte Bedeutung beschreibt den unbestimmten Artikel und unterscheidet sich bewusst von der Buchstabendefinition der Alphabet-Quellkarte. Jede enthaltene Vokabelkarte behält ihre eigene Bedeutung in vier Sprachen, wenn der lexikalische Begriff abweicht; der Host darf eine Quelldefinition nur verwenden, wenn ein lexikalischer Eintrag keine eigene bereitstellt, und verwirft diesen Rückfall bei nicht zusammenhängender Navigation.

## Maßgeblicher Vertrag für externe Pakete

Schemaversion 14 übernimmt die Grenze für externe Pakete aus Cognis PR #226. Das Inhaltsmanifest kennzeichnet Anbieterdatensätze als geschützt und enthält validierte JSON-kompatible Katalogmetadaten; die Schemametadaten veröffentlichen ebenfalls eine stabile Anbieteridentität. Der Bootstrap löst nun die während des Lebenszyklus verfügbare Capability `study:library` auf, verlangt `inspectContentPack` und `ingestContentPack`, führt zuerst die nicht verändernde Prüfung durch und fordert anschließend den atomaren Import an. Alle Felder verwenden weiterhin validierte eingebaute Typen, sodass keine benutzerdefinierte Validierungsausnahme nötig ist.

## Ausdrückliche Autoren- und Beziehungssemantik

Die maßgebliche Version 14.1.0 entwickelt die Schemakompatibilitätsversion 14 am selben Ort weiter und folgt damit der Paketmigration der japanischen Referenzimplementierung. Jeder Datensatz trägt nun eine anbieterneutrale Inhaltsklasse; Definitionen sind ausgeblendet, Sätze zusammengesetzt und Partikeln ausdrücklich nicht bearbeitbar. Echte Schreib- und geordnete Sequenzbeziehungen deklarieren `composition`, während Definitions- und Variantenverknüpfungen keine Resolverrolle besitzen, sodass die Rückwärtsnavigation vereinheitlicht bleibt, ohne zusammengesetzte Titel zu verfälschen. Feldschemata bieten nun lokalisierte Autorensteuerelemente und einen auf Englisch begrenzten Audiodateivertrag, ohne einen moduleigenen Editor zu aktivieren.

## Verfügbarkeit der Capability beim Aktivieren

Das Modul folgt nun der funktionierenden japanischen Referenz und deklariert sowie bezieht die während des Lebenszyklus verfügbare Capability `study:library`. Die separat veröffentlichte Oberfläche `study:library:provider` ist bei der Abhängigkeitsvorprüfung externer Module nicht garantiert verfügbar; dadurch schlug die Aktivierung bereits vor dem Bootstrap mit HTTP 409 fehl. Schreibgeschützte Prüfung und atomarer Import bleiben über den internen Bibliotheksdienst geordnet, sodass das Validierungsverhalten unverändert bleibt und die Aktivierung nicht mehr von einer spät veröffentlichten Capability abhängt.

## Dokumentation und Verträge

Das Manifest verlangt `study:library`, folgt dem aktuellen hosteigenen Vertrag für atomare Aktivierung und veröffentlicht Modulversion 1.2.37.

## Changelog-Struktur vereinheitlicht

Die lokalisierte Cognis-Konvention für ein Changelog pro Pull Request sowie automatische Prüfungen für Sprachparität, Eintragsdetails, Zweigmetadaten und Commit-Herkunft wurden ergänzt.

## KI-Anweisungen synchronisiert

Repository-lokale Copilot-Richtlinien wurden ergänzt und mit den modulweiten Agentenanweisungen abgeglichen, damit KI-unterstützte Beiträge denselben Regeln folgen.

## Vorbereitete Ausspracheaufnahmen ausliefern

Gesprochene Seed-Karten enthalten deduplizierte, offline erzeugte MP3-Dateien und Stimmnachweise. Sätze behalten die geordnete Wiedergabe ihrer Bestandteile.

## Bereichsgebundenen Audioabruf registrieren

Beide Study-Module verwenden denselben entfernbaren Audioanbieter-Vertrag und rufen mitgelieferte Aufnahmen durch begrenzte lokale Dateizugriffe ab. Autorisierung, Cache-Richtlinien und zusammengesetzte Wiedergabe gehören dem Host.

## Paketziele und Entwicklerhinweise

Ausgabe 1.3.8 — Die Paketprüfung stellt sicher, dass Einstiegspunkte, Icons, Banner und Screenshots reguläre Dateien innerhalb des Checkouts sind, auch nach Pfadauflösung. Die Dokumentation beschreibt öffentliche Verträge und verweist für Veröffentlichungsmetadaten auf Manifeste; Änderungsprotokolle behalten die Herkunft der Veröffentlichung.

## Erweiterter Lerngraph

635 validierte Datensätze umfassen 123 sichtbare Wörter, 45 Sätze, Schreibvorlagen, 37 genaue Flexionsparadigmen und vier Startdecks. Namensraum und Quell-IDs bleiben erhalten; verborgene Formen und großgeschriebene Satzanfänge bilden Abhängigkeiten vollständig ab.

## Aktueller Cognis-Anbietervertrag

Der eng begrenzte Anbietervertrag ist Pflicht. Registrierungen werden bei Fehlern oder Deaktivierung entfernt; gewünschte Inhaltslöschung erfolgt über den Host. Abläufe, Caches, Berechtigungen, Lernkarten und Freigaben bleiben beim Host.

## Such- und Schreibergänzungen

Das freie Wörterbuch liefert begrenzte Bedeutungen und IPA, erhält Quellenangaben und verknüpft Buchstaben. Eigene JSON-Vorlagen decken 52 Buchstaben und 17 Verbindungen ohne Binärassets ab. Ungültige Paket-TTS-URLs wurden entfernt; Audio ist optional.

## Prüfung und Dokumentation

Eigenständige Verhaltenstests prüfen Lebenszyklus, Wörterbuchfehler und Grenzen, Graphen, Formen und Decks. Lesbarkeitsprüfungen erhalten Leerzeilen. Standards, Wörterbuchanleitungen, README-Dateien und Texte sind in vier Sprachen abgestimmt. Modul 1.3.0 liefert Paket 15.0.0/Schema 15.

## Erweiterte Startdecks

Englisch liefert sieben Startdecks. Großbuchstaben, Buchstabenverbindungen und Alltagsadjektive ergänzen die vier bestehenden Stapel. Stabile Schlüssel, übersetzte Namen und vollständige Alphabetreihen werden geprüft.

## Inhalte und Verträge

Schemarevision 16 entfernt den doppelten Adjektivfilter. Modul 1.3.1 und Inhaltspaket 16.0.0 behalten Datensatzidentitäten. Die Anleitung verankert ctx als Anwendungsrückgrat; Cognis besitzt Aktionsabläufe, Nutzerdaten und Wörterbuchcaches.

## Gemeinsame Sprachseiten

Die Sprachauswahl öffnet Cognis-eigene Erkunden-Seiten auch ohne Unterseiten des Inhaltsanbieters. Ein Sprachwechsel behält die entsprechende Schrift-, Wortschatz- oder Satzrolle. Lernkarten, Bibliothek und Anfragen behalten ihren gemeinsamen Seitenkontext. Englisch deklariert Alphabet, Buchstabenverbindungen, Wortschatz und Sätze über eigene Pfadnamen. Abgebrochene Favoritenabfragen beenden die Einbindung ohne irreführende Fehlermeldung.

## Alphabet, Grammatik und Substantivzahl

Schema 17 und Inhaltspaket 17.0.0 trennen Buchstabennamen von optionalen IPA-Angaben in `letter_sounds` und enthalten keine leeren Füllzellen. Satzzeichen erhalten ein eigenes Karussell. Zweiundzwanzig zusätzliche Satz- und Diskursstrukturen besitzen lokalisierte Bedeutungen und Lautschriften. Dreiunddreißig geprüfte zählbare Substantivgruppen aktivieren Cognis-Pluralformen über `optInTag: plural`, einschließlich geänderter Schreibweisen und Aussprachen. Stoffnamen bleiben ausgenommen. Formen entstehen aus Basiskarten statt doppelten Einträgen. Modulversion: 1.3.3.

## Beitragsstandard der Vorlage

AGENTS.md mit der externen Modulvorlage synchronisieren und Domänenregeln beibehalten. Den kanonischen Release-Verzeichnispfad übernehmen; historische Inhalte und dauerhafte Modulidentität erhalten.

## Standardstruktur und eigene Integration

Vorlagenrichtlinien, domänenspezifische Routenpfade, übersetzte Integrationsdokumentation, ausführbare Strukturprüfungen und endgültige Paket-Hashes synchronisieren. Öffentliche URLs und Modulidentität bleiben erhalten. Browserbeiträge folgen den Lebenszyklusverträgen des zuständigen Hosts.

## Lernmarke und Bildmaterial

Das Modul heißt jetzt Englisch lernen und erhält ein passendes PNG-Icon und Banner. Wichtige Bildinhalte bleiben im sicheren mittigen Marketplace-Bereich. Sichtbarer Name und Integrationsdokumentation werden übersetzt und aktualisiert; Modul-UUIDs, Sprachcodes, Paketnamen und Inhaltsidentitäten bleiben erhalten.

## Einheitliche Marketplace-Texte

Verwenden Sie kurze Aktionszusammenfassungen und konkrete Funktionsbeschreibungen in den Marketplace-Metadaten mit inhaltlich abgestimmten Übersetzungen.

## Sätze aus mehreren Wörtern verlangen

Satzkarten benötigen im Library-Schema mindestens zwei Wortverweise. Die Begrüßung lautet „Hello, my friend!“ und enthält passende Zusammensetzungsverweise und lokalisierte Definitionen. IPA bleibt das präzise Ausspracheformat; die Library des Hosts stellt die Zeichen mit gut lesbarer Typografie dar.

## Sprachschlüssel ohne wörtliche Ersatztexte verlangen

Die KI-Anweisungen verbieten fest kodierte englische Benutzertexte in allen Abläufen. Fehlende Werte der bevorzugten Sprache dürfen dieselben Schlüssel der englischen XML-Ressourcen verwenden. Fehlende oder leere englische Ersatzwerte müssen ausdrücklich einen Fehler auslösen, statt englische Literale, rohe Schlüssel oder leeren Text anzuzeigen. Fehler wegen fehlender Übersetzungen dürfen nicht unterdrückt werden.

## Darstellbare Wörterbuchbedeutungen liefern

Free Dictionary liefert getrennte Vorschläge je Wortart mit ausschließlich passenden Definitionen, Tags und kuratierten Flexionsmustern. Anfragen mit Apostroph oder Bindestrich werden abgelehnt, da der aktuelle Alphabetgraph diese Schreibweisen nicht abbildet.

## Gestreamte Wörterbuchantworten begrenzen

Antworten sind auf eine Million gestreamte Bytes begrenzt und werden bei Überschreitung sofort abgebrochen.

## Veröffentlichte Bootstrap-Stufe erhalten

Die veröffentlichte Ablaufkennung `study-language-en:bootstrap-registration` bleibt erhalten.

## Pluralumwandlungen korrigieren

Die Pluralbildung bleibt beim Singular `book`, nicht beim bereits pluralen `books`; `houses` verwendet `/haʊzɪz/`.

## Sieben Startdecks dokumentieren

Sieben lokalisierte Startdecks sind dokumentiert.

## Aufbau der Study-Module

Das Inhaltspaket liegt in `data/library/`: Manifest, Schema und Inhaltsdateien bilden eine gemeinsame Import- und Löschgrenze. Startdecks bleiben in `data/starter-decks.json`. Laufzeitanbieter liegen in `api/dictionary/` und `api/strokes/`; deterministisches Laden und bytebegrenztes Dekodieren von Antworten liegen in `api/reuse/`. Übergreifende Inhalts- und Lebenszyklustests liegen in `tests/`, Anbieter-, Transport- und API-Tests in `api/tests/`. Das Manifest deklariert `api/routes/config/index.js` als `disabledApi`; dieser Einstiegspunkt registriert nur die administrative DELETE-Konfigurationsroute und aktiviert weder Inhalte noch Anbieter. Veröffentlichte Ablaufkennungen bleiben stabil.

## Wörterbuchaudio und Host-Cache

Fehlt eine angeforderte Aussprache im Paket, ruft English Study das Wort über die English Dictionary API ab und lädt eine passende MP3 von deren Aussprache-Medienendpunkt. Eine bevorzugte IPA-Lesung muss übereinstimmen; eine andere Aussprache wird niemals ersatzweise verwendet. Nur HTTPS-Medien auf `api.dictionaryapi.dev` sind erlaubt. Weiterleitungen werden abgelehnt, Abfrage und Download teilen eine Frist, und beide Antworten haben Byte-Grenzen beim Streaming. Fehlende Aufnahmen bleiben ausdrückliche Fehler. Google-Sprachdienste werden nicht verwendet.

Cognis verwaltet den Aufnahme-Cache, nicht das Modul. Nach der Autorisierung verwendet sein privater Files-Cache erfolgreiche Aufnahmen über Karten und Neustarts hinweg wieder. Gleichzeitige Wiedergabeanfragen teilen Abruf und Speicherung. Schlüssel enthalten Anbieteridentität, Revision, Sprache, Rolle, Bezeichnung und Lesungen; geänderte Lesungen oder Anbieterrevisionen werden getrennt aufgelöst. Fehlgeschlagene Anfragen oder Schreibvorgänge können erneut versucht werden. Das Modul kontaktiert das Wörterbuch nur bei einer Wiedergabeanforderung ohne Cache-Treffer.

## Wiedergabe mit Pausen und manueller Ersatz

Die Startaufnahmen verwenden das offline betriebene mehrsprachige neuronale Kokoro-Modell mit `bf_emma` für Englisch und `jf_alpha` für Japanisch. Die Clips haben 128 kbit/s, 200 ms Vorlauf, 180 ms Nachlauf, begrenzte Spitzennormalisierung und langsameres Sprechtempo. Modellherkunft und Apache-Lizenz stehen in `data/audio/VOICE-LICENSE.txt`; das Aufnahmeverzeichnis dokumentiert Stimme und Verarbeitung.

Satzkarten können ein optionales Audiofeld besitzen. Beim ersten Abspielen prüft Cognis den Zugriff auf jeden Bestandteil, wählt nur die erste Aussprachegruppe, wendet gewählte Transformationen an und erzeugt eine durchgehende WAV mit stillem Vorlauf und gezielten Wort-, Komma- und Satzpausen. Die Aufnahme wird privat zwischengespeichert; Bestandteildaten, Lesungen, Transformationen und Pausen bestimmen die Identität. Neue und vorhandene Karten werden bei Bedarf verarbeitet. Eine im normalen Editor hochgeladene Audiodatei ersetzt die generierte Wiedergabe sofort. Nach Entfernen dieser Datei erfolgt wieder die automatische Zusammensetzung. Anbieter liefern Wortaufnahmen; Cognis verwaltet Zusammensetzung und Cache.

## Abdeckung der Referenzverzeichnisse

Der japanische Referenzkatalog umfasst alle 13.108 Zeichen der mitgelieferten offiziellen KANJIDIC2-Daten. Der englische Katalog enthält alle 135.969 lexikalischen Einträge von Open English WordNet mit 127.311 normalisierten Schlüsseln. Es sind eigenständige, bedarfsgeladene Wörterbuchanbieter und keine 149.077 sofort importierten Startkarten. In der Study-Suche das Referenzwörterbuch wählen, um unterstützte Einträge über die normale Graphprüfung zu importieren. Fehlende Bedeutungen und nutzbare Lesungen bleiben unbekannt; Aussprache, Übersetzungen und Strichbilder werden nicht erfunden. Das Verzeichnis umfasst weder alle Unicode-Han-Zeichen noch jedes denkbare englische Wort.

Japanische Kanji-Lesungen werden nach häufigen JMdict-Belegen und verfügbaren Häufigkeitsmarkern einschließlich Okurigana-Formen geordnet. Gruppierte Verweise und Startaufnahmen folgen genau dieser Reihenfolge. Kanji-Audio verwendet immer die erste verfasste Aussprache. Vorhandene englische Wortkarten haben jeweils eine IPA-Lesung; Referenzeinträge bewahren die Quellreihenfolge innerhalb der bevorzugten britischen Varietät vor anderen Varietäten. Aussprachehäufigkeit hängt vom Kontext ab; die Quellen liefern keine allgemeingültige Rangfolge für jede Lesung.

## Vollständige Ausspracheaufnahmen der Referenzdaten

Japanisch enthält zusätzlich 2.913 neuronale Aufnahmen vollständiger Lesungen in begrenzten Dateien unter `data/audio/reference/`. Zusammen mit den Startaufnahmen decken sie die erste Lesung aller 12.356 Quellzeichen mit bekannter Lesung ab; für die übrigen 752 Zeichen werden keine Aussprachen erfunden. Der Index wählt die erste verfasste Lesung und prüft Dateigrenzen und Abbruch. Mit `python3 scripts/reference-audio.py plan --work <directory>` einen Plan erstellen, dessen Verzeichnisse mit dem Syntheseskript verarbeiten und mit `pack` die begrenzten Dateien schreiben.

Das japanische Sortierwerkzeug akzeptiert `--dictionary <JMdict.gz> --kanji-dictionary <KANJIDIC2.xml.gz> --output <priorities.json>` und optional `--content-root data/library/content`. Es bevorzugt häufige eigenständige Wortlesungen, ordnet weitere Lesungen nach häufigkeitsgewichteten Zuordnungen belegter Wörter und erhält geprüfte Einzelkarten-Vorgaben aus `data/audio/primary-readings.json`. Stimmhaftigkeit und Gemination werden auf kanonische Quelllesungen zurückgeführt. Kun-, On- und Namenslesungen bleiben verfügbar; allein die erste ausgewählte Lesung bestimmt Wiedergabe und Cache-Identität. Häufigkeitsmarker dienen der Reihenfolge und sind keine allgemeingültige Aussprachemessung.

## Optionale Sprachintegration

ElevenLabs ist als optionale Modulabhängigkeit deklariert. Bei der Installation kann es für Sprachsynthese ausgewählt werden; Study-Aktivierung sowie manuelle und zusammengesetzte Audioaufnahmen bleiben ohne dieses Modul verfügbar.

## Sprache ohne Sonderrechte bereitstellen

`elevenlabs-tts:synthesis` im eigenen Modulnamensraum veröffentlichen und die Privilegien-Markierung entfernen. English und Japanese Study lösen diese Fähigkeit über ctx und ihre bestehende optionale Modulabhängigkeit auf. Die Study-Brücke erhält den aktuellen Fähigkeitszugriff vom Aufrufer und bewahrt Deaktivierung, erneute Aktivierung und konfigurierte Stimmen.

## Sprache optional halten

Die veröffentlichte Fähigkeit meldet ihre aktuelle Bereitschaft über `configured`. Study aktiviert automatische Sprache erst nach dem Speichern von API-Schlüssel und Standardstimme. Fehlt ElevenLabs oder ist es deaktiviert oder unkonfiguriert, gelingt die Sprachregistrierung weiterhin. Hochgeladene Aufnahmen und die Zusammenstellung vorhandener Audios bleiben verfügbar; Synthese wird nicht angefordert.

## Installation ohne gebündelte Medien reparieren

Die ungenutzte Medienverzeichnis-Deklaration aus dem reinen Datenpaket entfernen und dessen Version erhöhen. Deklarierte Paketpfade anhand einer temporären Installation ausschließlich aus verpackten Dateien prüfen, damit die Aktivierung nicht von leeren lokalen Verzeichnissen abhängt.

## Konsistente Sprachaufnahmen

Festgelegte Sprachaufnahmen werden für jede vertonte kuratierte Karte und jede erreichbare Plural-, Verb- oder Adverbform mitgeliefert. Satz-WAV-Dateien verwenden exakt die geordneten PCM-Daten der Bestandteile einschließlich ausgewählter Transformationen. Stimme, Modell, Anforderungen, Prüfsummen und Stilleprüfungen sind dokumentiert; Zugangsdaten werden nicht mitgeliefert.

## Gespeicherte Lernsteuerung

Der mitgelieferte Referenzkatalog heißt Open English WordNet. Für alle 32 mitgelieferten Substantiv-Pluralformen gibt es eigene Aufnahmen. Die Wiedergabe der gewählten Form löst jede Variante über Bezeichnung und bevorzugte Lesung auf; fehlende Formen werden niemals durch die Basisaufnahme ersetzt.

## Referenzbilder

Optionale Bildlistenfelder, private Bild-Uploads und Detailgalerien ergänzen. Beide Sprachmodule enthalten ein lizenziertes Referenzfoto und bieten das Feld auf jeder Ebene an.

## Direkte Satzaufnahmen

Mitgelieferte Sätze verwenden direkt erzeugte vollständige Satzaufnahmen vor zusammengesetztem Audio. Neue oder nicht aufgezeichnete Sätze nutzen die Zusammenstellung des Hosts mit exakt geordneten PCM-Bestandteilen und ausgewählten Transformationen; fehlende Varianten werden niemals durch die Grundform ersetzt. Die Aufnahmen decken das kuratierte Paket ab, nicht jeden Wörterbucheintrag oder möglichen selbst verfassten Satz. Enthält 45 neu erzeugte Satzaufnahmen mit Stimme `gJx1vCzNCD1EQHT212Ls`. Japanisch erzeugt 124 Kana-Clips neu und sendet Kana/Kanji statt Romaji. Anforderungen behalten dokumentierte stabile Modelle, Geschwindigkeit, Ähnlichkeit, Startwerte und Stimmnachweise.

## Referenzfotos für Vokabeln

63 kuratierte Vokabelkarten enthalten jetzt mitgelieferte Referenzfotos (55 Bilddateien). Alle konkreten Substantive sowie bildlich klare Handlungen und Eigenschaften sind abgedeckt; Grammatik, Pronomen und andere abstrakte Begriffe erhalten keine irreführenden Füllbilder. Japanische Homophone wie 花/鼻, 橋/箸, 雨/飴 und 紙/髪/神 verwenden unterschiedliche Referenzen. Die Bilder werden lokal in der vorhandenen Detailgalerie und Vollbildvorschau geladen. Quelltitel, Urheber, individuelle Creative-Commons- beziehungsweise Gemeinfreiheitslizenzen und Prüfsummen stehen im [Bildkatalog](../../data/library/assets/images/catalog.json) und in den [Bildnachweisen](../../data/library/assets/images/LICENSE.md). Eigene Kartenbilder bleiben beim erneuten Laden der Anbieter durch den Host geschützt.

## Vokabelillustrationen

Jede mitgelieferte Vokabelkarte besitzt jetzt eine eigene generierte Illustration im Buntstift- und Aquarellstil (160 Karten). Konkrete Gegenstände, Handlungen und Kontextbilder für abstrakte Begriffe erscheinen in der vorhandenen Kartendetailgalerie und Bildvorschau. Die bisherigen Quellfotos wurden ersetzt. Der [Bildkatalog](../../data/library/assets/images/catalog.json) dokumentiert Erzeugungsquelle, Stil, Bildausschnitte, Prüfsummen und Kartenzuordnungen; die [Bildlizenz](../../data/library/assets/images/LICENSE.md) beschreibt die mitgelieferten Illustrationen. Bilder werden lokal geladen, eigene Benutzerbilder bleiben bei Anbieter-Neuladevorgängen durch den Host erhalten.

## Haushaltsvokabular

Fünfzehn Alltagsnomen ergänzen Möbel, Kleidung, Gegenstände und Lebensmittel mit Bedeutungen in vier Sprachen, Ausspracheverknüpfungen, eigenen Aufnahmen und einem Stapel für Alltagsgegenstände. Zählbare englische Nomen enthalten aufgenommene Pluraltransformationen, einschließlich des unveränderten Plurals fish; rice bleibt ein Stoffname. Japanische Anfängerschreibweisen verknüpfen vollständige Lesungen mit einzelnen Kana, einschließlich des Langvokalzeichens ー in テーブル und コート.

## Lebensmittel und Körperteile

32 illustrierte Substantive ergänzen jeweils sechzehn Lebensmittel und Körperbegriffe mit Bedeutungen in vier Sprachen sowie eigenen Lernstapeln für Lebensmittel und Körperteile. Englisch enthält 25 aufgenommene Zahltransformationen, darunter feet, teeth, potatoes und mouths mit stimmhaftem Konsonanten; Stoffnamen wie Hühnerfleisch, Rindfleisch, Butter und Haut erhalten keine Pluralfamilie. Japanisch bewahrt vollständige Verknüpfungen zu einzelnen Kana, trennt die Bedeutungen Fuß und Bein von あし in eigene Definitionen und verwendet vorhandene muttersprachliche Aufnahmen bei identischen Ausspracheeingaben weiter. Vier einzeln verfasste Beispielsätze pro Sprache besitzen direkte neuronale Aufnahmen mit Vorrang vor exakt aus den Bestandteilen zusammengesetzten Satzaufnahmen. Alle Illustrationen werden lokal im etablierten sprachspezifischen Zeichenstil mitgeliefert.

## Review-Korrekturen und Aufnahmeinventare

Aufnahmemetadaten verwenden ein kompaktes Manifest und prüfsummengesicherte Inventare für Zeichen, Wortschatz, Transformationen, Sätze und Satzzusammensetzungen. Audiodaten, Stimmen-/Anfrageherkunft und Suchpriorität bleiben erhalten. Referenzimporte lesen die paketierte Sprache; die Bereinigung versucht auch nach Fehlern alle Registrierungen zu entfernen. Wörterbuchfehler geben Antwortdaten frei und Referenzinhalte können erneut geladen werden. Die Dokumentation beschreibt die aktuelle Konfiguration und generierte Bilder.

## Explizite Katalognormalisierung und Satzkompositionen

Der Katalogleser erhält seine Normalisierungsregel vom Sprachanbieter: NFC für Englisch, NFKC für Japanisch. Gemeinsamer Suchcode verzweigt nicht mehr nach einer bestimmten Sprache. Die Inventare heißen `sentence-compositions`; jeder Eintrag beschreibt eine echte paketierte Aufnahme aus geordneten Einzelaufnahmen. Direkte neuronale Satzaufnahmen bleiben getrennt und haben Wiedergabevorrang.

## Lokalisierte Bildbezeichnungen und neutrale Dateinamen

Dateinamen und IDs der Illustrationen verwenden ihren SHA-256-Hash; Quellblätter verwenden den Hash ihrer Quelldaten. Die Katalogmetadaten liefern deutsche, englische, indonesische und japanische Bezeichnungen aus den vorhandenen Bedeutungen der Karten. Anzeige und neutrale Speicherkennung sind getrennt. Bilddaten und Kartenidentitäten bleiben unverändert; Inhaltsrevisionen aktualisieren alle Bildverweise.

## Nutzung

ElevenLabs-Synthese in ein eigenes konfigurierbares Modul verlagern. Study nutzt optionale sprachbezogene Stimmen für gespeicherte globale Karten. Private und Klassenkarten erlauben begrenzte Uploads und Mikrofonaufnahmen. Die kontinuierliche Satzkomposition aus vorhandenen Aufnahmen bleibt als Rückfall erhalten. Administratoren können globale Audios im Editor neu erzeugen.

## Study-Aktivierung reparieren

Die tatsächlichen englischen und japanischen Inhaltspaketversionen beim Entfernen gebündelter Aufnahmen erhöhen. Unabhängige Module werden vor der Fehlermeldung vollständig abgeglichen, damit Einwilligungsrouten ihre registrierten Flows behalten.

## Alle Aufnahmen neu erzeugen

Alle 331 gebündelten Aufnahmen verwenden nun die konfigurierte ElevenLabs-Stimme dieser Sprache. Verfasste Lesungen, Kartenidentitäten, leise Vorläufe und die Satzkomposition mit Sprechpausen bleiben erhalten. Das Werkzeug nutzt Zugangsdaten aus der Umgebung, einen fortsetzbaren API-Antwortcache und atomaren Dateiaustausch; Pakete enthalten keine Zugangsdaten. Verzeichnisse, Herkunftsangaben, Inhaltsrevisionen und Integritätsprüfsummen entsprechen den neuen Aufnahmen.

## Abschließende Prüfung und Zugriff bei deaktivierter Sprache

Die Deinstallation löscht gespeicherte Stimmeneinstellungen unabhängig vom Erhalt der Lerninhalte. Deaktivieren entfernt Modulrouten, statische Oberflächen und Anbieterregistrierungen; Einstellungen überstehen Deaktivierung und Neustarts und sind nur im aktivierten Zustand erreichbar. Cognis sperrt gespeicherte Schemata, Karten und Medien anhand des aktiven Sprachanbieters und stellt den Zugriff beim Aktivieren wieder her. Referenzergebnisse vereinen gleichwertige Quellenidentitäten und bewahren Quelldaten, Lesereihenfolge und Bedeutungen. Vorbereitete Sätze verwenden exakte zusammengesetzte PCM-Aufnahmen vor getrennt erhaltenen Direktaufnahmen. Sprachanfragen prüfen normalisierten, begrenzten Text; KanjiVG verwirft abgelehnte Antwortdaten und akzeptiert Langvokalzeichen.

## Commits

- [209951a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/209951a165f6935eb242b265f01f2de568ba0b1d)
- [8048575](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/80485757bae9c748a47691b2369673c467ebde6d)
- [c92c612](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c92c6123e086f7a1cdccca8b258044e0c2deefcf)
- [4212bab](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4212babec6746044c254c6b38f466d79be0202c6)
- [796ce05](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/796ce057c656b30ae7a5a5fe013e1e4f1678daf8)
- [808c1a7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/808c1a7269c7a0e149dde37411107d5fc23636a8)
- [eb8095f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/eb8095fe6f6e13dd5ad2e09540ac0d6ff8f9a183)
- [101385b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/101385bbe449519ef00798a2bf6f8c0322d26a6f)
- [a97d873](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a97d8736fc474d6e1a24efeeb807b27f49c66441)
- [3020bb3](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3020bb32ed67ae87ac188a2635d76df652378bb2)
- [30f117c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30f117c4549a670ed7b63f2dbc478080f28873a2)
- [21a0c59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/21a0c590906a9185fe75f7e565d6f86db8fe1b5c)
- [a53cb1b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a53cb1bf905620bd7ad1183285cee1be2ced8823)
- [8d5d822](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d5d82247993f5fd8759d33d923a818722c36075)
- [d63f5ac](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d63f5ac5ca942f59965c6ac517a6151db9fbb727)
- [e017112](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e017112787f2903824214ee731dbdfb9e55eb916)
- [0284e55](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0284e55ff120336df0c3ee54df9ed41df94ef1fa)
- [9ee99c9](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/9ee99c9854cbd2409ecc32921a04741a87c929e2)
- [d376277](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d376277ad28a779f25e66b0b625bea17e86302f1)
- [52d26dd](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/52d26ddbf52d2610823de8236eaca96589ba8f14)
- [de24655](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/de2465556e5827c262321c94a6a28b15fbb379c9)
- [779be5b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/779be5b2842b5600d05c87fa4e78d0e010ca971e)
- [67870fc](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/67870fcd764378f0ee8d27a29dcc51a493bd877f)
- [1c31c7c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1c31c7cb63c6d377a1059e1206b928cc4716068c)
- [3dfd7f1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3dfd7f1e52402dbc876c5011c75c066cb0f1c1d9)
- [1ae45ef](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/1ae45efa393bd95002a2622e9d871a66fa1eab12)
- [f79d59e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f79d59e97f4bcad73be1ba89090b0e1370d2e7e5)
- [f446d6c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/f446d6c46cda70e1075185883126c2f65cb5af40)
- [b21877e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b21877e5e193c54e89de4e0458fd3d2055f41cf5)
- [5579d8c](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5579d8ced788d25f09c459de54cfd4d7f58c56de)
- [b9c5743](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b9c57434a537e646516cbf3657a0d5b645773d86)
- [2c2e676](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/2c2e6762e43ea9351ba0a22879a9cc3b32087bbb)
- [c27ce4e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/c27ce4eb7e3b7197044d37656a8906a394df0935)
- [af0ee61](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/af0ee61ea40640ece10fc7c9754769000bf6df5a)
- [87be13f](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/87be13f6b19b64c15d6866e62c10cfcd39040124)
- [4b95cc1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4b95cc17b5bd2dbba73f38f1d90298a5bb682a2b)
