import { headers } from "./headers.js";
import { errorMessage } from "./errorMessage.js";

export async function fetchWrapper(endpoint, params = {}, body = null) {
    const url = new URL(endpoint);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(String(key), String(value))
    })

    const response = await fetch(url, {
        headers: headers(body),
        body
    });

    const data = await response.json();

    if (response.ok) {
        return data
    }

    throw new Error(errorMessage(data.errors))
}