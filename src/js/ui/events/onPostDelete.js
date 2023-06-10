import { deletePost } from "../../api/post/delete.js";
import { redirect } from "../../router.js";

export async function onPostDelete({ target }) {
    const id = target.dataset.id;
    await deletePost(id)
    redirect("/profile");
}