import { ReactNode } from "react";

/**
 * Interfaz para tipar los componentes personalizados.
 * Define la estructura que debe tener cada componente en el catálogo.
 */
export interface CustomComponent {
  id: string;
  title: string;
  code: string;
  component: ReactNode;
}

/**
 * Mock de componentes personalizados.
 * Esta lista contiene ejemplos de componentes.
 *
 * @example
 * ```tsx
 * import { customComponentsList } from "@/mocks/customComponentsMock";
 * customComponentsList.forEach(component => console.log(component.title));
 * ```
 */
export const customComponentsList: CustomComponent[] = [
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
  {
    id: "inputComponent",
    title: "Input Component",
    code: `<input type="text" className="border p-2 rounded" placeholder="Enter text here..." />`,
    component: (
      <input
        type="text"
        className="border p-2 rounded"
        placeholder="Enter text here..."
      />
    ),
  },
  {
    id: "alertComponent",
    title: "Alert Component",
    code: `<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Holy smokes!</strong>
  <span className="block sm:inline">Something seriously bad happened.</span>
</div>`,
    component: (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
      </div>
    ),
  },
];
