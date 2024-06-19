import React, { useState } from "react";
import PostCard from "./PostCard";
import { mockPosts } from "@/mocks/posts";
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 2;

const PostList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = mockPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2">
        {currentPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {Array.from({ length: Math.ceil(mockPosts.length / POSTS_PER_PAGE) }).map(
          (_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 border rounded ${
                currentPage === index + 1 ? "bg-gray-300" : "bg-white"
              }`}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
};

export default PostList;
