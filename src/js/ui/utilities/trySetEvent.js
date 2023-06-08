export function trySetEvent(selector, eventType, listener = () => {}) {
    const target = document.querySelector(selector);
    if (target) {
        target.addEventListener(eventType, listener)
    } else {
        // redirect to an error page?
    }
}