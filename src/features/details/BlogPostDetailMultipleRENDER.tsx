import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  mockBlogPostsMultiple,
  BlogPostMultiple,
  BlogPostElement,
} from "@/mocks/mocks";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

const BlogPostDetailMultipleRENDER: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostMultiple | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [titles, setTitles] = useState<{ id: string; content: string }[]>([]);
  const [isIndexVisible, setIsIndexVisible] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const foundPost = mockBlogPostsMultiple.find(
          (p) => p.id === Number(id)
        );
        if (foundPost) {
          setPost(foundPost);
          const extractedTitles = foundPost.elements
            .filter((element) => element.type === "title")
            .map((title, index) => ({
              id: `title-${index}`,
              content: title.content,
            }));
          setTitles(extractedTitles);
        } else {
          setError("Post no encontrado");
        }
      } catch (err) {
        setError("Error al cargar el post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      //const scrollPosition = window.scrollY;
      titles.forEach((title) => {
        const element = document.getElementById(title.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top >= 0 && top <= window.innerHeight / 2) {
            document
              .querySelector(`a[href="#${title.id}"]`)
              ?.classList.add("font-bold", "text-blue-600");
          } else {
            document
              .querySelector(`a[href="#${title.id}"]`)
              ?.classList.remove("font-bold", "text-blue-600");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [titles]);

  if (loading) return <div className="text-center py-4">Cargando...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">{error}</div>;
  if (!post) return null;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  const renderElement = (element: BlogPostElement, index: number) => {
    switch (element.type) {
      case "title":
        const titleId = `title-${titles.findIndex(
          (t) => t.content === element.content
        )}`;
        return (
          <h2 id={titleId} key={index} className="text-2xl font-bold mb-4">
            {element.content}
          </h2>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-4">
            {element.content}
          </p>
        );
      case "image":
        return (
          <img
            key={index}
            src={element.content}
            alt="Post image"
            className="w-full h-auto mb-4 rounded"
          />
        );
      case "code":
        return (
          <div key={index} className="mb-4">
            <SyntaxHighlighter
              language={element.language || "javascript"}
              style={okaidia}
            >
              {element.content}
            </SyntaxHighlighter>
          </div>
        );
      case "link":
        return (
          <Link
            key={index}
            to={element.url || "#"}
            className="text-blue-500 hover:text-blue-700 mb-4 w-full h-full"
          >
            {element.content}
          </Link>
        );
      default:
        return null;
    }
  };
  const toggleIndex = () => {
    setIsIndexVisible(!isIndexVisible);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <a
        onClick={toggleIndex}
        className="md:hidden cursor-pointer text-blue-500 px-4 py-2 rounded mb-4"
      >
        {isIndexVisible ? "Cerrar índice" : "Índice"}
      </a>
      {/* Barra lateral con índice */}
      <aside
        className={` md:w-64 md:h-screen md:sticky md:top-0 p-4 overflow-y-auto transition-all duration-300 ease-in-out ${
          isIndexVisible ? "max-h-screen" : "max-h-0 md:max-h-screen"
        }`}
      >
        <ul>
          {titles.map((title, index) => (
            <li key={index} className=" mt-5 mb-2">
              <a
                href={`#${title.id}`}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                onClick={() => setIsIndexVisible(false)}
              >
                {title.content}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido principal */}
      <article className="flex-3 mt-1 bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <Link
          to="/foro/@marto"
          className="text-blue-500 hover:text-blue-700 mb-4 inline-block"
        >
          &larr; Volver a la lista de posts
        </Link>
        {post.image && (
          <img
            src={post.image}
            alt="Post header"
            className="w-full h-64 object-cover mb-4 rounded"
          />
        )}
        <h1 className="text-3xl font-bold mb-4">{post.elements[0].content}</h1>
        <div className="mb-4 text-gray-600">Por
          <a className="text-blue-500 hover:text-blue-700 transition-colors duration-200"> {post.author} </a> |
          <time dateTime={post.publishDate}>
            {' '}{formatDate(post.publishDate)}
          </time>
        </div>

        <div className="prose max-w-none mb-6">
          {post.elements.map((element, index) => renderElement(element, index))}
        </div>
        <div className="mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPostDetailMultipleRENDER;
