import { updateProfile } from "../../api/profile/update.js";
import { me } from "../../api/utilities/index.js";
import { redirect } from "../../router.js";
import { errorDialog } from "../dialog/error.js";
import { buttonLoader, formHandler } from "../utilities/index.js";

export async function onProfileForm(event = new SubmitEvent()) {
    const { avatar, banner } = formHandler(event);
    const { name } = me();
    const submit = document.querySelector("form.profile button[type=submit");
    const { resetButton } = buttonLoader(submit, "Submitting...");

    try {
        await updateProfile(name, { banner, avatar });
        redirect("/profile");
    } catch (error) {
        resetButton();
        errorDialog(error);
    }
}