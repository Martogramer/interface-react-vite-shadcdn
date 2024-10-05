import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockDocs, DocumentationItem } from "@/mocks/mockDocs";


const DetailDocumentation: React.FC = () => {
  const [docs, setDocs] = useState<DocumentationItem[]>([]);

  useEffect(() => {
    // Simula la llamada a un servicio para obtener los elementos de la documentación
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDocs(mockDocs);
    };
    fetchData();
  }, []);


  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
      <div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {docs.map((doc) => (
            <Link
              key={doc.id}
              to={`/colaboradores/docs/${doc.id}`}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
            >
              {/* Título del documento */}
              <h2 className="text-xl font-bold mb-2">
                {doc.title || "Documento sin título"}
              </h2>

              {/* Descripción corta del documento */}
              <p className="text-gray-600">
                {doc.elements
                  .find((el) => el.type === "paragraph")
                  ?.content.substring(0, 100) || "Descripción no disponible"}...
              </p>

              {/* Información adicional (autor y fecha de publicación) */}
              <p className="text-sm text-gray-500 mt-2">
                Por {doc.author} | {doc.publishDate}
              </p>

              {/* Etiquetas de los documentos */}
              <div className="mt-2">
                {doc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailDocumentation;
