import SidebarShad from "@/components/navs/SidebarShad";
import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LayoutUser: React.FC = () => {
  return (
    <>
      <SidebarShad />
      <div className="pt-20">
        <Outlet />
      </div>
    </>
  );
};

export default LayoutUser;
