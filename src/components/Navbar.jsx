import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-30">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img
                src="/images/pharmacare-logo.png"
                alt="Pharmacare Logo"
                className="h-16 w-auto -mt-2"
              />
            </Link>
          </div>

          {/* Navbar links */}
          <div className="flex-1 flex justify-evenly">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
              style={{ fontFamily: 'Museo Sans, sans-serif' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
              style={{ fontFamily: 'Museo Sans, sans-serif' }}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
              style={{ fontFamily: 'Museo Sans, sans-serif' }}
            >
              Services
            </NavLink>
            <NavLink
              to="/facilities"
              className={({ isActive }) =>
                `text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
              style={{ fontFamily: 'Museo Sans, sans-serif' }}
            >
              Facilities
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg transition-colors duration-300 ${
                  isActive
                    ? "text-[#A996CA] underline"
                    : "text-gray-700 hover:underline"
                }`
              }
              style={{ fontFamily: 'Museo Sans, sans-serif' }}
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