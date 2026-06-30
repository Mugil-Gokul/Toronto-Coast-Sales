import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";
import logo from "../assets/TCT-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Inventory", path: "/inventory" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/90 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Toronto Coast Truck Sales"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `
                text-sm font-semibold transition-all duration-300
                ${
                  isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"
                }
                `
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Login Button */}
        <div className="hidden lg:flex">
          <Link
            to="/login"
            className="
            flex items-center gap-2
            rounded-full
            bg-red-600
            px-6 py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-red-700
            hover:shadow-lg
            "
          >
            <LogIn size={17} />
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-800 lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
        lg:hidden
        overflow-hidden
        bg-white
        transition-all duration-300
        ${isOpen ? "max-h-[500px] border-t" : "max-h-0"}
        `}
      >
        <div className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `
                font-semibold
                ${isActive ? "text-red-600" : "text-gray-700"}
                `
              }
            >
              {item.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="
            flex items-center justify-center gap-2
            rounded-full
            bg-red-600
            py-3
            font-semibold
            text-white
            "
          >
            <LogIn size={17} />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
