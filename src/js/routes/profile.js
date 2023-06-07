import { me } from "../api/utilities/index.js";

export async function profileRoute(name) {
    const user = me();

    if (!name) {
        if (!user || !user.name) {
            // Redirect to login
        } else {
            name = user.name
        }
    }

    console.log(`<Profile name="${name}">`);
}