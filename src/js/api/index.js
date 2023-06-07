import * as authMethods from "./auth/index.js";
import * as postMethods from "./post/index.js";
import * as profileMethods from "./profile/index.js";

export default class SocialAPI {
    constructor(token = "") {
        this.token = token;
    }

    auth = authMethods
    post = postMethods
    profile = profileMethods
}