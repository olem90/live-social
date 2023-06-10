export function nearestAncestor(element = new HTMLElement(), tagName = "A") {
    while (element && (element.tagName !== tagName)) {
        element = element.parentElement;
    }
    return element;
}