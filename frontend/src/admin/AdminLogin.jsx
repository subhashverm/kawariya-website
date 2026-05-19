import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/admin/analytics");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Admin Login
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border rounded-lg mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
