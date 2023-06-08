import * as listeners from "./listeners/index.js";
import { authVisibility } from "./utilities/authVisibility.js";

export function ui() {
    authVisibility()
    listeners.navigate();
    listeners.logout();
}