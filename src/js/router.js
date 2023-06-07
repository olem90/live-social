import * as routes from "./routes/index.js";
import { me } from "./api/utilities/me.js";

export function router() {
    updateRoute()
    window.addEventListener("hashchange", ({ newURL }) => routeByURL(newURL));
}

export function authGuard() {
    const user = me();
    if (!user || !user.name) {
        redirect("#/login")
    }
    throw new Error("401: Not Authorized")
}

export function updateRoute() {
    routeByURL(window.location.href);
}

export function redirect(path) {
    window.history.pushState("", undefined, path)
    updateRoute()
}

export function stripHash(input = "") {
    return input.replace(/#/gm, "")
}

export function extractQuery(input = "") {
    const [hash, search] = input.split("?")
    return {
        hash: stripHash(hash),
        params: new URLSearchParams(search)
    }
}

export function routeByURL(url) {
    url = new URL(url);
    const { hash, params } = extractQuery(url.hash)
    route(hash, params);
}

export async function route(location, params = new URLSearchParams()) {
    switch (location.toLocaleLowerCase()) {
        case "/":
            return await routes.home()
        case "/feed":
            return await routes.feed()
        case "/login":
            return await routes.login()
        case "/register":
            return await routes.register()
        case "/profile":
            return await routes.profile(params.get("name"))
        default:
            return await routes.notFound()
    }
}