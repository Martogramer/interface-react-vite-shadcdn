// src/App.tsx
import React from 'react';

interface ThreeContainerProps {
  children?: React.ReactNode;
}

const ThreeContainer: React.FC<ThreeContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <div className="w-full h-full flex-grow">
        {children}
      </div>
    </div>
  );
};

export default ThreeContainer;
