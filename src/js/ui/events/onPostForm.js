import { formHandler } from "../utilities/index.js";
import { redirect } from "../../router.js";
import { buttonLoader } from "../utilities/buttonLoader.js";
import { errorDialog } from "../dialog/error.js";
import { createPost } from "../../api/post/create.js";
import { updatePost } from "../../api/post/update.js";

export async function onPostForm(event = new SubmitEvent()) {
    const { title, media, tags, body } = formHandler(event);
    const submit = event.target.querySelector("button[type=submit]");
    const { resetButton } = buttonLoader(submit, "Submitting...");
    let id = event.target.id || "";

    try {
        if (id) {
            await updatePost(id, {
                title,
                media,
                tags,
                body
            })
        } else {
            const post = await createPost({
                title,
                media,
                tags,
                body
            })
            id = post.id;
        }
        redirect(`/post?id=${id}`);
    } catch (error) {
        resetButton();
        errorDialog(error);
    }
}