import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_gLwdAWtxjJJ6B3UQf8luf1OV5sXumpupQ&s"
                alt="Logo"
                className="h-8 w-auto"
              />
              <span className="text-white ml-2 font-bold">My App</span>
            </div>

            {/* Menu items (desktop) */}
            <div className="hidden sm:flex sm:space-x-4">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    : "text-green-300 hover:bg-green-700 hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                   : "text-green-300 hover:bg-green-700 hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contect"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                 : "text-green-300 hover:bg-green-700 hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                }
              >
               Contect
              </NavLink>

                <NavLink
                to="/userName"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                 : "text-green-300 hover:bg-green-700 hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                }
              >
               userName
              </NavLink>

              
                <NavLink
                to="/github"
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                 : "text-green-300 hover:bg-green-700 hover:text-green px-3 py-2 rounded-md text-sm font-medium"
                }
              >
               github
              </NavLink>
            
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/home"
              className="block text-white bg-gray-900 rounded-md px-3 py-2 text-base font-medium"
            >
              home
            </NavLink>
            <NavLink
              to="/about"
              className="block text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-base font-medium"
            >
              about
            </NavLink>
            <NavLink
              to="/contect"
              className="block text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2 text-base font-medium"
            >
              contect
            </NavLink>
     
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
