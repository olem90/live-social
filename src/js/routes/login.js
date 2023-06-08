import { me } from "../api/utilities/me.js";
import { loadTemplate } from "../template.js";
import { loginListener } from "../ui/listeners/loginListener.js";

export async function loginRoute() {
    const user = me();
    const template = "login";
    await loadTemplate(template, user);
    loginListener();
    console.log("<Login>");
}