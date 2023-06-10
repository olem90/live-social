import { onPostDelete } from "../events/onPostDelete.js";
import { trySetEvent } from "../utilities/index.js";

export function postDeleteListener() {
    trySetEvent("[data-action=post-delete]", "click", onPostDelete)
}