# Cognis Englisch

[English](README.en.md) · **Deutsch** · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Cognis Englisch ist die installierbare Erweiterung zum Englischlernen für das Cognis-Study-Gateway. Sie bewahrt die permanente Modul-UUID und die mitgelieferten englischen Bibliotheksdaten des ursprünglichen integrierten Study-Sprachmoduls und folgt zugleich dem Vertrag für externe Cognis-Module.

## Funktionen

- Daten zum englischen Alphabet und eine authentifizierte Alphabetseite unter `/study/alphabet?language=en`.
- Die gemeinsame Study-Bibliothek unter `/study/library?language=en`.
- Einen Einstieg in den Unterrichtsraum unter `/study/en-classroom?language=en`.
- Ein deklaratives englisches Inhaltspaket, das über die vom Host bereitgestellte Capability `study:library` eingelesen wird.
- Eine Capability `study:language:en` zur Study-Integration ohne Importe aus Cognis-Interna.
- Lokalisierte Navigation, Seiten und Marketplace-Metadaten auf Englisch, Deutsch, Indonesisch und Japanisch.
- Eine skalierbare SVG-Grafik der englischen Flagge als Modulsymbol.
- Einen Bereinigungshook für den Lebenszyklus bei der Deinstallation.

## Installation

Füge dieses Git-Repository im Cognis-Modul-Marketplace als Modulquelle hinzu, prüfe die deklarierte Abhängigkeit vom Study-Gateway und die Study-Library-Capability, installiere das Modul und aktiviere es. Die erforderliche UUID des Study-Gateways lautet `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Architektur

`bootstrap.js` ist der einzige Integrationspunkt zum Host. Die Datei registriert moduleigene UI-Oberflächen über `ctx` und liest sein deklaratives Inhaltspaket ein, stellt die englische Sprachbeschreibung als öffentliche Capability bereit und erweitert den Bootstrap-Flow der Plattform. Der Laufzeitcode verwendet repository-relative Importe und importiert keine Cognis-Interna.

Das Manifest veröffentlicht `ui.stringsBaseUrl`, damit Cognis moduleigene Übersetzungen laden kann, bevor die Browseroberfläche startet. UI-Registrierungen bleiben bereichsgebunden, sodass nach dem Deaktivieren oder Deinstallieren kein moduleigenes Verhalten zurückbleibt.

## Qualitätsprüfungen für Mitwirkende

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

Führe nach jeder Änderung an einer ausgelieferten Datei vor der Validierung oder dem Commit `npm run manifest:hashes` aus. Den vollständigen Integrationsvertrag findest du in [`docs/standard.de.md`](docs/standard.de.md); gleichwertige englische, indonesische und japanische Referenzen liegen daneben.
