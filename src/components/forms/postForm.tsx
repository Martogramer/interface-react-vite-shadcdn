import React, { useState } from "react";
import { createPost, updatePost } from "@/services/handlers/posts/postsActions";
import useAuthStore from "@/services/authState";

interface PostFormProps {
  post?: any;
  onSave: () => void;
}

const PostForm: React.FC<PostFormProps> = ({ post, onSave }) => {
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuthStore();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const postData = { title, content, userId: user?.id };

    try {
      if (post) {
        await updatePost(post.id, postData);
      } else {
        await createPost(postData);
      }
      onSave();
    } catch (error) {
      setError(
        "Error al guardar la publicación. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default PostForm;
