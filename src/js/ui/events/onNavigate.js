import { redirect } from "../../router.js";
import { nearestAncestor } from "../utilities/nearestAncestor.js";

export function onNavigate(event = new MouseEvent()) {
    const target = nearestAncestor(event.target);
    if (target) {
        const url = new URL(target.href);
        if (url.hostname === location.hostname) {
            console.log("Navigate");
            event.preventDefault();
            redirect(url.pathname + url.search)
        }
    }
}