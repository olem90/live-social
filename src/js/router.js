import * as routes from "./routes/index.js";

export function router() {
    routeByURL(window.location.href);
    window.addEventListener("hashchange", ({ newURL }) => routeByURL(newURL));
}

function stripHash(input = "") {
    return input.replace(/#/gm, "")
}

function routeByURL(url) {
    url = new URL(url);
    route(stripHash(url.hash));
}

async function route(location) {
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
            return await routes.profile()
        default:
            return await routes.notFound()
    }
}