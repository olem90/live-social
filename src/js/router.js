import * as routes from "./routes/index.js";

export function router() {
    const hash = window.location.hash;
    route(stripHash(hash))
    window.addEventListener("hashchange", ({ newURL, oldURL }) => {
        const url = new URL(newURL);
        route(stripHash(url.hash))
    })
}

function stripHash(input = "") {
    return input.replace(/#/gm, "")
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