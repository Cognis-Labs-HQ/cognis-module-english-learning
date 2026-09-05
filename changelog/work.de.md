# Gemeinsame Study-Bibliothek verwenden

**Feature-Zweig:** work

## Capability-gestützte Lerninhalte

Das Modul installiert sein deklaratives englisches Inhaltspaket jetzt atomar über die vom Host bereitgestellte Capability `study:library` und liest Alphabet-Einträge aus der gemeinsamen Study-Library-API. Die doppelte Bibliotheks-API samt Speicher, Seite und Navigationseintrag wurde entfernt.

## Englische Flaggengrafik

Das Modulsymbol verwendet nun eine skalierbare SVG-Darstellung der englischen Flagge anstelle des allgemeinen Cognis-Buchstabensymbols.

## Ausgewählte Sprache beibehalten

Links zum Englischmodul und zum Klassenzimmer führen nun die validierte Abfrage `language=en`, damit die Study- und Bibliotheksnavigation die ausgewählte BCP-47-Sprache gemäß Cognis PR #213 beibehält.

## Dokumentation und Verträge

Das Manifest verlangt nun `study:library`, die Modulversion lautet 1.2.17 und die lokalisierte Dokumentation verweist auf die gemeinsame Study-Bibliothek.

## Commits

- [Implementierungsbasis](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3092c91)
