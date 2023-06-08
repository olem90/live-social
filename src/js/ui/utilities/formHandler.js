export function formHandler(event = new SubmitEvent()) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    return data;
}