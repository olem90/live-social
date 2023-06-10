import { get } from "../api/post/index.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";
import { postDeleteListener } from "../ui/listeners/postDeleteListener.js";

export async function postRoute(id) {
    authGuard();

    const postData = await get(id);

    await loadTemplate("post/page", postData)

    postDeleteListener();
}