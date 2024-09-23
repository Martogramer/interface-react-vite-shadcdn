import React from "react";
import { Outlet } from "react-router-dom";

const LayoutForo: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutForo;
