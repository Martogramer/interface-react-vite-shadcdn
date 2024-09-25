import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogPosts } from '@/mocks/mocks';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  author: string;
  publishDate: string;
}

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const foundPost = mockBlogPosts.find(p => p.id === Number(id));
        if (foundPost) {
          setPost(foundPost as BlogPost);
        } else {
          setError('Post no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center py-4">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (!post) {
    return null;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <article className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <Link to="/usuarios/foro" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        &larr; Volver a la lista de posts
      </Link>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="mb-4 text-gray-600">
        <span>Por {post.author} | </span>
        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
      </div>
      <div className="prose max-w-none mb-6">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
      <div className="mt-4">
        {post.tags.map(tag => (
          <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default BlogPostDetail;