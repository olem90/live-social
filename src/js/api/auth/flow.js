import { login } from "./login.js";
import { register } from "./register.js";

export async function flow(email, password, name, avatar, banner) {
    await register(email, password, name, avatar, banner);
    return await login(email, password)
}