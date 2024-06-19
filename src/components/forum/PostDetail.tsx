import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockPosts } from '@/mocks/posts';

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const post = mockPosts.find(p => p.id );
    setPost(post || null);
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
