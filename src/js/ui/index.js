import * as listeners from "./listeners/index.js";

export function ui() {
    listeners.navigate();
    listeners.logout();
}