import React, { useState, useEffect, useCallback } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import { customComponentsList } from "@/mocks/customCompsMock";
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
