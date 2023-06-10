import { redirect } from "../../router.js";

export function onNavigate(event = new MouseEvent()) {
    const target = event.target.closest("a");
    if (target) {
        const url = new URL(target.href);
        if (url.hostname === location.hostname) {
            console.log("Navigate");
            event.preventDefault();
            redirect(url.pathname + url.search)
        }
    }
}