import DetailUse from "@/features/filters/DetailUse";
import React from "react";
import { Outlet } from "react-router-dom";

const Forum: React.FC = () => {
  return (
    <div className="mx-auto lg:mx-20 md:mx-10 ">
      {/* <ImageContainer /> */}
      
      <div className="mx-auto lg:mx-20 md:mx-10 ">
        <Outlet />
        <DetailUse />
        {/* <PostList /> */}
      </div>
    </div>
  );
};

export default Forum;
