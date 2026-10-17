# Englisches Wörterbuch

Das Englischmodul registriert das freie Wörterbuch über `study:library:provider`; Cognis verwaltet Suchoberfläche und Cache.

## Nutzungsbeispiele

Suchen Sie ein englisches Wort in der Study-Navigation oder im Wortschatzeditor. Cognis verbindet Lesungen und Bedeutungen gleicher Zusammensetzung. Die API sucht exakte Wörter, liefert aber keine unscharfen Volltextvorschläge oder Satzübersetzungen.

## Technische Spezifikation

Unterstützt werden nur Schema `english`, Sprache `en` und Ebene `words`. Endpunkt: `https://api.dictionaryapi.dev/api/v2/entries/en/`. Eingaben sind höchstens 100 Zeichen lang und bestehen aus englischen Buchstaben sowie inneren Leerzeichen, Apostrophen oder Bindestrichen. Zeitlimit: 15 Sekunden; Weiterleitungen sind verboten. JSON über eine Million Zeichen und ungültige Datensätze erzeugen sichere Fehler.

Bedeutungen behalten die Anbieterreihenfolge; leere und doppelte Einträge werden entfernt, maximal zehn bleiben. IPA-Lesungen sind eindeutig und auf zehn begrenzt. Die kuratierte lokale IPA steht zuerst, damit Aussprachetransformationen passen. Wortart-Tags erhalten bekannte Paradigmen; unbekannte Verben erhalten keine erfundenen Formen. Vollständige Buchstabenschreibungen lösen Paket-Buchstaben-IDs auf.

404 liefert einen echten Paketreffer oder keine Ergebnisse. Netz-, Server- und Parserfehler werden sicher protokolliert und an Cognis gemeldet. Fehlgeschlagene Inhaltsindizes können erneut geladen werden. Suchergebnisse werden nicht im Modul zwischengespeichert oder zeitgesteuert; Cognis verwaltet Stundenprüfungen, Veröffentlichung nach zwölf Stunden und dauerhafte Ergebnisse.

Externe Definitionen bleiben Englisch; die Host-Lokalisierung kann sie übersetzen. Das verborgene Feld `dictionary_data` enthält Endpunkt, Lizenz und zugelassene Wiktionary-Quellen statt der Rohantwort. Ergebnisse können CC BY-SA 3.0 und Wiktionary-Quellenangaben erfordern; diese Pflichten gelten bei Weiterverwendung. Mehrere Wortarten unter derselben Schreibweise sind möglich. Der Dienst liefert keine verbindlichen Flexionsparadigmen.

## Gespeicherte Lernsteuerung

Der mitgelieferte Referenzkatalog heißt Open English WordNet. Für alle 32 mitgelieferten Substantiv-Pluralformen gibt es eigene Aufnahmen. Die Wiedergabe der gewählten Form löst jede Variante über Bezeichnung und bevorzugte Lesung auf; fehlende Formen werden niemals durch die Basisaufnahme ersetzt.
