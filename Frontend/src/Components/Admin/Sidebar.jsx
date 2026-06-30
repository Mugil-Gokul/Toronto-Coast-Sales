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
    <aside
      className="
        sticky
        top-0
        flex
        h-screen
        w-20
        flex-col
        bg-slate-900
        text-white
        border-r
        border-slate-800
        transition-all
        duration-300
        lg:w-72
      "
    >
      {/* Logo */}

      <div
        className="
          flex
          h-24
          items-center
          justify-center
          border-b
          border-slate-800
          lg:block
          lg:p-6
        "
      >
        <Link to="/" className="group">
          <h1
            className="
              hidden
              text-2xl
              font-bold
              tracking-wide
              lg:block
            "
          >
            Toronto Coast
          </h1>

          <p
            className="
              hidden
              mt-1
              text-sm
              text-slate-400
              lg:block
            "
          >
            Truck Sales
          </p>

          {/* Mobile Logo */}

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-orange-500
              font-bold
              lg:hidden
            "
          >
            T
          </div>
        </Link>
      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-3 py-6 lg:px-4">
        <p
          className="
          mb-4
          hidden
          px-2
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-slate-500
          lg:block
          "
        >
          Main Menu
        </p>

        <div className="space-y-3">
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

        <div className="my-8 border-t border-slate-800" />

        <p
          className="
          mb-4
          hidden
          px-2
          text-xs
          font-semibold
          uppercase
          tracking-widest
          text-slate-500
          lg:block
          "
        >
          System
        </p>

        <SidebarItem to="/admin/settings" icon={Settings} label="Settings" />
      </div>

      {/* Logout */}

      <div className="border-t border-slate-800 p-3">
        <button
          onClick={handleLogout}
          title="Logout"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            px-3
            py-3
            text-red-400
            transition
            hover:bg-red-500
            hover:text-white
            lg:justify-start
            lg:px-4
          "
        >
          <LogOut size={20} />

          <span className="hidden lg:block">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
