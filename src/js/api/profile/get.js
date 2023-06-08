import { API_PROFILE, DEFAULT_PROFILE_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function getProfile(name = "", params = DEFAULT_PROFILE_PARAMS) {
    if (!name) throw new Error("Profile name is required");
    return await fetchWrapper(API_PROFILE(name), "GET", params)
}