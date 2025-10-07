

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Pharmacare
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-[#00E0BD] hover:underline ${
                  isActive ? "text-[#00E0BD] underline" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-[#00E0BD] hover:underline ${
                  isActive ? "text-[#00E0BD] underline" : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-[#00E0BD] hover:underline ${
                  isActive ? "text-[#00E0BD] underline" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-700 font-medium hover:text-[#00E0BD] hover:underline ${
                  isActive ? "text-[#00E0BD] underline" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;