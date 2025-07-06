// lib/auth.ts

type DummyUser = {
  name: string;
  email: string;
  profilePic: string;
};

export const dummyUser: DummyUser = {
  name: "Rana Dev",
  email: "admin@prep.ai",
  profilePic: "/profile.jpg", // Put a dummy image in public folder
};

export function loginWithGoogle(): DummyUser {
  // This simulates the Google login response
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("user", JSON.stringify(dummyUser));
  return dummyUser;
}

export function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("user");
}

export function isLoggedIn(): boolean {
  return localStorage.getItem("loggedIn") === "true";
}

export function getCurrentUser(): DummyUser | null {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}
