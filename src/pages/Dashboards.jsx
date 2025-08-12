import { logoutUser } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboards() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
  <h1 className="text-4xl text-cyan-900 mb-6">Dashboard</h1>
  <button
    onClick={handleLogout}
    className="px-4 py-2 rounded-xl bg-red-900 text-black font-semibold"
  >
    Logout
  </button>
</div>

  );
}
