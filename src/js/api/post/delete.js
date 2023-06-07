import { API_POST } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function deletePost(id) {
    return await fetchWrapper(API_POST(id), "DELETE")
}