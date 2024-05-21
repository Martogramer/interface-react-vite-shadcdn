import React, { useState } from 'react';
import { createPost, updatePost } from '@/services/handlers/posts/postsActions';
import useAuthStore from '@/services/authState';

interface PostFormProps {
  post?: any;
  onSave: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSave }) => {
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  const { user } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = { title, content, userId: user?.id };
    if (post) {
      await updatePost(post.id, postData);
    } else {
      await createPost(postData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
