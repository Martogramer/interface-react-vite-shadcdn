import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockPosts } from '@/mocks/posts';

interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  content: string;
  body?: string;
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId?: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postId) {
      const selectedPost = mockPosts.find(p => p.id === parseInt(postId));
      if (selectedPost) {
        setPost(selectedPost);
      } else {
        setPost(null);
      }
    } else {
      setPost(null); // Manejo de caso donde no hay postId
    }
  }, [postId]);


  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed">{post.body}</p>
      <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-lg shadow-md" />
    </div>
  );
};

export default PostDetail;
