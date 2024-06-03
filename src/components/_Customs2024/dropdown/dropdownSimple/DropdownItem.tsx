import React from 'react';

interface DropdownItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'link';
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, href, onClick, type = 'link' }) => {
  if (type === 'button') {
    return (
      <button
        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
        onClick={onClick}
        role="menuitem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        {label}
      </button>
    );
  }

  return (
    <a
      href={href}
      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      role="menuitem"
    >
      {label}
    </a>
  );
};

export default DropdownItem;
