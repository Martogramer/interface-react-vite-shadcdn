import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const LayoutUserAdmin: React.FC = () => {
  return (
    <div>
      <div className="relative md:ml-12 bg-black-600 hover:backdrop-blur-0 border-zinc-100">
        <p>Ruta layout admin</p>
        <NavLink to="/">user</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutUserAdmin;
