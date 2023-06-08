import { search } from "../events/index.js";
import { trySetEvent } from "../utilities/index.js";

export function searchListener() {
    trySetEvent("form.search", "submit", search);
}