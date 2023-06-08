export function trySetEvent(selector, eventType, listener = () => {}) {
    const targets = document.querySelectorAll(selector);
    console.log(targets, selector);
    targets.forEach(target => {
        target.addEventListener(eventType, listener)
    })
}