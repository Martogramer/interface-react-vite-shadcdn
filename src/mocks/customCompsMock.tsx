// Tipado del componente con categorías y subcomponentes
export interface SubComponent {
  id: string;
  title: string;
  code: string;
  component: JSX.Element;
}

export interface CustomComponentCategory {
  category: string;
  components: SubComponent[];
}

// Nueva estructura con categorías
export const customComponentsList: CustomComponentCategory[] = [
  {
    category: "Buttons",
    components: [
      {
        id: "primaryButton",
        title: "Primary Button",
        code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Primary</button>`,
        component: (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
        ),
      },
      {
        id: "secondaryButton",
        title: "Secondary Button",
        code: `<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Secondary</button>`,
        component: (
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
        ),
      },
      {
        id: "tercerobut",
        title: "Primary Button",
        code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Primary</button>`,
        component: (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
        ),
      },
      {
        id: "cuarto",
        title: "Secondary Button",
        code: `<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Secondary</button>`,
        component: (
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
        ),
      },
      {
        id: "quinto",
        title: "Primary Button",
        code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Primary</button>`,
        component: (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Primary
          </button>
        ),
      },
      {
        id: "sexto",
        title: "Secondary Button",
        code: `<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Secondary</button>`,
        component: (
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Secondary
          </button>
        ),
      },
    ],
  },
  {
    category: "Cards",
    components: [
      {
        id: "simpleCard",
        title: "Simple Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Simple Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Simple Card
          </div>
        ),
      },
      {
        id: "complexCard",
        title: "Complex Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Complex Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Complex Card
          </div>
        ),
      },
      {
        id: "simpleCard",
        title: "Simple Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Simple Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Simple Card
          </div>
        ),
      },
      {
        id: "complexCard",
        title: "Complex Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Complex Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Complex Card
          </div>
        ),
      },
      {
        id: "simpleCard",
        title: "Simple Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Simple Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Simple Card
          </div>
        ),
      },
      {
        id: "complexCard",
        title: "Complex Card",
        code: `<div className="border border-gray-200 rounded-lg p-4 shadow">Complex Card</div>`,
        component: (
          <div className="border border-gray-200 rounded-lg p-4 shadow">
            Complex Card
          </div>
        ),
      },
    ],
  },
];
