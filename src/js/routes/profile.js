import { getProfile } from "../api/profile/get.js";
import { me } from "../api/utilities/index.js"
import { DEFAULT_PROFILE_PARAMS } from "../constants.js";
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";

export async function profileRoute(name) {
    const template = "profile";
    const user = me();

    authGuard()

    if (!name) {
        name = user.name
    }

    loadTemplate(template, user)

    const { posts } = await getProfile(name, {
        ...DEFAULT_PROFILE_PARAMS,
        _posts: true
    });

    posts.forEach(post => {
        loadTemplate("post/list", { ...post}, document.querySelector(".posts"), false);
    })
}