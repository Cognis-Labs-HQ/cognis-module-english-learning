# Offline lernen

**Feature-Zweig:** feature-offline-study

## Offline-Modus

Study behält begrenzte, kleine JSON-Schnappschüsse im aktuellen Tab: Schemas, erlaubte Zeichen- und Kartendaten, Speicherorte, gesehene IDs, Favoriten und zuvor geöffnete Kartensätze. Sprachschemas aktivieren dies mit `metadata.offline: { cache: "lightweight" }`. Der Library-Cache umfasst höchstens 16 MB und 100 Lesevorgänge; andere Lesecaches höchstens 4 MB und 100 Lesevorgänge. Audiodaten, Wörterbuchantworten, Zugangsdaten und authentifizierte Dokumente werden nicht dauerhaft gespeichert.

Explore-Vorschauen ermitteln Beziehungen aus bereits autorisierten zwischengespeicherten Datensätzen. Zeichnen funktioniert lokal mit neuen Hilfslinien; Lernkarten lassen sich lokal üben. Audio sowie Wörterbuch- und ElevenLabs-Abfragen werden angehalten. Offline-Übungen speichern keinen Fortschritt, keine XP, Belohnungen, Favoriten oder Änderungen. Nur zuvor geladene Inhalte innerhalb der Cache-Grenzen sind verfügbar; fehlende Abhängigkeiten bleiben unerreichbar.

Privates Study benötigt dieselbe zuvor bestätigte, noch gültige Kontositzung im selben Tab. Nach Neuladen und beim Erstbesuch gilt weiterhin der ausschließlich öffentliche Offline-Vertrag. Konto- und Sitzungswechsel, geänderte Einstellungen, Modul-Lebenszyklusänderungen und die Freigabe eines Anbieters verwerfen private Schnappschüsse. Serverseitige Sperren können ohne Verbindung nicht erkannt werden. Die Wiederherstellung prüft ungespeicherte Änderungen und lädt die Serverautorisierung neu.

## Commits

- [3af85bf](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/3af85bf8defd0334fda4f75589618375fa9d6799)
- [6ead1c5](https://github.com/Cognis-Labs-HQ/cognis-module-english-learning/commit/6ead1c5d81c882f580c97b65f0d03f75bc05eff2)
