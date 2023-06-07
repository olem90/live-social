import * as routes from "./routes/index.js";

export function router() {
    routeByURL(window.location.href);
    window.addEventListener("hashchange", ({ newURL }) => routeByURL(newURL));
}

function stripHash(input = "") {
    return input.replace(/#/gm, "")
}

function extractQuery(input = "") {
    const [hash, search] = input.split("?")
    return {
        hash: stripHash(hash),
        params: new URLSearchParams(search)
    }
}

function routeByURL(url) {
    url = new URL(url);
    const { hash, params } = extractQuery(url.hash)
    route(hash, params);
}

async function route(location, params = new URLSearchParams()) {
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