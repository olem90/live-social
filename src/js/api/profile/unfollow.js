import { API_PROFILE_UNFOLLOW } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function unfollowProfile(name) {
    return await fetchWrapper(API_PROFILE_UNFOLLOW(name), "PUT")
}