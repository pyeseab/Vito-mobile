const BASE_URL = "http://127.0.0.1:8000";

export async function apiFetch(path: string, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  return res.json();
}
const BASE_URL = "http://127.0.0.1:8000";

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
}
