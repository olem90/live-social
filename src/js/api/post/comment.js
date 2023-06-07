import { API_POST_COMMENT } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function commentOnPost(id = 0, body, replyToId) {
    if (!body) throw new Error("A body is required to make a comment");
    return await fetchWrapper(API_POST_COMMENT(id), "POST", {}, { body, replyToId })
}