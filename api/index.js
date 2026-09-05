import path from "node:path";

export function ingestEnglishContentPack(library, moduleRoot) {
    return library.ingestContentPack(path.join(moduleRoot, "data"));
}
