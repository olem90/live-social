import { API_POSTS, API_PROFILE_POSTS, DEFAULT_POSTS_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function listPosts(options = DEFAULT_POSTS_PARAMS, user) {
    let endpoint = API_POSTS;

    if (user) {
        endpoint = API_PROFILE_POSTS(user);
    }

    return await fetchWrapper(endpoint, options);
}