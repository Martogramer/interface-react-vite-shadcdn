import React from 'react';

interface GridProps {
  columns: number;
  content: React.ReactNode[];
}

const CustomGrid: React.FC<GridProps> = ({ columns, content }) => {
  return (
    <div className={`grid grid-cols-1 gap-4 lg:grid-cols-${columns} lg:gap-8`}>
      {content.map((item, index) => (
        <div key={index} className="h-32 rounded-lg bg-gray-200">
          {item}
        </div>
      ))}
    </div>
  );
};

export default CustomGrid;
