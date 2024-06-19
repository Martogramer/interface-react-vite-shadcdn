import LazyImage from "@/components/_Customs2024/images/LazyImage";
import PostDetail from "@/components/forum/PostDetail";
import PostList from "@/components/forum/PostList";
import React from "react";

const Forum: React.FC = () => {
  const imageUrl =
  'https://images.unsplash.com/photo-1674673243921-9e6ab580431f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop';
  return (
    <div className="mx-auto max-w-sm">
      <LazyImage src={imageUrl} />
      <PostDetail />
      <PostList />
    </div>
  );
};

export default Forum;
