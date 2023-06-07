import { API_PROFILES, DEFAULT_PROFILES_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function listProfiles(options = DEFAULT_PROFILES_PARAMS) {
    return await fetchWrapper(API_PROFILES, "GET", options)
}