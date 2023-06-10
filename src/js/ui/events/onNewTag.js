export function onNewTag({ target } = new MouseEvent(), value = "") {
    const tags = target.parentElement;
    const tag = tags.querySelector(".tag").cloneNode(true)
    tag.querySelector("input").value = value.trim();
    tags.prepend(tag)
}