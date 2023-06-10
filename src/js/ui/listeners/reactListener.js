import { react } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function reactListener() {
    trySetEvent("button.react", "click", react)
}