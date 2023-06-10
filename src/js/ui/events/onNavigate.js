import { redirect } from "../../router.js";

export function onNavigate(event = new MouseEvent()) {
    if (event.target.tagName === "A") {
        const url = new URL(event.target.href);
        if (url.hostname === location.hostname) {
            event.preventDefault();
            redirect(url.pathname + url.search)
        }
    }
}