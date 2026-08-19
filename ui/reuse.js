export function escapeHtml(value) {
  const element = document.createElement('span');
  element.textContent = String(value);
  return element.innerHTML;
}

export function showError(messageKey) {
  window.dispatchEvent(new CustomEvent('cognis:toast', {
    detail: { variant: 'error', messageKey },
  }));
}
