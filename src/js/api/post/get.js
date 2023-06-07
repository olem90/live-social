import { API_POST, DEFAULT_POST_PARAMS } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function getPost(id = 0) {
    return await fetchWrapper(API_POST(id), "GET", DEFAULT_POST_PARAMS)
}