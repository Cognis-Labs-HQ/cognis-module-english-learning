# Dokumentation und Hostverträge

**Feature-Zweig:** feature-documentation-core-alignment

## Strukturierte Dokumentation

Info, Anwendung und Technik bilden vollständige lokalisierte Dokumentfamilien im Modulmanifest. Einführung, praktische Abläufe und aktuelle API-/Konfigurationsverträge besitzen eigene Ansichten. Strikte Gliederungs-, Verweis- und Dateinamenprüfungen laufen in eigenständigen Tests und CI. Quelldateilinks folgen dem Standardzweig; Änderungslinks behalten kurze Commitbezeichnungen.

## Gatewaydiagnosen

Laufzeitdiagnosen verwenden das Logging-Gateway des Hosts und dessen Ausgaberichtlinie. Befehlsberichte nutzen Terminalausgaben. Die Prüfung nativer Konsole umfasst Modul-JavaScript einschließlich Aliasen und berechneter Zugriffe. Anbieterlebenszyklen, Berechtigungen und Anleitungsabschluss-IDs bleiben erhalten.

## Aussagekräftige Bindungsnamen

Die Syntaxbaumprüfung untersucht Deklarationen, Exporte, Destrukturierungen, Laufzeit- und Typsignaturparameter, Konstruktor-Parametereigenschaften, Catch-Bindungen, Importe, benannte Funktionen und Klassen, Laufzeitbindungen von Enums und Namensräumen sowie private Mitglieder unabhängig von der Formatierung. Sie erfasst Quelltext, Werkzeuge, Tests und Testdaten ohne Altbestands- oder Dateiausnahmen. Undurchsichtige Kurzformen, abgekürzte Pluralformen, nummerierte Platzhalter und verwendete ignorierte Bindungen lassen die Prüfung fehlschlagen. Übliche Entwicklerbegriffe wie `args`, `db`, LDAP-`dn`, HTTP-`req`/`res`, `env`, `opts` und `params` bleiben zulässig; das Glossar definiert den vollständigen Wortschatz. Weitere kurze Ausnahmen sind ein ungenutztes, nicht exportiertes `_`, `id` und numerische `i`/`j`/`k`-Zähler mit passenden arithmetischen Aktualisierungen. Koordinaten und Abmessungen erhalten aussagekräftige lokale Namen. Eigene Hilfs- und Speicher-APIs verwenden ihre aussagekräftigen Namen direkt in Deklarationen, Exporten, Importen und Aufrufern; reine Umbenennungsaliase für Importe und Exporte schlagen fehl. Verbraucher müssen die kanonischen Exporte statt verkürzter Aliase verwenden. Öffentliche Nutzdatenschlüssel, Fähigkeitsbezeichner und reine Typbezeichner behalten ihre Vertragsrollen. Lokalisierte Handbücher, Beitragsrichtlinien, Modulversionen, Sperrdateien und Paketprüfsummen sind synchronisiert.

## Änderungen

- [8cf705a](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8cf705a517b08306ab14c312a18810db52fa6293)
- [d775450](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/d775450e8570dd9246f87075309ff357de16bef7)
- [a1a8bd1](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/a1a8bd1504f8f035d6c1d7620c353bf231c4e86a)
