import { loadTemplate } from "../template.js";

export async function loginRoute() {
    const template = "login";
    await loadTemplate(template);
    console.log("<Login>");
}