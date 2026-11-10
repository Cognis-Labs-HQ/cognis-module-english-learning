# Geführtes Tutorial

**Feature Branch:** feature-guided-tutorials

Study trennt allgemeine Navigation von Sprachinhalten. Leitfäden für gewählte Lernsprachen ersetzen allgemeines Explore und erklären echte Kartendetails, Zeichnen und Kartenerstellung mit bedingten Zweigen und begrenzter Lebensdauer.

## Technische Spezifikation

Explore- und Lernkarten-Routen werden über Studys öffentliche Capability `study:tutorialTargets` aufgelöst. Das Sprachmodul liefert nur Sprachdaten und Abläufe; Cognis bleibt für Routen, Einschreibungen, Cache und Lernoberfläche zuständig. Englisch und Japanisch verwenden dieselbe Anbieterimplementierung. Zwischengespeicherte Inhalte lassen sich offline erklären. Nach der Navigation fehlende Ziele folgen der Fehlzielrichtlinie des Hosts.

Das Modul registriert seinen Ablauf und übersetzte Texte über ctx. Der Host verwaltet Katalog, Hinweise, Pfeile, Hervorhebung, Tastatur- und Zeigersteuerung, geschützte SPA-Navigation und Barrierefreiheit. Schließen, fremde Navigation, Zugriffsverlust oder Deaktivierung beenden die Sitzung. Scheitert das Einhängen des Anbieters, werden seine Registrierungen zurückgenommen.

Anbietertests prüfen den öffentlichen Vertrag, alle vier Übersetzungen, Verfügbarkeitsregeln, Fehlerbereinigung und die Ablehnung nicht unterstützter Host-Versionen.

## Seitengebundener Erstbesuch

Der Host verwaltet Hinweise, Pfeile, Hervorhebung, Barrierefreiheit und das gemeinsame schwebende Aktionsmenü. Erstdurchläufe bieten stets Weiter, ohne Abbrechen oder Überspringen. Wiederholungen bieten Abbrechen mit `btn-cancel`. Der Abschluss wird im Browser pro Konto gespeichert. Navigation, Zugriffsverlust und Anbieterentfernung beenden die Sitzung; fehlgeschlagenes Mounten nimmt Registrierungen zurück.

## Übersetzungsschlüssel

Die Übersetzungsschlüssel der Anleitung verwenden die vollständige Modul-ID des Manifests einschließlich Bindestrichen als ein Namensraumsegment.

## Konkrete Anleitungstexte

Die Schritte beschreiben verfügbare Bedienelemente und Aufgaben, ohne sachfremde Zusicherungen über Berechtigungen oder nicht ausgeführte Aktionen.

## Weiter-Hinweise pro Schritt festlegen

Jeder Tutorial-Schritt legt `highlightNext` ausdrücklich fest: Erklärungen, die Weiter oder Fertig benötigen, aktivieren den Hinweis; interaktive und wartebasierte Übungen deaktivieren ihn. Bei reduzierter Bewegung bleibt eine statische Umrandung.

Alle UI-Komponenten benötigen eine Anleitung. Die Beitragsrichtlinien verlangen nutzerorientierte Aufgabenabläufe und eine Prüfung bestehender Anleitungen bei neuen Funktionen oder geänderter Bedienung.

## Sichtbare Tutorial-Ziele

Tutorial-Ziele und Weiter-Hinweise sind ausdrücklich festgelegt.

## Gemeinsame Menüwarteschlange

Menüs folgen der gemeinsamen Host-Warteschlange und der Komponentenlebensdauer.

## Dokumentierte Wiederherstellungsaktionen

Bei fehlenden Zielen stehen Weiter und Tutorial neu starten bereit; Wiederholungen bieten auch Abbrechen.

## Gezielte Tutorialführung

Anleitungen erklären unterschiedliche sichtbare Bedienelemente in UI-Reihenfolge. Die gemeinsamen Vorgaben behandeln aktive Ansichten, stabile Beispiele, Leerzustände, bedingte Zweige und Lebensdauerbereinigung. Wiederholungsaktionen und Dokumentation zu reduzierter Bewegung entsprechen dem gemeinsamen Host.

## Gezielte Anleitung

Sprachanleitungen stehen erst nach ausdrücklicher Einschreibung in den Study-Einstellungen bereit. Die überflüssige Einschreibungseinführung entfällt; die Anleitung beginnt mit Erkunden und führt zu Übungswerkzeugen.

## Commits

- [e1d021b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e1d021bff42813deefaf1996c9254fa4c1989197)
- [2634251](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/26342513e70ae51ab235ab276c73515857836e54)
- [69ea9e2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/69ea9e2bad4a19dd701fd3de40ea037b3222822b)
- [ba6400e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ba6400eec803d69d53b7099dd34161ca98738b0a)
- [6e6f062](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6e6f0625fa5598da1c6c6237c75f6ecd197b7609)
- [b696b59](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/b696b59c123632458fe2f16e0e2b1e538fd3b44a)
- [32bcc67e7](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/32bcc67e7fe737b105b6d0c4ab57e2f1112b432e)
- [8d9b332c8](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/8d9b332c89fb831abbcd5ccd422b80c4e840cb28)
- [ea8ce9a75](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ea8ce9a75f71f2d84b97e8e353201f0af903cc13)
- [bec37c8cb](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/bec37c8cb4e85661718924719185ebee5d40acc5)
