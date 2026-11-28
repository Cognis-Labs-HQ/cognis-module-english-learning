# Dokumentation und Hostverträge

**Feature-Zweig:** feature-documentation-core-alignment

## Strukturierte Dokumentation

Info, Anwendung und Technik bilden vollständige lokalisierte Dokumentfamilien im Modulmanifest. Einführung, praktische Abläufe und aktuelle API-/Konfigurationsverträge besitzen eigene Ansichten. Strikte Gliederungs-, Verweis- und Dateinamenprüfungen laufen in eigenständigen Tests und CI. Quelldateilinks folgen dem Standardzweig; Änderungslinks behalten kurze Commitbezeichnungen.

## Gatewaydiagnosen

Laufzeitdiagnosen verwenden das Logging-Gateway des Hosts und dessen Ausgaberichtlinie. Befehlsberichte nutzen Terminalausgaben. Die Prüfung nativer Konsole umfasst Modul-JavaScript einschließlich Aliasen und berechneter Zugriffe. Anbieterlebenszyklen, Berechtigungen und Anleitungsabschluss-IDs bleiben erhalten.

## Aussagekräftige Bindungsnamen

Die Syntaxbaumprüfung erfasst JavaScript- und TypeScript-Quelltext, Werkzeuge, Tests und Testdaten ohne Altbestands- oder Dateiausnahmen. Sie prüft Laufzeitbindungen, Signaturparameter, private Mitglieder sowie eigene zusammengesetzte Typ- und Methodennamen. Übliche Kurzformen bleiben als direkte Namen wie `db`, `this.db`, `args` und LDAP-`dn` zulässig. Zusammengesetzte Namen schreiben andere Kurzformen als Maßeinheiten aus, auch bei übernommenen Bezeichnern: `DatabaseExecutor`, `KeyringDatabaseExecutor`, `createDatabaseExecutor`, `baseDistinguishedName` und `registerStaticDirectory`. Undurchsichtige Kurzformen, nummerierte Platzhalter und verwendete ignorierte Bindungen lassen die Prüfung fehlschlagen. Ein ungenutztes, nicht exportiertes `_`, `id` und arithmetische `i`/`j`/`k`-Zähler behalten ihre festgelegten Rollen. Generische Typparameter, kanonische Abhängigkeits- und Plattformnamen sowie öffentliche Nutzdatenschlüssel behalten ihre Verträge. Eigene API-Deklarationen, Importe, Exporte und Aufrufer verwenden denselben Namen; reine Umbenennungsaliase einschließlich Typaliasen schlagen fehl. Regressionstestfälle sichern die Unterscheidung direkter und zusammengesetzter Namen sowie kanonische Plattform-APIs. Lokalisierte Handbücher, Beitragsrichtlinien, Modulversionen, Sperrdateien und Paketprüfsummen sind synchronisiert. Maßeinheiten wie `ms`, `sec`, `px`, `rad` und `deg` bleiben in zusammengesetzten Namen abgekürzt. Zeit- und Pixelangaben verwenden wieder Formen wie `INVITE_EXPIRY_MS`, `timeoutMs` und `widthPx`. Regressionstestfälle sichern die Einheitenausnahme, ohne undurchsichtige benachbarte Wörter zuzulassen.

## Änderungen

- [8cf705a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8cf705a517b08306ab14c312a18810db52fa6293)
- [d775450](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d775450e8570dd9246f87075309ff357de16bef7)
- [a1a8bd1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a1a8bd1504f8f035d6c1d7620c353bf231c4e86a)
- [7604293](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/76042930779787849a91b697dcc2de869e89232c)
- [51c8df2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/51c8df2722df4156cc68dfe3d00fb0214cebd099)
