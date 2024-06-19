import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';
import Pagination from './Pagination';
import { mockPosts } from '@/mocks/posts';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  useEffect(() => {
    setPosts(mockPosts);
  }, []);

  const deletePost = (id: number) => {
    setPosts(mockPosts.filter(post => post.id !== id));
  };

  const selectPost = (post: Post) => {
    console.log(post)
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="p-4">
      {currentPosts.map((post) => (
        <div key={post.id} className="mb-4 p-4 border rounded shadow-sm">
          <PostCard post={post} />
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => deletePost(post.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={() => selectPost(post)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View
            </button>
          </div>
        </div>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PostList;
