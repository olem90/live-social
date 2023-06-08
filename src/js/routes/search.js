import { loadTemplate } from "../template.js";

export async function searchRoute(query) {
    const template = "search";
    await loadTemplate(template, { query });
    console.log(`<Search query="${query}">`);
}