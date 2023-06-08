import { formHandler } from "../utilities/index.js";
import { login } from "../../api/auth/login.js";
import { redirect } from "../../router.js";
import { buttonLoader } from "../utilities/buttonLoader.js";

export async function onLogin(event = new SubmitEvent()) {
    const { email, password } = formHandler(event);
    const submit = event.target.querySelector("button[type=submit]");
    buttonLoader(submit, "Logging in...")
    await login(email, password);
    redirect("/profile");
}