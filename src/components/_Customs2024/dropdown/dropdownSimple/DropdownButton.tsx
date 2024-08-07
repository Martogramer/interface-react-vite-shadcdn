import React from 'react';

interface DropdownButtonProps {
  onClick: () => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ onClick }) => (
  <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700" onClick={onClick}>
    <span className="sr-only">Menu</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

export default DropdownButton;
