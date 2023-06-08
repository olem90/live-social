import { loadTemplate } from "../template.js";

export async function registerRoute() {
    const template = "register";
    await loadTemplate(template);
    console.log("<Register>");
}