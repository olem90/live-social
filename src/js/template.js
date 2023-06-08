import { ui } from "./ui/index.js";
import { clearChildren } from "./ui/utilities/clearChildren.js";
import { parse } from "./ui/utilities/parse.js";

export async function loadTemplate(name = "notFound", variables = {}, target = document.body.querySelector("main"), replace = true) {
    if (!target) throw new Error("Target not found in the document");
    const response = await fetch(`/src/html/${name}.html`);
    const template = await response.text();
    const html = parse(replaceTemplateVariables(template, {...variables}));
    
    if (replace) {
        clearChildren(target)
    }

    target.append(html)
    ui()
}

export function replaceTemplateVariables(template = "", variables = {}) {
    return template.replace(/\{\{(\w+)\}\}/g, function(m, key) {
        return variables[key] || "";
    });
}