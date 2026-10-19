import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { readAudioInventory } from "../api/audio/inventory.js";

const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const schema = await load("data/library/schema.json");
const inventory = await readAudioInventory("data/audio");

for (const [theme, base, plural, reading] of [
    ["weather", "cloud", "clouds", "/klaʊdz/"],
    ["clothing", "shirt", "shirts", "/ʃɜːts/"],
    ["clothing", "dress", "dresses", "/ˈdresɪz/"],
    ["clothing", "sock", "socks", "/sɒks/"],
    ["clothing", "skirt", "skirts", "/skɜːts/"],
    ["tableware", "cup", "cups", "/kʌps/"],
    ["tableware", "plate", "plates", "/pleɪts/"],
    ["tableware", "spoon", "spoons", "/spuːnz/"],
    ["tableware", "fork", "forks", "/fɔːks/"],
    ["places", "library", "libraries", "/ˈlaɪbrəriz/"],
    ["places", "hospital", "hospitals", "/ˈhɒspɪtəlz/"],
    ["places", "supermarket", "supermarkets", "/ˈsuːpəmɑːkɪts/"],
    ["places", "restaurant", "restaurants", "/ˈrestrɒnts/"],
    ["care", "towel", "towels", "/ˈtaʊəlz/"],
    ["care", "toothbrush", "toothbrushes", "/ˈtuːθbrʌʃɪz/"],
    ["transport", "airplane", "airplanes", "/ˈeəpleɪnz/"],
    ["transport", "boat", "boats", "/bəʊts/"],
    ["transport", "taxi", "taxis", "/ˈtæksiz/"],
    ["transport", "motorcycle", "motorcycles", "/ˈməʊtəsaɪklz/"],
    ["school", "pencil", "pencils", "/ˈpenslz/"],
    ["school", "pen", "pens", "/penz/"],
    ["school", "notebook", "notebooks", "/ˈnəʊtbʊks/"],
    ["school", "ruler", "rulers", "/ˈruːləz/"],
    ["animals", "rabbit", "rabbits", "/ˈræbɪts/"],
    ["animals", "horse", "horses", "/ˈhɔːsɪz/"],
    ["animals", "cow", "cows", "/kaʊz/"],
    ["animals", "pig", "pigs", "/pɪɡz/"],
    ["furnishings", "sofa", "sofas", "/ˈsəʊfəz/"],
    ["furnishings", "lamp", "lamps", "/læmps/"],
    ["furnishings", "mirror", "mirrors", "/ˈmɪrəz/"],
    ["furnishings", "pillow", "pillows", "/ˈpɪləʊz/"],
    ["fruit", "peach", "peaches", "/ˈpiːtʃɪz/"],
    ["fruit", "pear", "pears", "/peəz/"],
    ["fruit", "watermelon", "watermelons", "/ˈwɔːtəmelənz/"],
    ["fruit", "pineapple", "pineapples", "/ˈpaɪnæplz/"],
]) {
    test(`${base} plural spelling, IPA and recorded request agree`, async () => {
        const words = await load(
            `data/library/content/words/${theme}-001.json`,
        );
        const word = words.find(({ label }) => label === base);
        const transform = schema.transformSets.find(
            ({ id }) => id === `noun-${base}`,
        );
        assert.ok(transform.matchTags.every((tag) => word.tags.includes(tag)));
        assert.ok(word.tags.includes(transform.optInTag));
        const rule = transform.rules.find(({ id }) => id === "plural");
        assert.equal(rule.removeSuffix, base);
        assert.equal(rule.append, plural);
        assert.equal(rule.pronunciation.append, reading);
        const clip = inventory.recordings.find(({ variants }) =>
            variants.some(
                (variant) =>
                    variant.entryId === word.id &&
                    variant.setId === transform.id &&
                    JSON.stringify(variant.path) === '["plural"]',
            ),
        );
        assert.ok(clip);
        assert.equal(clip.text, plural);
        assert.equal(
            clip.request.text,
            `<phoneme alphabet="ipa" ph="${reading.slice(1, -1)}">${plural}</phoneme>.`,
        );
        assert.ok(
            clip.inputs.some(
                (input) =>
                    input.label === plural && input.readings[0] === reading,
            ),
        );
        const forms = await load(
            `data/library/content/words/${theme}-forms-001.json`,
        );
        const form = forms.find(({ label }) => label === plural);
        assert.equal(form.hidden, true);
        assert.equal(form.fields.audio, clip.path);
        assert.deepEqual(form.fields.pronunciation, [reading]);
    });
}
