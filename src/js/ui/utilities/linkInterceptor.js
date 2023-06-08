import { redirect } from "../../router.js"

export function linkInterceptor() {
    document.addEventListener("click", event => {
        if (event.target.tagName === "A") {
            const url = new URL(event.target.href)
            if (url.hostname === location.hostname) {
                event.preventDefault()
                redirect(url.pathname)
            }
        }
    })
}