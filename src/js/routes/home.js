import { loadTemplate } from "../template.js";

export async function homeRoute() {
    loadTemplate("home");
    console.log("<Home>");
}