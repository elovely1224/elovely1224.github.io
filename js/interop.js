export function getCurrentUrl() {
    return globalThis.window.location.href;
}

export function showAlert(message) {
    globalThis.alert(message);
}