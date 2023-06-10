import { get } from "../api/post/index.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";
import { postDelete, react } from "../ui/listeners/index.js";

export async function postRoute(id) {
    authGuard();

    const postData = await get(id);

    await loadTemplate("post/page", postData);

    postDelete();
    react();
}