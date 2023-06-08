import { redirect } from "../../router.js";

export function onSearch(event = new SubmitEvent()) {
    event.preventDefault();
    const query = event.target.query.value;
    redirect(`/search?query=${query}`);
}