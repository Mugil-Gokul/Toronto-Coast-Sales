import { User, Lock, Building2, Bell } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-4xl font-bold text-slate-800">Settings</h1>

        <p className="mt-2 text-slate-500">
          Manage your admin account and dealership preferences.
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

            <p className="text-sm text-slate-500">
              Update your account information.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">Name</label>

            <input
              value="Administrator"
              readOnly
              className="
              w-full
              rounded-xl
              border
              p-3
              bg-slate-50
              "
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">Email</label>

            <input
              value="admin@example.com"
              readOnly
              className="
              w-full
              rounded-xl
              border
              p-3
              bg-slate-50
              "
            />
          </div>
        </div>
      </div>

      {/* Security */}

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-xl bg-red-100 p-3">
            <Lock className="text-red-500" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">Security</h2>

            <p className="text-sm text-slate-500">Update your password.</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <input
            type="password"
            placeholder="Current password"
            className="rounded-xl border p-3"
          />

          <input
            type="password"
            placeholder="New password"
            className="rounded-xl border p-3"
          />
        </div>

        <button
          className="
          mt-6
          rounded-xl
          bg-red-500
          px-6
          py-3
          font-semibold
          text-white
          hover:bg-red-600
          "
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default Settings;
