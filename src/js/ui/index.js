import * as listeners from "./listeners/index.js";
import { authVisibility } from "./utilities/authVisibility.js";
import { ownerVisibility } from "./utilities/ownerVisibility.js";

export function ui() {
    authVisibility();
    ownerVisibility();
    listeners.navigate();
    listeners.logout();
    listeners.search();
}