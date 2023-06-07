import { API_AUTH_REGISTER } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function register(email, password, name, avatar, banner) {
    if (!email) throw new Error("Email is required to register");
    if (!password) throw new Error("Password is required to register");
    if (!name) throw new Error("Name is required to register");
    return await fetchWrapper(API_AUTH_REGISTER, "POST", {}, { email, password, name, avatar, banner });
}