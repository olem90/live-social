import { API_POSTS, DEFAULT_POST_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function createPost(postData) {
    return await fetchWrapper(API_POSTS, "POST", DEFAULT_POST_PARAMS, postData)
}