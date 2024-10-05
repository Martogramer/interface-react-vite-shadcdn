import DetailDocumentation from "@/features/details/DetailDocumentation";
import React from "react";
import { Outlet } from "react-router-dom";

const Docs: React.FC = () => {
  return (
    <>
      Docs
      <DetailDocumentation />
      <Outlet />
    </>
  );
};

export default Docs;
