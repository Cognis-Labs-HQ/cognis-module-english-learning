const ENGLISH = /^[\p{Script=Latin}\p{M}0-9 '’.,!?;:()\-]+$/u;
const IPA = /^\/[\p{Script=Latin}\p{M}θβχˈˌːˑ. ()-]+\/$/u;

export function speechText(input) {
    const label =
        typeof input.label === "string" && input.label.length <= 200
            ? input.label.normalize("NFC").trim()
            : "";
    if (!label || !ENGLISH.test(label)) return undefined;
    const reading = input.readings?.[0];
    if (reading === undefined || reading === "") return label;
    if (typeof reading !== "string" || reading.length > 200) return undefined;
    if (IPA.test(reading)) return label;
    const text = reading.normalize("NFC").trim();
    return text && ENGLISH.test(text) ? text : undefined;
}
