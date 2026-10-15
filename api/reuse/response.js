/** Read a Fetch response without buffering more than the byte limit. */
export async function readBoundedBytes(response, maxBytes = 1_000_000) {
    const declaredLength = Number(response.headers?.get("content-length"));
    if (declaredLength > maxBytes) {
        await response.body?.cancel();
        throw new Error("response_too_large");
    }
    if (!response.body) return new Uint8Array();
    const reader = response.body.getReader();
    const chunks = [];
    let received = 0;
    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            received += value.byteLength;
            if (received > maxBytes) {
                await reader.cancel();
                throw new Error("response_too_large");
            }
            chunks.push(value);
        }
        const result = new Uint8Array(received);
        let offset = 0;
        for (const chunk of chunks) {
            result.set(chunk, offset);
            offset += chunk.byteLength;
        }
        return result;
    } finally {
        reader.releaseLock();
    }
}

export async function readBoundedText(response, maxBytes = 1_000_000) {
    return new TextDecoder().decode(await readBoundedBytes(response, maxBytes));
}
