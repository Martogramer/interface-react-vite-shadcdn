import NavbarUsers from "@/components/navs/NavbarUsers";
import SidebarUsers from "@/components/navs/SidebarUsers";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <>
      <NavbarUsers />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8">
        <SidebarUsers />
        <Outlet />
      </div>
    </>
  );
};

export default LayoutUser;
