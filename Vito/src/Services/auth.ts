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


OR:
const API_URL = "http://localhost:5000"; // or your backend IP

export async function signup(
  username: string,
  password: string,
  email: string
) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  });

  if (!res.ok) {
    throw new Error("Signup failed");
  }

  return res.json();
}
