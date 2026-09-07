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

Das Paket verwendet nun Schema- und Inhaltspaketversion 5, deklariert exklusive Metadatenfiltergruppen und verweist für Audio von Schrifteinheiten auf öffentliche HTTPS-Endpunkte mit einem unterstützten Audio-Medientyp. Wiederholte Bibliotheksimporte verarbeitet die aktualisierungsorientierte Persistenz des Hosts. Da ein fehlgeschlagener Bootstrap sowohl Inhalte als auch die Sprach-Capability auslassen würde, bleibt `allowBootstrapFailure` ausdrücklich deaktiviert.

## Dokumentation und Verträge

Das Manifest verlangt weiterhin `study:library`, lehnt eine teilweise Aktivierung nach einem Bootstrap-Fehler ausdrücklich ab und veröffentlicht Modulversion 1.2.22.

## Commits

- [Latest schema implementation](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bc26d0d)
- [Implementierungsbasis](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b844bdd)
