import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
          isActive
            ? "bg-orange-500 text-white shadow-md"
            : "text-gray-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;