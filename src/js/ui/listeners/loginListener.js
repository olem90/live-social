import { onLogin } from "../events/index.js";
import { trySetEvent } from "../utilities/trySetEvent.js";

export function loginListener() {
    trySetEvent("form.login", "submit", onLogin);
}