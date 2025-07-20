import React, { useEffect } from "react";
import Sidenav from "./Sidenav";

const SideDrawer = ({ isOpen, onClose }) => {
  // Close drawer on pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      {/* Drawer Content */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 flex flex-col">
        <button
          className="self-end m-4 text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={onClose}
          aria-label="Close drawer"
        >
          &#x2715; {/* simple cross icon */}
        </button>
        <div className="flex-grow overflow-y-auto px-4">
          <Sidenav />
        </div>
      </div>
    </>
  );
};

export default SideDrawer;
