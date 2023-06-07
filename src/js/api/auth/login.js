import { API_AUTH_LOGIN } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function login(email, password) {
    if (!email) throw new Error("Email is required to login");
    if (!password) throw new Error("Password is required to login");
    const { accessToken: token, ...profile } = await fetchWrapper(API_AUTH_LOGIN, "POST", {}, { email, password });
    localStorage.setItem("token", token);
    localStorage.setItem("profile", JSON.stringify(profile))
    return profile
}