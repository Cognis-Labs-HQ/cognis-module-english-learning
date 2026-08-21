# Cognis-Englischmodul

Das Cognis-Englischmodul stellt für das Cognis-Study-Gateway eine installierbare Englischlernumgebung mit Alphabetdaten, einer schreibgeschützten Lernbibliothek und Einstiegspunkten für den Unterricht bereit.

## Anwendungsbeispiele

- Öffnen Sie `/study/alphabet`, um die 26 Buchstaben des englischen Alphabets zu erkunden.
- Öffnen Sie als Administrator `/study/en-library`, um die Lerninhalte des Moduls zu prüfen.
- Öffnen Sie `/study/en-classroom`, um über Study eine Englischunterrichtssitzung zu beginnen.
- Rufen Sie `/api/v1/modules/study-language-en/library` mit einem gültigen Cognis-Zugriffstoken auf, um die verfügbaren Bibliotheksebenen zu lesen.
- Lösen Sie die Capability `study:language:en` auf, um die Sprachbeschreibung ohne Import von Modulinterna einzubinden.

## Technische Spezifikation

Das Modul ist eine schreibgeschützte externe Cognis-Erweiterung. Seine dauerhafte UUID identifiziert es versionsübergreifend, und sein `requires`-Eintrag deklariert das Study-Gateway per UUID.

### Integrationsvertrag

- `bootstrap.js` ist der einzige Integrationseinstiegspunkt für die Plattform.
- Das bereitgestellte `ctx` ist der einzige komponentenübergreifende Bus für Routen, UI-Registrierungen, Capabilities und Flow-Hooks.
- Laufzeitimporte bleiben repository-relativ und greifen niemals auf Cognis-Interna oder benachbarte Komponenten zu.
- Bereichsgebundene Registrierungen lassen sich beim Deaktivieren oder Deinstallieren des Moduls entfernen.

- Der Deinstallations-Hook protokolliert die Lebenszyklus-Bereinigung; das Modul hat keine gespeicherte Konfiguration oder nutzereigenen Inhalte, da seine Lerndatensätze schreibgeschützte Paketdateien sind.

### Sicherheit

- Bibliotheksendpunkte authentifizieren Anfragen, bevor Daten gelesen werden.
- Ebenennamen stehen auf einer Positivliste, und die Datensatzpfade sind im Modulspeicher fest vorgegeben.
- API-Antworten verwenden stabile öffentliche Fehler, ohne Implementierungsdetails offenzulegen.
- Initialisierungsfehler werden mit sicheren strukturierten Metadaten an den Host-Logger übergeben.

### Freigabeprozess

- Halten Sie die Versionen in `manifest.json`, `package.json` und `package-lock.json` synchron und ändern Sie niemals die Modul-UUID.
- Führen Sie vor einem Release-Commit `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest` und `git diff --check` aus.
- Erzeugen Sie `manifest.files` nach der letzten Änderung an einer ausgelieferten Datei neu, damit alle repository-relativen Pfade und SHA-256-Prüfsummen überprüfbar bleiben.
