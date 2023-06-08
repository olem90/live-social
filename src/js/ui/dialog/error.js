export function errorDialog(text = "") {
    const dialog = document.querySelector("dialog#error");
    const message = dialog.querySelector(".message");
    message.innerText = text;
    dialog.showModal();
}