import { NavLink } from "react-router-dom";

const SidebarItem = ({ to, icon: Icon, label }) => {
  return (
    <NavLink
      to={to}
      title={label}
      className={({ isActive }) =>
        `
        group
        flex
        items-center
        justify-center
        gap-3
        rounded-xl
        px-3
        py-3
        transition-all
        duration-300
        lg:justify-start
        lg:px-4

        ${
          isActive
            ? "bg-orange-500 text-white shadow-lg"
            : "text-gray-300 hover:bg-slate-800 hover:text-white"
        }
        `
      }
    >
      <Icon size={21} className="transition group-hover:scale-110" />

      <span className="hidden font-medium lg:block">{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
