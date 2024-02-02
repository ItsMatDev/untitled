const baseURL = import.meta.env.VITE_BACKEND_URL;

const login = async (email, password) => {
  const response = await fetch(`${baseURL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error(`Erreur de réseau : ${response.status}`);
  }

  return response.json();
};

export default login;
