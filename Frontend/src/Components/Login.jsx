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

  const isLoggedIn = !!localStorage.getItem("adminToken");

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
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer transition hover:scale-105"
          >
            <img
              src={logo}
              alt="Toronto Coast Truck Sales"
              className="w-36"
            />
          </button>
        </div>

        {/* Login Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Admin Login
            </h2>

            <p className="mt-2 text-gray-500">
              Sign in to access the admin dashboard
            </p>
          </div>

          {/* Already Logged In */}
          {isLoggedIn && (
            <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4">
              <p className="text-sm font-medium text-green-700">
                ✅ You are already logged in.
              </p>

              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="
                  mt-4
                  w-full
                  rounded-xl
                  bg-green-600
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-green-700
                "
              >
                Go to Dashboard
              </button>
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            {/* Email */}
            <div className="mb-5">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  transition-all
                  duration-300
                  focus:border-black
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black/10
                "
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-gray-300
                  px-4
                  py-3
                  transition-all
                  duration-300
                  focus:border-black
                  focus:outline-none
                  focus:ring-2
                  focus:ring-black/10
                "
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-black
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-gray-800
                disabled:cursor-not-allowed
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