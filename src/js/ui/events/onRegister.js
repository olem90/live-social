import { formHandler } from "../utilities/index.js";
import { register } from "../../api/auth/register.js";
import { redirect } from "../../router.js";
import { buttonLoader } from "../utilities/buttonLoader.js";
import { errorDialog } from "../dialog/error.js";

export async function onRegister(event = new SubmitEvent()) {
    const { email, password, name, banner, avatar } = formHandler(event);
    const submit = event.target.querySelector("button[type=submit]");
    const { resetButton } = buttonLoader(submit, "Registering...");

    try {
        await register(email, password, name, avatar, banner);
        redirect("/login");
    } catch (error) {
        resetButton();
        errorDialog(error);
    }
}