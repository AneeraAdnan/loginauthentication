const API_KEY = "reqres-free-v1";

export const loginUser = async (email, password) => {
  const res = await fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "x-api-key": API_KEY
    },
    body: JSON.stringify({ email, password }),
  });

  
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || "Login failed");
  }

  return res.json(); 
};



export const logoutUser = () => {
  localStorage.removeItem("token");
};

