import { me } from "../api/utilities/index.js"
import { authGuard } from "../router.js";

export async function profileRoute(name) {
    const user = me();

    authGuard()

    if (!name) {
        name = user.name
    }

    console.log(`<Profile name="${name}">`);
}