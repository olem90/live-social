import { profileForm } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function profileFormListener() {
    trySetEvent("form.profile", "submit", profileForm)
}