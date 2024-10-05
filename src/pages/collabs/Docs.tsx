import React from "react";
import { Outlet } from "react-router-dom";

const Docs: React.FC = () => {
  return (
    <>
      Docs
      <Outlet />
    </>
  );
};

export default Docs;
