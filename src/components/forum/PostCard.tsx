import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div>
      <h3 className="text-xl font-bold">{post.title}</h3>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostCard;
