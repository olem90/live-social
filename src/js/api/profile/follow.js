import { API_PROFILE_FOLLOW } from "../../constants.js";
import { fetchWrapper } from "../utilities/fetchWrapper.js";

export async function followProfile(name) {
    return await fetchWrapper(API_PROFILE_FOLLOW(name), "PUT")
}