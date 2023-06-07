import * as authMethods from "./auth/index.js";
import * as postMethods from "./post/index.js";
import * as profileMethods from "./profile/index.js";

export default class SocialAPI {
    auth = authMethods
    post = postMethods
    profile = profileMethods
}