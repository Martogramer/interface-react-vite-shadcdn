import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./createRouter";

const RoutesLayout: React.FC = () => {
  return (
    <>
        <RouterProvider router={router} />
    </>
  );
};

export default RoutesLayout;
