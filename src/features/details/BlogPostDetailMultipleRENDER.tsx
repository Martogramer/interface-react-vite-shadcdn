import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogPostsMultiple, BlogPostMultiple, BlogPostElement } from '@/mocks/mocks';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPostDetailMultipleRENDER: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostMultiple | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const foundPost = mockBlogPostsMultiple.find(p => p.id === Number(id));
        if (foundPost) {
          setPost(foundPost);
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

  const renderElement = (element: BlogPostElement, index: number) => {
    switch (element.type) {
      case 'title':
        return <h2 key={index} className="text-2xl font-bold mb-4">{element.content}</h2>;
      case 'paragraph':
        return <p key={index} className="mb-4">{element.content}</p>;
      case 'image':
        return <img key={index} src={element.content} alt="Post image" className="w-full h-auto mb-4 rounded" />;
      case 'code':
        return (
          <div key={index} className="mb-4">
            <SyntaxHighlighter language={element.language || 'javascript'} style={okaidia}>
              {element.content}
            </SyntaxHighlighter>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
    <Link to="/usuarios/foro" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
      &larr; Volver a la lista de postsfor
    </Link>
    {post.image && <img src={post.image} alt="Post header" className="w-full h-64 object-cover mb-4 rounded" />}
    <h1 className="text-3xl font-bold mb-4">{post.elements[0].content}</h1>
    <div className="mb-4 text-gray-600">
      <span>Por {post.author} | </span>
      <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
    </div>
    <div className="prose max-w-none mb-6">
      {post.elements.slice(1).map((element, index) => renderElement(element, index))}
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

export default BlogPostDetailMultipleRENDER;