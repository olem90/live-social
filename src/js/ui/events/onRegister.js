import { formHandler } from "../utilities/index.js";
import { register } from "../../api/auth/register.js";
import { redirect } from "../../router.js";

export async function onRegister(event = new SubmitEvent()) {
    const { email, password, name, banner, avatar } = formHandler(event);
    await register(email, password, name, avatar, banner);
    redirect("/login");
}