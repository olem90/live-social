import { onNavigate } from "../events/onNavigate.js"

export function navigateListener() {
    document.addEventListener("click", onNavigate)
}