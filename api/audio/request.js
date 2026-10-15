import { readBoundedBytes, readBoundedText } from "../reuse/response.js";

const ENDPOINT = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const AUDIO_PATH = /^\/media\/pronunciations\/en\/[A-Za-z0-9_-]+\.mp3$/;

function recordingUrl(value) {
    if (typeof value !== "string" || !value) return null;
    let url;
    try {
        url = new URL(value, "https://api.dictionaryapi.dev");
    } catch {
        return null;
    }
    if (
        url.origin !== "https://api.dictionaryapi.dev" ||
        url.username ||
        url.password ||
        url.search ||
        url.hash ||
        !AUDIO_PATH.test(url.pathname)
    )
        return null;
    return url.href;
}

function normalizedReading(value) {
    return typeof value === "string"
        ? value
              .trim()
              .normalize("NFC")
              .replace(/^\/|\/$/g, "")
        : "";
}

export async function requestAudio(fetchImplementation, input, signal) {
    const label = input.label.trim().normalize("NFC");
    if (!/^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/.test(label) || label.length > 100)
        throw new Error("audio_not_found");
    const deadline = AbortSignal.timeout(15000);
    const requestSignal = signal
        ? AbortSignal.any([signal, deadline])
        : deadline;
    const options = { signal: requestSignal, redirect: "error" };
    const response = await fetchImplementation(
        `${ENDPOINT}${encodeURIComponent(label)}`,
        {
            ...options,
            headers: { accept: "application/json" },
        },
    );
    if (response.status === 404) throw new Error("audio_not_found");
    if (!response.ok)
        throw new Error("english_audio_dictionary_request_failed");
    const records = JSON.parse(await readBoundedText(response));
    if (!Array.isArray(records))
        throw new Error("english_audio_dictionary_response_invalid");
    const preferred = normalizedReading(input.readings?.[0]);
    const candidates = records
        .filter(
            (record) =>
                typeof record?.word === "string" &&
                record.word.toLowerCase() === label.toLowerCase(),
        )
        .flatMap((record) =>
            Array.isArray(record.phonetics) ? record.phonetics : [],
        );
    const selected = candidates.find(
        (candidate) =>
            (!preferred || normalizedReading(candidate?.text) === preferred) &&
            recordingUrl(candidate?.audio),
    );
    if (!selected) throw new Error("audio_not_found");
    const audioResponse = await fetchImplementation(
        recordingUrl(selected.audio),
        {
            ...options,
            headers: { accept: "audio/mpeg" },
        },
    );
    if (!audioResponse.ok) throw new Error("english_audio_download_failed");
    const mediaType = audioResponse.headers
        .get("content-type")
        ?.split(";", 1)[0]
        .trim()
        .toLowerCase();
    if (mediaType !== "audio/mpeg") {
        await audioResponse.body?.cancel();
        throw new Error("invalid_audio_recording");
    }
    const data = await readBoundedBytes(audioResponse, 2_000_000);
    if (!(
        String.fromCharCode(...data.subarray(0, 3)) === "ID3" ||
        (data[0] === 0xff && (data[1] & 0xe0) === 0xe0)
    ))
        throw new Error("invalid_audio_recording");
    return { mediaType, data };
}
