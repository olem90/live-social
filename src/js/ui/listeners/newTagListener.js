import { onNewTag } from "../events/onNewTag.js";
import { trySetEvent } from "../utilities/index.js";

export function newTagListener() {
    trySetEvent(".tags button", "click", onNewTag)
}