import { formHandler } from "../utilities/index.js";
import { register } from "../../api/auth/register.js";
import { redirect } from "../../router.js";
import { buttonLoader } from "../utilities/buttonLoader.js";

export async function onRegister(event = new SubmitEvent()) {
    const { email, password, name, banner, avatar } = formHandler(event);
    const submit = event.target.querySelector("button[type=submit]");
    buttonLoader(submit, "Registering...");
    await register(email, password, name, avatar, banner);
    redirect("/login");
}