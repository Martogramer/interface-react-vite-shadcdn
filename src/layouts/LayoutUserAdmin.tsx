import React from "react";
import { Outlet } from "react-router-dom";

const LayoutUserAdmin: React.FC = () => {
  return (
    <div>
      <div className="relative md:ml-12 bg-black-600 hover:backdrop-blur-0 border-zinc-100">
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutUserAdmin;
