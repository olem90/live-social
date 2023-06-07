import { NAMESPACE } from "../../constants.js";

export function listPosts(options = {
    sort: "created",
    sortOrder: "desc",
    limit: 10,
    offset: 0,
    _tag: NAMESPACE,
    _author: true,
    _reactions: true,
    _comments: true
}, user) {

    if (user) {
        // Use profile/name/posts endpoint
    } else {
        // Use posts endpoint
    }
}