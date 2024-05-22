import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./createRouter";
import LayoutMain from "../layouts/LayoutMain";

const RoutesLayout: React.FC = () => {
  return (
    <>
      <LayoutMain>
        <RouterProvider router={router} />
      </LayoutMain>
    </>
  );
};

export default RoutesLayout;
