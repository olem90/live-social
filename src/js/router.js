import * as routes from "./routes/index.js";

export function router() {
    updateRoute()
    window.addEventListener("hashchange", ({ newURL }) => routeByURL(newURL));
}

export function authGuard() {
    if (!localStorage.token) {
        redirect("#/login")
    }
}

export function updateRoute() {
    routeByURL(window.location.href);
}

export function redirect(path = "") {
    path = path.charAt(0) === "#" ? path : `#${path}`;
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