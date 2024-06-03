import React, { useState } from 'react';
import DropdownButton from './DropdownButton';
import DropdownItem from './DropdownItem';

interface DropdownMenuProps {
  items: { label: string; href?: string; onClick?: () => void; type?: 'button' | 'link' }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
        <a
          href="#"
          className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
        >
          Edit
        </a>

        <DropdownButton onClick={() => setIsOpen(!isOpen)} />
      </div>

      {isOpen && (
        <div
          className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
          role="menu"
        >
          <div className="p-2">
            {items.map((item, index) => (
              <DropdownItem key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
