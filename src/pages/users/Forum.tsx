import { VortexDemo } from "@/components/_Customs2024/backgrounds/VortexDemo";
import DetailUse from "@/features/filters/DetailUse";
import React from "react";

const Forum: React.FC = () => {
  return (
    <div className="mx-auto lg:mx-20 md:mx-10 ">
      {/* <ImageContainer /> */}
       <VortexDemo />
    <div className="mx-auto lg:mx-20 md:mx-10 ">
      <DetailUse />
      {/* <PostList /> */}
    </div>
    </div>
  );
};

export default Forum;
