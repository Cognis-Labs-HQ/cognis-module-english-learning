export function registerCli({ registerCommand, apiClient }) {
    registerCommand({
        name: "study-language-en:library",
        description: "Print the English entries in the Study library.",
        async run() {
            return apiClient.get(
                "/api/v1/study/library/entries?scope=global&schemaId=english&layer=alphabet",
            );
        },
    });
}
