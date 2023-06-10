export function formHandler(event = new SubmitEvent()) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    Object.keys(data).filter(key => key.charAt(0) === "[" && key.charAt(key.length - 1) === "]").map(key => {
        return {
            oldKey: key,
            newKey: key.replace(/[\[\]]/gm, ""),
            values: formData.getAll(key).filter(Boolean)
        }
    }).forEach(({ oldKey, newKey, values }) => {
        delete data[oldKey];
        data[newKey] = values;
    })
    return data;
}