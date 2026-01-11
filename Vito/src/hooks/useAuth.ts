import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  // add more as needed
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);

  function login(userData: User) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  return { user, login, logout, setUser };
}
