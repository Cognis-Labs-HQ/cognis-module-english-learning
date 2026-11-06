# Geführtes Tutorial

**Feature Branch:** feature-guided-tutorials

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

## Commits

- [e1d021b](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/e1d021bff42813deefaf1996c9254fa4c1989197)
- [2634251](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/26342513e70ae51ab235ab276c73515857836e54)
- [69ea9e2](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/69ea9e2bad4a19dd701fd3de40ea037b3222822b)
- [ba6400e](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/ba6400eec803d69d53b7099dd34161ca98738b0a)
- [6e6f062](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6e6f0625fa5598da1c6c6237c75f6ecd197b7609)
