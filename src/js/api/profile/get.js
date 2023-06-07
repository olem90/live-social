import { API_PROFILE, DEFAULT_PROFILE_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function getProfile(id = 0) {
    return await fetchWrapper(API_PROFILE(id), "GET", DEFAULT_PROFILE_PARAMS)
}