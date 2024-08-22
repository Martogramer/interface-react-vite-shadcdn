import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarDemo } from "@/components/_Customs2024/navs/NavAce";

const LayoutStore: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-grow">
        <NavbarDemo />
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutStore;
