import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps locale keys synchronized", async () => {
    const locales = await Promise.all(
        ["en", "de", "id", "ja"].map((locale) =>
            readFile(`ui/languages/${locale}/strings.xml`, "utf8"),
        ),
    );
    const keys = (xml) =>
        [...xml.matchAll(/name="([^"]+)"/g)].map((match) => match[1]).sort();
    for (const locale of locales.slice(1))
        assert.deepEqual(keys(locale), keys(locales[0]));
});

test("ships a square PNG study icon declared in the manifest", async () => {
    const manifest = JSON.parse(await readFile("manifest.json", "utf8"));
    const icon = await readFile(manifest.assets.icon);
    assert.equal(icon.subarray(1, 4).toString(), "PNG");
    assert.equal(icon.readUInt32BE(16), icon.readUInt32BE(20));
    assert.ok(icon.readUInt32BE(16) >= 64);
});
