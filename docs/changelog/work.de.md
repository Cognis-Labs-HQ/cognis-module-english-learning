# Gemeinsame Study-Bibliothek verwenden

**Feature-Zweig:** work

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

## Commits

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/75314e2)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0c5afdd)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/0c579e3)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/090e11f)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a5e4adb)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6819fb5)

- [Previous implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/cb62fd2)

- [Complete-sequence implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3b52255)

- [Locale-isolation implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/78c86f0)
- [Latest presentation-contract implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4ac2cd4)
- [Explicit-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/33ba470)
- [Capital-variant alignment](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/5034aab)
- [Composition-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a42d840)
- [Directional-variant implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/4d4bd7e)
- [Latest host-alignment implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d0aad0d)
- [Latest schema implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bc26d0d)
- [Implementierungsbasis](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
