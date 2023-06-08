import { ui } from "./ui/index.js";

export async function loadTemplate(name = "notFound", variables = {}, target = document.body.querySelector("main")) {
    if (!target) throw new Error("Target not found in the document");
    const response = await fetch(`/src/html/${name}.html`);
    const html = await response.text();
    target.innerHTML = replaceTemplateVariables(html, {...variables});
    ui()
}

export function replaceTemplateVariables(template = "", variables = {}) {
    return template.replace(/\{\{(\w+)\}\}/g, function(m, key) {
        return variables[key] || "";
    });
}