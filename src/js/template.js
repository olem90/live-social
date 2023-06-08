export async function loadTemplate(name = "notFound", variables = {}, target = document.body) {
    const response = await fetch(`/src/html/${name}.html`);
    const html = await response.text();
    target.innerHTML = replaceTemplateVariables(html, {...variables});
}

export function replaceTemplateVariables(template = "", variables = {}) {
    return template.replace(/\{\{(\w+)\}\}/g, function(m, key) {
        return variables[key] || "";
    });
}