const BASE_URL = "http://127.0.0.1:8000";

export async function apiFetch(
  path: string,
  options: RequestInit = {}
) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "API error");
  }

  return res.json();
}
