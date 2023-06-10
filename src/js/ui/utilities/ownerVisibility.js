import { me } from "../../api/utilities/index.js";

export function ownerVisibility() {
    const user = me()
    document.querySelectorAll("[data-owner]").forEach(element => {
        const owner = element.closest("[data-author]").dataset.author;
        if (owner) {
            if (element.dataset.owner === String(user.name === owner)) {
                element.classList.add("active")
            }
        }
    })
}