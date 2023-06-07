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

function route(location) {
    switch (location.toLocaleLowerCase()) {
        case "/":
            console.log("<HomePage>")
            break;
        case "/feed":
            console.log("<FeedPage>")
            break;
        default:
            console.log("<404>");
    }
}