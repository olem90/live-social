import { loadTemplate } from "../template.js";
import { registerListener } from "../ui/listeners/registerListener.js";

export async function registerRoute() {
    const template = "register";
    await loadTemplate(template);
    registerListener();
    console.log("<Register>");
}