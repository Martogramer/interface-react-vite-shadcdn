
import React, { useState, useEffect, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

// Define una lista de componentes personalizados con su código y estructura
const customComponentsList = [
  {
    id: "buttonComponent",
    title: "Button Component",
    code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click Me!
</button>`,
    component: (
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me!
      </button>
    ),
  },
  {
    id: "cardComponent",
    title: "Card Component",
    code: `<div className="border border-gray-200 rounded-lg p-4 shadow">
  <h3 className="font-bold text-lg">Card Title</h3>
  <p className="text-gray-600">This is a simple card component.</p>
</div>`,
    component: (
      <div className="border border-gray-200 rounded-lg p-4 shadow">
        <h3 className="font-bold text-lg">Card Title</h3>
        <p className="text-gray-600">This is a simple card component.</p>
      </div>
    ),
  },
  // Agrega más componentes personalizados aquí
];

const CustomComponentsMultiRender: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null);

  // Reutiliza la lógica del índice de navegación
  const handleScroll = useCallback(() => {
    customComponentsList.forEach((component) => {
      const element = document.getElementById(component.id);
      if (element) {
        const { top } = element.getBoundingClientRect();
        if (top >= 0 && top <= window.innerHeight / 2) {
          setActiveComponent(component.id);
        }
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="flex flex-col md:flex-row">
      {/* Barra lateral con índice */}
      <aside className="md:w-64 md:h-screen md:sticky md:top-0 p-4 overflow-y-auto">
        <ul>
          {customComponentsList.map((component) => (
            <li key={component.id} className="mt-5 mb-2">
              <a
                href={`#${component.id}`}
                className={`text-blue-500 hover:text-blue-700 ${
                  activeComponent === component.id ? "font-bold" : ""
                }`}
              >
                {component.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido principal con la tabla estilo sandbox */}
      <div className="flex-1 p-4">
        {customComponentsList.map((component) => (
          <div key={component.id} id={component.id} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{component.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Columna con la sintaxis del componente */}
              <div className="bg-gray-100 p-4 rounded">
                <SyntaxHighlighter language="jsx" style={okaidia}>
                  {component.code}
                </SyntaxHighlighter>
              </div>

              {/* Columna con el componente renderizado */}
              <div className="bg-white p-4 rounded shadow">
                {component.component}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomComponentsMultiRender;