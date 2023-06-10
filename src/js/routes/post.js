import { get } from "../api/post/index.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";

export async function postRoute(id) {
    authGuard();

    const postData = await get(id);

    loadTemplate("post/page", postData)
}