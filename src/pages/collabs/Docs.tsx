import React from "react";
import { Outlet } from "react-router-dom";

const Docs: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Docs;
