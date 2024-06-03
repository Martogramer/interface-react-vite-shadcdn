import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMobileMenu from "@/components/navs/store/SidebarMobileMenu";

const LayoutStore: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <SidebarMobileMenu />
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutStore;
