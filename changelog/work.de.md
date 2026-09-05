# Gemeinsame Study-Bibliothek verwenden

**Feature-Zweig:** work

## Capability-gestützte Lerninhalte

Das Modul installiert sein deklaratives englisches Inhaltspaket jetzt atomar über die vom Host bereitgestellte Capability `study:library`. Die doppelte Bibliotheks-API samt Speicher, Seite und Navigationseintrag wurde zugunsten der schemagesteuerten Hostdarstellung entfernt.

## Englische Flaggengrafik

Das Modulsymbol verwendet nun eine skalierbare SVG-Darstellung der englischen Flagge anstelle des allgemeinen Cognis-Buchstabensymbols.

## Ausgewählte Sprache beibehalten

Das Paket veröffentlicht kanonische englische Sprachmetadaten, damit Cognis die Bibliotheksnavigation mit dem von Cognis PR #213 verlangten validierten Kontext `language=en` erzeugen kann.

## Vertrag für versionierte Sprachpakete

Das Englischpaket besitzt nun den Namensraum `en`, veröffentlicht lokalisierte Schemametadaten und semantische Ebenenrollen, verwendet eine neue unveränderliche Schema- und Paketversion und gibt seine validierte Paketidentität gemäß Cognis PR #214 über die Sprach-Capability bekannt.

## Reines Study-Datenpaket

Die moduleigenen Alphabet-, Klassenzimmer-, Navigations-, CLI-, API- und Stiloberflächen wurden entfernt. Cognis erkennt und rendert das Englischpaket nun generisch anhand der veröffentlichten unveränderlichen Paketbeschreibung, des semantischen Schemas und der lokalisierten Metadaten. Statisch registriert bleibt nur das Sprachpaket.

## Dokumentation und Verträge

Das Manifest verlangt nun `study:library`, die Modulversion lautet 1.2.18 und die lokalisierte Dokumentation verweist auf die gemeinsame Study-Bibliothek.

## Commits

- [Implementierungsbasis](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/30df435)
