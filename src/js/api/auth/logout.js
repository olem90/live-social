import { redirect } from "../../router.js";

export function logout() {
    localStorage.removeItem("token");
    redirect("/login");
}