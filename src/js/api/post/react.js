import { API_POST_REACT } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function reactToPost(id = 0, symbol = "👍") {
    return await fetchWrapper(API_POST_REACT(id, symbol), "PUT")
}