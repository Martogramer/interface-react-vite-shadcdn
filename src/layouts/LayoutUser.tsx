import NavbarUsers from "@/components/navs/NavbarUsers";
import SidebarShad from "@/components/navs/SidebarShad";
import React from "react";
import { Outlet } from "react-router-dom";
const LayoutUser: React.FC = () => {
  return (
    <>
      
      <SidebarShad />
      <Outlet />
    </>
  );
};

export default LayoutUser;
