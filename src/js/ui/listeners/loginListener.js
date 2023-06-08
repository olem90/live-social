import { onLogin } from "../events/index.js";

export function loginListener() {
    const target = document.querySelector("form.login");
    if (target) {
        target.addEventListener("submit", onLogin)
    } else {
        // redirect to an error page?
    }
}