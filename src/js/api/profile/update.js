import { API_PROFILE_MEDIA, DEFAULT_PROFILE_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function updateProfile(name, { banner, avatar }) {
    const profile = await fetchWrapper(API_PROFILE_MEDIA(name), "PUT", DEFAULT_PROFILE_PARAMS, { banner, avatar })
    localStorage.setItem("profile", JSON.stringify(profile));
    return profile;
}