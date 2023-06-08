import { formHandler } from "../utilities/index.js";
import { login } from "../../api/auth/login.js";
import { redirect } from "../../router.js";

export async function onLogin(event = new SubmitEvent()) {
    const { email, password } = formHandler(event);
    await login(email, password);
    redirect("/profile");
}