import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Truck,
  PlusCircle,
  Settings,
  LogOut,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login", { replace: true });
  };

  return (
    <aside className="flex h-screen sticky top-0 w-72 flex-col border-r border-slate-800 bg-slate-900 text-white">
      {/* Logo */}

      <div className="border-b border-slate-800 p-6">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-wide">Toronto Coast</h1>

          <p className="mt-1 text-sm text-slate-400">Truck Sales</p>
        </Link>
      </div>

      {/* Main Navigation */}

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          Main Menu
        </p>

        <div className="space-y-2">
          <SidebarItem
            to="/admin/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
          />

          <SidebarItem
            to="/admin/trucks"
            icon={Truck}
            label="Truck Inventory"
          />

          <SidebarItem
            to="/admin/add-truck"
            icon={PlusCircle}
            label="Add Truck"
          />
        </div>

        {/* Divider */}

        <div className="my-8 border-t border-slate-800"></div>

        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
          System
        </p>

        <div className="space-y-2">
          <SidebarItem to="/admin/settings" icon={Settings} label="Settings" />
        </div>
      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
