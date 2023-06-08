import { loadTemplate } from "../template.js";
import { loginListener } from "../ui/listeners/loginListener.js";

export async function loginRoute() {
    const template = "login";
    await loadTemplate(template);
    loginListener();
    console.log("<Login>");
}