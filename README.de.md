# Cognis Englisch

[English](README.en.md) · **Deutsch** · [Bahasa Indonesia](README.id.md) · [日本語](README.ja.md)

Cognis Englisch ist die installierbare Erweiterung zum Englischlernen für das Cognis-Study-Gateway. Sie bewahrt die permanente Modul-UUID und die mitgelieferten englischen Bibliotheksdaten des ursprünglichen integrierten Study-Sprachmoduls und folgt zugleich dem Vertrag für externe Cognis-Module.

## Funktionen

- Daten zum englischen Alphabet und eine authentifizierte Alphabetseite unter `/study/alphabet`.
- Eine Bibliotheksübersicht nur für Administratoren unter `/study/en-library`.
- Einen Einstieg in den Unterrichtsraum unter `/study/en-classroom`.
- Eine schreibgeschützte, authentifizierte Bibliotheks-API unter `/api/v1/modules/study-language-en/library`.
- Eine Capability `study:language:en` zur Study-Integration ohne Importe aus Cognis-Interna.
- Lokalisierte Navigation, Seiten und Marketplace-Metadaten auf Englisch, Deutsch, Indonesisch und Japanisch.
- Einen Bereinigungshook für den Lebenszyklus bei der Deinstallation.

## Installation

Füge dieses Git-Repository im Cognis-Modul-Marketplace als Modulquelle hinzu, prüfe die deklarierte Abhängigkeit vom Study-Gateway und die Authentifizierungs-Capability, installiere das Modul und aktiviere es. Die erforderliche UUID des Study-Gateways lautet `338b9237-a2c8-5bcf-9437-bccc9abd9a27`.

## Architektur

`bootstrap.js` ist der einzige Integrationspunkt zum Host. Die Datei registriert moduleigene UI- und API-Oberflächen über `ctx`, stellt die englische Sprachbeschreibung als öffentliche Capability bereit und erweitert den Bootstrap-Flow der Plattform. Der Laufzeitcode verwendet repository-relative Importe und importiert keine Cognis-Interna.

Das Manifest veröffentlicht `ui.stringsBaseUrl`, damit Cognis moduleigene Übersetzungen laden kann, bevor die Browseroberfläche startet. UI- und API-Registrierungen bleiben bereichsgebunden, sodass nach dem Deaktivieren oder Deinstallieren kein moduleigenes Verhalten zurückbleibt.

## Qualitätsprüfungen für Mitwirkende

```sh
npm install
npm run lint
npm test
npm run check:manifest
git diff --check
```

Führe nach jeder Änderung an einer ausgelieferten Datei vor der Validierung oder dem Commit `npm run manifest:hashes` aus. Den vollständigen Integrationsvertrag findest du in [`docs/standard.de.md`](docs/standard.de.md); gleichwertige englische, indonesische und japanische Referenzen liegen daneben.
