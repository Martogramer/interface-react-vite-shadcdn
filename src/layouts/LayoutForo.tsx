import { VortexDemo } from "@/components/_Customs2024/backgrounds/VortexDemo";
import React from "react";
import { Outlet } from "react-router-dom";

const LayoutForo: React.FC = () => {
  return (
    <>
     <VortexDemo />
      <Outlet />
    </>
  );
};

export default LayoutForo;
