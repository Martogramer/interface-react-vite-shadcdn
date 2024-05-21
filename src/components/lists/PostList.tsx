import React, { useEffect, useState } from 'react';
import { getPosts, deletePost } from '@/services/handlers/posts/postsActions';
import PostForm from '../forms/postForm';

const PostList: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleEdit = (post: any) => {
    setEditingPost(post);
  };

  const handleDelete = async (id: string) => {
    await deletePost(id);
    fetchPosts();
  };

  const handleSave = () => {
    setEditingPost(null);
    fetchPosts();
  };

  return (
    <div>
      <h1>Posts</h1>
      {editingPost ? (
        <PostForm post={editingPost} onSave={handleSave} />
      ) : (
        <PostForm onSave={handleSave} />
      )}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
