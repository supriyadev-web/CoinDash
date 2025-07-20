import { FaBars, FaUserTie } from "react-icons/fa";
import { useState } from "react";

const TopNav = ({ title, onOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white px-4 shadow-sm">
      <div className="max-w-7xl mx-auto h-16 flex items-center justify-between">
        {/* Hamburger icon for mobile */}
        <button
          onClick={onOpen}
          className="block lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>

        {/* Title */}
        <h1 className="text-2xl font-medium">{title}</h1>

        {/* User menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            aria-haspopup="true"
            aria-expanded={menuOpen}
          >
            <FaUserTie size={24} />
          </button>

          {menuOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-10">
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    // handle logout
                  }}
                >
                  Logout
                </button>
              </li>
              <li>
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    // handle support
                  }}
                >
                  Support
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
