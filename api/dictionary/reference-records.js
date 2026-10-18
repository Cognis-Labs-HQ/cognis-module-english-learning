/** Combine source senses only when spelling and part of speech identify one card. */
export function mergeReferenceRecords(records) {
    const groups = new Map();
    for (const record of records) {
        for (const meaning of record.meanings) {
            const key = JSON.stringify([record.word, meaning.partOfSpeech]);
            let group = groups.get(key);
            if (!group) {
                group = {
                    ...record,
                    phonetics: [],
                    meanings: [{ ...meaning, definitions: [] }],
                };
                groups.set(key, group);
            }
            group.phonetics.push(...(record.phonetics ?? []));
            group.meanings[0].definitions.push(...meaning.definitions);
        }
    }
    return [...groups.values()];
}
