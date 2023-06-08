import { me } from "../api/utilities/me.js";
import { loadTemplate } from "../template.js";
import { login } from "../ui/listeners/index.js";

export async function loginRoute() {
    const user = me();
    const template = "login";
    await loadTemplate(template, user);
    login();
    console.log("<Login>");
}