import { router } from "./router.js";

async function app() {
    await router();
}

app();