import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img
                src="/images/pharmacare-logo.png"
                alt="Pharmacare Logo"
                className="h-13 w-auto"
              />
            </Link>
          </div>

          {/* Navbar links */}
          <div className="flex-1 flex justify-evenly">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
            >
              Facilities
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
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