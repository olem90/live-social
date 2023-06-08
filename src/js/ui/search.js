import { listPosts } from "../api/post/list.js";

export async function search(query) {
    const posts = await listPosts({
        limit: 100,
        _author: true
    });

    return searchPosts(query, posts);
}

export function searchPosts(query, posts) {
    function criteria(post = {
        title: "",
        tags: [""],
        body: ""
    }) {
        const titleMatches = post.title.includes(query);
        const tagsMatch = post.tags.includes(query);
        const bodyMatches = post.body && post.body.includes(query);
        return titleMatches || tagsMatch || bodyMatches;
    }

    return posts.filter(criteria)
}

