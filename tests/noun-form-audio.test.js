import { assertFormRecording } from "./reuse/transformations.js";
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
    ["kitchen", "bowl", "bowls", "/bəʊlz/"],
    ["kitchen", "knife", "knives", "/naɪvz/"],
    ["kitchen", "pot", "pots", "/pɒts/"],
    ["kitchen", "pan", "pans", "/pænz/"],
    ["vegetables", "cabbage", "cabbages", "/ˈkæbɪdʒɪz/"],
    ["vegetables", "mushroom", "mushrooms", "/ˈmʌʃrʊmz/"],
    ["vegetables", "lettuce", "lettuces", "/ˈletɪsɪz/"],
    ["rooms", "bedroom", "bedrooms", "/ˈbedruːmz/"],
    ["rooms", "bathroom", "bathrooms", "/ˈbɑːθruːmz/"],
    ["rooms", "kitchen", "kitchens", "/ˈkɪtʃɪnz/"],
    ["rooms", "garden", "gardens", "/ˈɡɑːdnz/"],
    ["nature", "tree", "trees", "/triːz/"],
    ["nature", "forest", "forests", "/ˈfɒrɪsts/"],
    ["nature", "leaf", "leaves", "/liːvz/"],
    ["nature", "stone", "stones", "/stəʊnz/"],
    ["fixtures", "fridge", "fridges", "/frɪdʒɪz/"],
    ["fixtures", "oven", "ovens", "/ˈʌvnz/"],
    ["fixtures", "sink", "sinks", "/sɪŋks/"],
    ["fixtures", "shower", "showers", "/ˈʃaʊəz/"],
]) {
    test(`${base} plural spelling, IPA and recorded request agree`, async () => {
        const words = await load(
            `data/library/content/words/${theme}-001.json`,
        );
        const word = words.find(({ label }) => label === base);
        assertFormRecording(word, schema, inventory, "plural", plural, reading);
    });
}
