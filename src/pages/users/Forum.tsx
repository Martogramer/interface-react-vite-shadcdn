import ImageContainer from "@/components/_Customs2024/images/LazyImage";
import PostList from "@/components/forum/alternative/PostList";
import DetailUse from "@/features/filters/DetailUse";
import React from "react";

const Forum: React.FC = () => {
  return (
    <div className="mx-auto lg:mx-20 md:mx-10 ">
      <ImageContainer />
      
      <PostList />
      <DetailUse />
    </div>
  );
};

export default Forum;
