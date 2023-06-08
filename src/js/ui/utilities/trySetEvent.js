export function trySetEvent(selector, eventType, listener = () => {}) {
    const targets = document.querySelectorAll(selector);
    targets.forEach(target => {
        target.addEventListener(eventType, listener)
    })
}