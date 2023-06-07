export const NAMESPACE = "live-social";

export const API_BASE = "https://api.noroff.dev/api/v1/social/";
export const API_PATH_POSTS = "posts/";
export const API_PATH_POST = (id) => `${API_PATH_POSTS}${id}`;
export const API_POSTS = `${API_BASE}${API_PATH_POSTS}`;
export const API_POST = (id) => (`${API_POSTS}${id}`);
export const API_PATH_PROFILES = "profiles/";
export const API_PATH_PROFILE = (name) => (`${API_PATH_PROFILES}${name}`);
export const API_PATH_PROFILE_POSTS = (name) => (`${API_PATH_PROFILE(name)}/${API_PATH_POSTS}`);
export const API_PROFILES = `${API_BASE}${API_PATH_PROFILES}`;
export const API_PROFILE = (name) => (`${API_BASE}${API_PATH_PROFILE(name)}`);
export const API_PROFILE_POSTS = (name) => (`${API_PROFILE(name)}/${API_PATH_POSTS}`);

export const DEFAULT_POST_PARAMS = {
    _author: true,
    _reactions: true,
    _comments: true
}

export const DEFAULT_POSTS_PARAMS = {
    ...DEFAULT_POST_PARAMS,
    sort: "created",
    sortOrder: "desc",
    limit: 10,
    offset: 0,
    _tag: NAMESPACE
}
