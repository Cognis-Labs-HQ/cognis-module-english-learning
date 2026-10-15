export function addSpellingReferences(suggestions, alphabetRecords) {
    const alphabet = new Map(
        alphabetRecords.map((record) => [record.label, record.id]),
    );
    for (const suggestion of suggestions) {
        if (suggestion.references) continue;
        const letters = [...suggestion.label.replaceAll(" ", "")];
        if (letters.every((letter) => alphabet.has(letter)))
            suggestion.references = letters.map((letter, position) => ({
                entryId: alphabet.get(letter),
                relation: "spelling",
                position,
            }));
    }
}
