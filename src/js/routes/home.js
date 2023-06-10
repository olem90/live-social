import { listPosts } from "../api/post/list.js";
import { loadTemplate } from "../template.js";

export async function homeRoute() {
    loadTemplate("home");
    const posts = await listPosts();
    
    posts.forEach(post => {
        loadTemplate("post/list", { ...post}, document.querySelector(".posts"), false);
    })
}