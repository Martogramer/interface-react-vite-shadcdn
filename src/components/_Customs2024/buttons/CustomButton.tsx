import React from 'react';

interface ButtonProps {
  text: string;
  href: string;
  variant: 'base' | 'border';
}

const CustomButton: React.FC<ButtonProps> = ({ text, href, variant }) => {
  return (
    <>
      {variant === 'base' ? (
        <a
          className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring focus:ring-red-300"
          href={href}
          aria-label={text}
        >
          <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
          <span
            className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform duration-200 active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            {text}
          </span>
        </a>
      ) : (
        <a
          className="group relative inline-block text-sm font-medium text-red-600 focus:outline-none focus:ring focus:ring-red-300 active:text-red-500"
          href={href}
          aria-label={text}
        >
          <span className="absolute inset-0 border border-current"></span>
          <span
            className="block border border-current bg-white px-12 py-3 transition-transform duration-200 group-hover:-translate-x-1 group-hover:-translate-y-1"
          >
            {text}
          </span>
        </a>
      )}
    </>
  );
};

export default CustomButton;