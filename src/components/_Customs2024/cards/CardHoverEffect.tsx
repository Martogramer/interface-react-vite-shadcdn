import React, { useState } from 'react';
import { CanvasRevealEffect } from '../../ui/canvas-reveal-effect';
import clsx from 'clsx';
import classNames from 'classnames';

interface CustomCardProps {
  title: string;
  description: string;
  animationSpeed?: number;
  colors?: number[][];
  dotSize?: number;
  showGradient?: boolean;
}

const CardHoverEffect: React.FC<CustomCardProps> = ({
  title,
  description,
  animationSpeed = 0.4,
  colors = [[0, 255, 255]],
  dotSize = 3,
  showGradient = true,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  const truncatedDescription = description.length > 100 
  ? `${description.slice(0, 100)}...` 
  : description;
  return (
    <div className="relative w-[100%] h-96 rounded-lg overflow-hidden">
      <CanvasRevealEffect
        animationSpeed={animationSpeed}
        colors={colors}
        dotSize={dotSize}
        showGradient={showGradient}
        containerClassName="bg-transparent absolute inset-0 pointer-events-none"
      />
      <div className={clsx("relative z-10 p-6 flex flex-col h-full justify-end", classNames)}>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white">
          {isExpanded ? description : truncatedDescription}
        </p>
        <button
          onClick={toggleExpand}
          className="text-sm mt-2 text-white flex items-center hover:underline"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
          <span className="ml-2">{isExpanded ? '▲' : '▼'}</span>
        </button>
      </div>
    </div>
  );
};

export default CardHoverEffect;