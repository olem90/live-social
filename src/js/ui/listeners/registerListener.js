import { onRegister } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function registerListener() {
    trySetEvent("form.register", "submit", onRegister);
}