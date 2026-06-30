import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "./Api";
import logo from "../assets/TCT-Logo.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await Api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);

      navigate("/admin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <button onClick={() => navigate("/")} className="cursor-pointer">
            <img
              src={logo}
              alt="TCT Logo"
              className="w-36 hover:scale-105 transition duration-300"
            />
          </button>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>

            <p className="text-gray-500 mt-2">
              Sign in to manage your dashboard
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 px-4 py-3 rounded-lg mb-5 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full px-4 py-3
                  rounded-xl
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black
                  transition
                "
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full px-4 py-3
                  rounded-xl
                  border border-gray-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black
                  transition
                "
                required
              />
            </div>

            <button
              disabled={loading}
              className="
                w-full
                bg-black
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-gray-800
                transition
                duration-300
                disabled:opacity-60
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
