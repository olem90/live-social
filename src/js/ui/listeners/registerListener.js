import { onRegister } from "../events/index.js";
import { trySetEvent } from "../utilities/trySetEvent.js";

export function registerListener() {
    trySetEvent("form.register", "submit", onRegister);
}