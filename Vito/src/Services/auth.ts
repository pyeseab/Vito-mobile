import { apiFetch } from "./api";

export function login(email: string, password: string) {
  return apiFetch("/api/users/verify", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}
import { apiFetch } from "./api";

export async function login(username: string, password: string) {
  return apiFetch(
    `/api/users/verify?username=${username}&password=${password}`,
    { method: "POST" }
  );
}

export async function signup(
  username: string,
  password: string,
  email?: string
) {
  return apiFetch(
    `/api/users?username=${username}&password=${password}&email=${email ?? ""}`,
    { method: "POST" }
  );
}
