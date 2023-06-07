import { API_PROFILE_MEDIA, DEFAULT_PROFILE_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function updateProfile(id, { banner, avatar }) {
    return await fetchWrapper(API_PROFILE_MEDIA(id), "PUT", DEFAULT_PROFILE_PARAMS, { banner, avatar })
}