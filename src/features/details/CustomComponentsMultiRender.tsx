import React, { useState, useEffect, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  customComponentsList,
  CustomComponentCategory,
} from "@/mocks/customCompsMock";

{
  /*  🚀 
  Este componente se utiliza para mostrar un catálogo de componentes personalizados en un diseño 
  de estilo sandbox, con dos secciones: una para mostrar el código de cada componente 
  y otra para renderizar el componente en sí. 
  
  Funcionalidad:
  Barra lateral con índice: Permite la navegación a través de los componentes con enlaces que resaltan según la posición del scroll.
  Manejo de scroll con `useCallback` y `useEffect`: Detecta el desplazamiento de la página para cambiar dinámicamente el componente activo y agregar la clase `font-bold` al enlace correspondiente.
  Renderizado dinámico de componentes: Utiliza `map` para recorrer `customComponentsList` y renderizar cada componente con su código asociado.
  
  Posibles mejoras:
  1. Optimización del `useEffect` y `useCallback`:
     - Se podría agregar un debounce a la función `handleScroll` para evitar múltiples re-renderizados en eventos de scroll muy rápidos.
     - Definir `customComponentsList` como dependencia en el hook `useCallback` para asegurarse de que siempre tenga el valor actualizado.
     
  2. Accesibilidad y UX:
     - Añadir `aria-labels` a los enlaces para mejorar la navegación de lectores de pantalla.
     - Agregar animaciones o transiciones para que el cambio entre componentes en la tabla se sienta más fluido.
  
  3. Persistencia del componente activo:
     - Almacenar el componente activo en el `localStorage` o en un contexto global para mantener el estado cuando se recarga la página.
  
! 4. Optimización de renderizado:
     - Implementar `React.memo` en los componentes si el `customComponentsList` es grande, para evitar renders innecesarios.
  
  5. Validación de props:
     - Agregar `propTypes` o definir tipos con TypeScript para `customComponentsList` y validar mejor los datos recibidos.
  
  En general, el componente tiene una estructura sólida y puede expandirse fácilmente agregando nuevas características o mejorando la visualización de los componentes en el sandbox.

 */
}
const CustomComponentsMultiRender: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string | null>(null); // Componente visible en viewport
  const [focusedComponent, setFocusedComponent] = useState<string | null>(null); // Componente seleccionado en el índice
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set()
  ); // Estado para manejar la expansión de categorías

  {
    /*
    Detecta el componente actualmente visible basado en la posición de scroll.
    Al encontrar el componente en el viewport, actualiza el estado `activeComponent`.
   */
  }
  const handleScroll = useCallback(() => {
    customComponentsList.forEach((category) => {
      category.components.forEach((component) => {
        const element = document.getElementById(component.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top >= 0 && top <= window.innerHeight / 2) {
            setActiveComponent(component.id);
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  {
    /*
    Desplaza suavemente al componente específico en la vista principal al hacer clic en el índice.
    @param componentId - ID del componente al que se debe desplazar.
   */
  }
  const handleComponentFocus = (componentId: string) => {
    setFocusedComponent(componentId);
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  {
    /*
    Controla la expansión y contracción de las categorías en la barra lateral.
    @param category - Nombre de la categoría a expandir o contraer.
   */
  }
  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Barra lateral con categorías y subitems */}
      <aside className="md:w-64 md:h-screen md:sticky md:top-0 p-4 overflow-y-auto bg-gray-50 border-r border-gray-200">
        <h2 className="text-xl font-bold mb-4">Custom Components</h2>
        <ul className="space-y-3">
          {customComponentsList.map((category: CustomComponentCategory) => (
            <li key={category.category}>
              <div
                className="cursor-pointer text-blue-700 hover:text-blue-900 font-semibold"
                onClick={() => toggleCategory(category.category)}
              >
                {category.category}
              </div>
              {expandedCategories.has(category.category) && (
                <ul className="pl-4 mt-2 space-y-1">
                  {category.components.map((component) => (
                    <li key={component.id}>
                      <button
                        onClick={() => handleComponentFocus(component.id)}
                        className={`text-blue-500 hover:text-blue-700 transition-all ${
                          activeComponent === component.id
                            ? "font-bold underline"
                            : ""
                        } ${
                          focusedComponent === component.id ? "bg-blue-100" : ""
                        }`}
                      >
                        {component.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido principal con la tabla de componentes y el renderizado en tiempo real */}
      <div className="flex-1 p-6">
        {customComponentsList.map((category: CustomComponentCategory) =>
          category.components.map((component) => (
            <div
              key={component.id}
              id={component.id}
              className={`mb-10 ${
                focusedComponent === component.id
                  ? "border-2 border-blue-300 rounded-md p-2 shadow-lg"
                  : ""
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {component.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-4 rounded-md border">
                  <SyntaxHighlighter language="jsx" style={okaidia}>
                    {component.code}
                  </SyntaxHighlighter>
                </div>
                <div className="bg-white p-4 rounded-md shadow-lg border">
                  {component.component}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomComponentsMultiRender;
