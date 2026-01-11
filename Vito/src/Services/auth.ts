import { apiFetch } from "./api";

export interface AuthResponse {
  id: string;
  username: string;
  email?: string;
}

/**
 * Login user
 */
export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  return apiFetch("/api/users/verify", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Signup user
 */
export async function signup(
  username: string,
  password: string,
  email?: string
): Promise<AuthResponse> {
  return apiFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      email,
    }),
  });
}
