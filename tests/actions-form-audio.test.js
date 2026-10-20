import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const words = await load("data/library/content/words/actions-001.json");
const forms = await load("data/library/content/words/actions-forms-001.json");
const inventory = await readAudioInventory("data/audio");
const expected = {
    jump: [
        ["third-person", "jumps", "/dʒʌmps/"],
        ["past", "jumped", "/dʒʌmpt/"],
        ["present-participle", "jumping", "/ˈdʒʌmpɪŋ/"],
        ["past-participle", "jumped", "/dʒʌmpt/"],
    ],
    swim: [
        ["third-person", "swims", "/swɪmz/"],
        ["past", "swam", "/swæm/"],
        ["present-participle", "swimming", "/ˈswɪmɪŋ/"],
        ["past-participle", "swum", "/swʌm/"],
    ],
    laugh: [
        ["third-person", "laughs", "/lɑːfs/"],
        ["past", "laughed", "/lɑːft/"],
        ["present-participle", "laughing", "/ˈlɑːfɪŋ/"],
        ["past-participle", "laughed", "/lɑːft/"],
    ],
    cry: [
        ["third-person", "cries", "/kraɪz/"],
        ["past", "cried", "/kraɪd/"],
        ["present-participle", "crying", "/ˈkraɪɪŋ/"],
        ["past-participle", "cried", "/kraɪd/"],
    ],
};

for (const [key, variants] of Object.entries(expected)) {
    test(`actions ${key} forms have exact spelling, reading and audio bindings`, () => {
        const word = words.find(({ id }) => id === `en:word:actions-${key}`);
        const transform = schema.transformSets.find(
            ({ id }) => id === `actions-${key}-forms`,
        );
        assert.equal(word.class, "lexical:verb");
        assert.ok(transform.matchTags.every((tag) => word.tags.includes(tag)));
        assert.equal(transform.rules.length, variants.length);
        for (const [ruleId, label, reading] of variants) {
            const rule = transform.rules.find(({ id }) => id === ruleId);
            assert.equal(rule.removeSuffix, word.label);
            assert.equal(rule.append, label);
            assert.equal(
                rule.pronunciation.removeSuffix,
                word.fields.pronunciation[0],
            );
            assert.equal(rule.pronunciation.append, reading);
            assert.deepEqual(
                Object.keys(rule.definitionTransform.template.labels).sort(),
                ["de", "en", "id", "ja"],
            );
            const form = forms.find(
                (candidate) =>
                    candidate.label === label &&
                    candidate.class === "lexical:verb",
            );
            assert.equal(form.hidden, true);
            assert.deepEqual(form.fields.pronunciation, [reading]);
            const clip = inventory.recordings.find(({ variants: bindings }) =>
                bindings.some(
                    (binding) =>
                        binding.entryId === word.id &&
                        binding.setId === transform.id &&
                        JSON.stringify(binding.path) ===
                            JSON.stringify([ruleId]),
                ),
            );
            assert.ok(clip, `${key}/${ruleId}`);
            assert.equal(clip.text, label);
            assert.equal(clip.voiceId, "gJx1vCzNCD1EQHT212Ls");
            assert.equal(clip.path, form.fields.audio);
            assert.ok(
                clip.inputs.some(
                    (input) =>
                        input.label === label && input.readings[0] === reading,
                ),
            );
            assert.equal(
                clip.request.text,
                `<phoneme alphabet="ipa" ph="${reading.slice(1, -1)}">${label}</phoneme>.`,
            );
        }
    });
}
