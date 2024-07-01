import React, { useState, useEffect } from 'react';
import { mockPosts } from '@/mocks/posts';

interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
  body?: string;
}

interface PostDetailProps {
  postId: number;
}

const PostDetail: React.FC<PostDetailProps> = ({ postId }) => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const selectedPost = mockPosts.find(p => p.id === postId);
    setPost(selectedPost || null);
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed">{post.content}</p> <br/>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
      <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-lg shadow-md" />
    </div>
  );
};

export default PostDetail;