import SidebarMobileMenu from "@/components/navs/user/SidebarMobileMenuUser";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutUser: React.FC = () => {
  return (
    <>
      <SidebarMobileMenu />
      <div className="pt-20">
          <Outlet />
      </div>
    </>
  );
};

export default LayoutUser;
