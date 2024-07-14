// src/components/BlogPostDetail.tsx

import { mockBlogPosts } from '@/mocks/mocks';
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = mockBlogPosts.find(p => p.id === Number(id));

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <div>
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogPostDetail;