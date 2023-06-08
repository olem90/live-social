import { me } from "../api/utilities/index.js"
import { authGuard } from "../router.js";
import { loadTemplate } from "../template.js";

export async function profileRoute(name) {
    const template = "profile";
    const user = me();

    authGuard()

    if (!name) {
        name = user.name
    }

    loadTemplate(template)

    console.log(`<Profile name="${name}">`);
}