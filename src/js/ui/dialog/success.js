export function successDialog(text = "") {
    const dialog = document.querySelector("dialog#success");
    const message = dialog.querySelector(".message");
    message.innerText = text;
    dialog.showModal();
}