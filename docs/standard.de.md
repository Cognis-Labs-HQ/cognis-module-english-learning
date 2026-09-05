# Cognis-Englischmodul

Das Cognis-Englischmodul stellt für das Cognis-Study-Gateway eine installierbare Englischlernumgebung als versioniertes, deklaratives und ausschließlich datenbasiertes Inhaltspaket bereit.

## Anwendungsbeispiele

- Öffnen Sie `/study/library`, um die englischen Inhalte über die schemagesteuerte gemeinsame Study-Bibliothek zu erkunden.
- Lösen Sie die vom Host bereitgestellte Capability `study:library` auf, um auf das versionierte Inhaltspaket im Namensraum `en` mit lokalisierten Schemametadaten und semantischen Ebenenrollen zuzugreifen.
- Lösen Sie die Capability `study:language:en` auf, um den kanonischen Deskriptor mit `languageCode: "en"` für die erzeugte Schaltfläche der Study-Unternavigation zu erhalten.

## Technische Spezifikation

Das Modul ist eine schreibgeschützte externe Cognis-Erweiterung. Seine dauerhafte UUID identifiziert es versionsübergreifend, und sein `requires`-Eintrag deklariert das Study-Gateway per UUID.

### Integrationsvertrag

- `bootstrap.js` ist der einzige Integrationseinstiegspunkt für die Plattform.
- Das bereitgestellte `ctx` ist der einzige komponentenübergreifende Bus für Capability-, Flow- und Sprachressourcenregistrierungen.
- Laufzeitimporte bleiben repository-relativ und greifen niemals auf Cognis-Interna oder benachbarte Komponenten zu.
- Bereichsgebundene Registrierungen lassen sich beim Deaktivieren oder Deinstallieren des Moduls entfernen.

- Der Deinstallations-Hook protokolliert die Lebenszyklus-Bereinigung; das Modul hat keine gespeicherte Konfiguration oder nutzereigenen Inhalte, da seine Lerndatensätze schreibgeschützte Paketdateien sind.

### Sicherheit

- Die Host-Bibliothek prüft Paketnamensraum, semantische Version, Lizenz, sichere Pfade, lokalisiertes Schema, typisierte Felder und den vollständigen Datensatzgraphen vor einem atomaren Schreibvorgang.
- Fehler beim Einlesen werden mit sicheren strukturierten Metadaten an den Host-Logger übergeben.

### Freigabeprozess

- Halten Sie die Versionen in `manifest.json`, `package.json` und `package-lock.json` synchron und ändern Sie niemals die Modul-UUID.
- Führen Sie vor einem Release-Commit `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest` und `git diff --check` aus.
- Erzeugen Sie `manifest.files` nach der letzten Änderung an einer ausgelieferten Datei neu, damit alle repository-relativen Pfade und SHA-256-Prüfsummen überprüfbar bleiben.
