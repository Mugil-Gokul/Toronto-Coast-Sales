import { useState } from "react";
import { Lock, User } from "lucide-react";

import Api from "../../Components/Api";

const Settings = () => {
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handlePasswordChange = async () => {
    try {
      setLoading(true);

      setMessage("");

      setError("");

      if (!currentPassword || !newPassword) {
        setError("Please fill all password fields.");

        return;
      }

      const token = localStorage.getItem("adminToken");

      await Api.put(
        "/settings/password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setMessage("Password changed successfully.");

      setCurrentPassword("");

      setNewPassword("");
    } catch (err) {
      setError(err.response?.data?.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-800">Settings</h1>

        <p className="mt-2 text-slate-500">
          Manage your admin account settings.
        </p>
      </div>

      {/* Profile */}

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3">
            <User className="text-blue-600" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Admin Profile</h2>

            <p className="text-sm text-slate-500">Current admin account.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Role</label>

            <input
              value="Administrator"
              readOnly
              className="
              w-full
              rounded-xl
              border
              bg-slate-50
              p-3
              "
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Access</label>

            <input
              value="Admin Only"
              readOnly
              className="
              w-full
              rounded-xl
              border
              bg-slate-50
              p-3
              "
            />
          </div>
        </div>
      </div>

      {/* Password */}

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-red-100 p-3">
            <Lock className="text-red-500" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Security</h2>

            <p className="text-sm text-slate-500">
              Change your admin password.
            </p>
          </div>
        </div>

        {message && (
          <div className="mb-4 rounded-xl bg-green-100 p-3 text-green-700">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-4 rounded-xl bg-red-100 p-3 text-red-700">
            {error}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="password"
            placeholder="Current password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="
            rounded-xl
            border
            p-3
            "
          />

          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="
            rounded-xl
            border
            p-3
            "
          />
        </div>

        <button
          onClick={handlePasswordChange}
          disabled={loading}
          className="
          mt-6
          rounded-xl
          bg-red-500
          px-6
          py-3
          font-semibold
          text-white
          hover:bg-red-600
          disabled:opacity-50
          "
        >
          {loading ? "Updating..." : "Change Password"}
        </button>
      </div>
    </div>
  );
};

export default Settings;
