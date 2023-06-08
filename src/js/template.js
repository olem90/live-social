export async function loadTemplate(name = "notFound", target = document.body) {
    const response = await fetch(`/src/html/${name}.html`);
    const html = await response.text();
    target.innerHTML = html;
}