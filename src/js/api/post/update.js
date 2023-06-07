import { API_POST, DEFAULT_POST_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function updatePost(id, postData) {
    return fetchWrapper(API_POST(id), "PUT", DEFAULT_POST_PARAMS, postData)
}