import React from "react";
import { Outlet } from "react-router-dom";

const LayoutCollabs: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutCollabs;
