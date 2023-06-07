import * as postsMethods from "./posts/index.js";
import * as postMethods from "./post/index.js";

export default class SocialAPI {
    constructor(token = "") {
        this.token = token;
    }

    posts = postsMethods
    post = postMethods
}