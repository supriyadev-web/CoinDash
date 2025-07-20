import React, { useState } from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for large screens */}
      <div className="hidden lg:flex">
        <Sidenav />
      </div>

      {/* Side drawer for smaller screens */}
      <SideDrawer isOpen={isOpen} onClose={onClose} />

      {/* Main content area */}
      <div className="flex-grow flex flex-col">
        <TopNav title={title} onOpen={onOpen} />

        <main
          className="overflow-x-hidden overflow-y-auto mt-6 mx-auto"
          style={{ maxWidth: "70rem", height: "calc(100vh - 88px)" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
