export function registerCli({ registerCommand, apiClient }) {
  registerCommand({
    name: 'study-language-en:library',
    description: 'Print the English learning library snapshot.',
    async run() {
      return apiClient.get('/api/v1/modules/study-language-en/library/snapshot');
    },
  });
}
