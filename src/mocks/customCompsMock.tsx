import { ShimmerButton } from "@/components/_Customs2024/buttons/ShimmerButton";

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
        id: "ShimmerButton",
        title: "ShimmerButton",
        code: `
import React from 'react';

interface ShimmerButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  animationDuration?: string;
  bgGradient?: string;
  textColor?: string;
}

export const ShimmerButton: React.FC<ShimmerButtonProps> = ({
  text,
  onClick,
  className = '',
  animationDuration = '2s',
  bgGradient = 'linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)',
  textColor = 'text-slate-400'
}) => {
  return (
    <button
      className={'inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'}
      style={{
        background: bgGradient,
        backgroundSize: '200% 100%',
        animationDuration: animationDuration
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
        `,
        component: (
          <ShimmerButton
            text="Shimmer"
            onClick={() => console.log("Button clicked")}
            animationDuration="3s"
            bgGradient="linear-gradient(110deg,#001,45%,#2e3641,55%,#001)"
            textColor="text-blue-400"
          />
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
