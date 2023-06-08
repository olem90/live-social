export function authVisibility() {
    document.querySelectorAll("[data-auth]").forEach(element => {
        const active = element.dataset.auth === "true";
        element.classList.toggle("d-none", active !== Boolean(localStorage.token));
    })
}