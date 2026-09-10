# Cognis-Englischmodul

Das Cognis-Englischmodul stellt für das Cognis-Study-Gateway eine installierbare Englischlernumgebung als versioniertes, deklaratives und ausschließlich datenbasiertes Inhaltspaket bereit.

## Anwendungsbeispiele

- Öffnen Sie `/study/library`, um die englischen Inhalte über die schemagesteuerte gemeinsame Study-Bibliothek zu erkunden.
- Lösen Sie die vom Host bereitgestellte Capability `study:library` auf, um auf das versionierte Inhaltspaket im Namensraum `en` mit lokalisierten Schemametadaten, semantischen Ebenenrollen und durch moduleigene Zeichenketten gestützten Definitionsbeziehungen zuzugreifen.
- Lösen Sie die Capability `study:language:en` auf, um den kanonischen Deskriptor mit `languageCode: "en"` für die erzeugte Schaltfläche der Study-Unternavigation zu erhalten.

## Technische Spezifikation

Das Modul ist eine schreibgeschützte externe Cognis-Erweiterung. Seine dauerhafte UUID identifiziert es versionsübergreifend, und sein `requires`-Eintrag deklariert das Study-Gateway per UUID.

### Integrationsvertrag

- `bootstrap.js` ist der einzige Integrationseinstiegspunkt für die Plattform.
- Die Browserfreigabe ist auf `ui/languages` beschränkt; das reine Datenmodul trägt weder eine Host-UI-Erweiterung noch einen Hook für eine Plattform-Bootstrap-Stufe bei.
- Das bereitgestellte `ctx` ist der einzige komponentenübergreifende Bus für Capability-, Flow- und Sprachressourcenregistrierungen.
- Laufzeitimporte bleiben repository-relativ und greifen niemals auf Cognis-Interna oder benachbarte Komponenten zu.
- Bereichsgebundene Registrierungen lassen sich beim Deaktivieren oder Deinstallieren des Moduls entfernen.

- Der Deinstallations-Hook protokolliert die Lebenszyklus-Bereinigung; das Modul hat keine gespeicherte Konfiguration oder nutzereigenen Inhalte, da seine Lerndatensätze schreibgeschützte Paketdateien sind.

### Aktuelles Study-Datenmodell

Schemaversion 12 modelliert Alphabeteinträge als atomare Schrifteinheiten mit Aussprachelisten und HTTPS-Audioverweisen. Wörter werden mit geordneten Buchstabenfolgen und lokalisierten Definitionen verknüpft, grammatische Partikeln werden eigens modelliert, und Sätze setzen sich aus geordneten Wort- und Partikelverweisen zusammen. Audio bleibt extern, daher liefert das Modul keine binären Medien aus. Häufige Digraphen werden außerdem als zusammengesetzte Schrifteinheiten modelliert, deren resolvergestützte Zusammensetzungsverweise von ihren lokalisierten Definitionsverweisen getrennt sind. Das Alphabet veröffentlicht ein festes Raster, und erforderliche Metadatenfilter deklarieren ihre anfänglichen Tags. Die Kleinbuchstabenkarten im Raster werden über stabile numerische Anzeige-IDs adressiert; jede großgeschriebene Alternative verwendet eine ausdrückliche Variantenbeziehung zu ihrem Kleinbuchstaben als Elternteil. Wort-, Partikel- und Satzkarten bevorzugen ihre erforderliche lokalisierte Definition gegenüber internen Datensatzbezeichnungen. Nur die Alphabet-Zeichenebene fordert minimale Karten an, sodass ihre Einträge kompakte Hauptbezeichnungen zeigen, während Zusammensetzungen und alle höheren Ebenen ihre vollständige Darstellung behalten. Satzbeschriftungen müssen sich nach der Leerraumnormalisierung exakt aus lückenlosen geordneten Verweisen auf lexikalische Einheiten und Partikeln rekonstruieren lassen; der enthaltene Punkt ist deshalb eine ausdrückliche Satzzeichenpartikel und kein unverknüpfter Beschriftungstext. Das Alphabet verwendet sieben Spalten und zwei ausdrückliche Leerfelder am Ende, sodass vier ausgeglichene Zeilen entstehen. Buchstabendatensätze enthalten ihre Namen und häufige IPA-Phoneme; sieben enthaltene Digraphen decken `ch`, `sh`, `th`, `ph`, `wh`, `ng` und `ck` ab. Variantenbeziehungen schreiben keine Richtung mehr vor; der aktuelle Host wählt dynamisch eine verfügbare Position innerhalb der Grenzen.

### Richtlinie für Bootstrap-Fehler

Das Einlesen der Inhalte und die Capability `study:language:en` bilden das gesamte Laufzeitverhalten des Moduls. Der aktuelle Host führt Inhaltsimporte atomar aus und setzt das Modul nach jedem verbleibenden Bootstrap-Fehler wieder auf deaktiviert. Das Modul folgt daher dieser hosteigenen Richtlinie ohne Manifest-Ausnahme.

### Sicherheit

- Die Host-Bibliothek prüft Paketnamensraum, semantische Version, Lizenz, sichere Pfade, lokalisiertes Schema, typisierte Felder und den vollständigen Datensatzgraphen vor einem atomaren Schreibvorgang.
- Fehler beim Einlesen werden mit sicheren strukturierten Metadaten an den Host-Logger übergeben.

### Freigabeprozess

- Halten Sie die Versionen in `manifest.json`, `package.json` und `package-lock.json` synchron und ändern Sie niemals die Modul-UUID.
- Führen Sie vor einem Release-Commit `npm install`, `npm test`, `npm run lint`, `npm run manifest:hashes`, `npm run check:manifest` und `git diff --check` aus.
- Erzeugen Sie `manifest.files` nach der letzten Änderung an einer ausgelieferten Datei neu, damit alle repository-relativen Pfade und SHA-256-Prüfsummen überprüfbar bleiben.
