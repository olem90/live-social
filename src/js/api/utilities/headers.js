export function headers(body) {
    // Create an empty header object
    const headers = new Headers();

    const token = localStorage.getItem("token");

    // Check if this request has a body
    if (body) {
        // If it does, add a JSON content type    
        headers.append("Content-Type", "application/json");
    }

    // Check if the user is authed
    if (token) {
        // If they are, add the bearer token
        headers.append("Authorization", `Bearer ${token}`);
    }

    return headers;
}