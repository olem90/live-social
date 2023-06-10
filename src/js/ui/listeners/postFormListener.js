import { postForm } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function postFormListener() {
    trySetEvent("form.post", "submit", postForm);
}