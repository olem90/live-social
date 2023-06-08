import { trySetEvent } from "../utilities/index.js";
import { logout } from "../../api/auth/logout.js";

export function logoutListener() {
    trySetEvent("button.logout", "click", logout);
}