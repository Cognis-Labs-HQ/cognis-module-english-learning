import assert from "node:assert/strict";

export function assertFormRecording(
    word,
    schema,
    inventory,
    ruleId,
    label,
    reading,
) {
    assert.ok(word);
    const set = schema.transformSets.find(
        (candidate) =>
            word.tags.includes(candidate.flag) &&
            candidate.matchTags.every((tag) => word.tags.includes(tag)) &&
            candidate.rules.some(
                (rule) => rule.id === ruleId && rule.forms?.[word.label],
            ),
    );
    assert.ok(set, `${word.id}/${ruleId}: missing grammatical family`);
    const rule = set.rules.find((candidate) => candidate.id === ruleId);
    const form = rule.forms[word.label];
    assert.equal(form.removeSuffix, word.label);
    assert.equal(form.append, label);
    assert.equal(form.pronunciation.removeSuffix, word.fields.pronunciation[0]);
    assert.equal(form.pronunciation.append, reading);
    assert.deepEqual(
        Object.keys(
            (form.definitionTransform ?? rule.definitionTransform).template
                .labels,
        ).sort(),
        ["de", "en", "id", "ja"],
    );
    const clip = inventory.recordings.find(({ variants }) =>
        variants.some(
            (binding) =>
                binding.entryId === word.id &&
                binding.setId === set.id &&
                JSON.stringify(binding.path) === JSON.stringify([ruleId]),
        ),
    );
    assert.ok(clip, `${word.id}/${ruleId}: missing recording`);
    assert.equal(clip.text, label);
    assert.equal(clip.voiceId, "gJx1vCzNCD1EQHT212Ls");
    assert.ok(
        clip.inputs.some(
            (input) => input.label === label && input.readings[0] === reading,
        ),
    );
    assert.equal(
        clip.request.text,
        `<phoneme alphabet="ipa" ph="${reading.slice(1, -1)}">${label}</phoneme>.`,
    );
}
