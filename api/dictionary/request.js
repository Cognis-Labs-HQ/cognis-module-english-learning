import { readBoundedText } from "../reuse/response.js";

export async function requestDictionary(fetchImplementation, url) {
    const response = await fetchImplementation(url, {
        headers: { accept: "application/json" },
        signal: AbortSignal.timeout(15000),
        redirect: "error",
    });
    if (!response.ok) {
        await response.body?.cancel();
        if (response.status === 404) return [];
        throw new Error("english_dictionary_request_failed");
    }
    const records = JSON.parse(await readBoundedText(response));
    if (!Array.isArray(records))
        throw new Error("english_dictionary_response_invalid");
    return records;
}
