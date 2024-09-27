import React from 'react';
import { CanvasRevealEffect } from '../../ui/canvas-reveal-effect';

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
  return (
    <div className="relative w-[100%] h-96 rounded-lg overflow-hidden">
      <CanvasRevealEffect
        animationSpeed={animationSpeed}
        colors={colors}
        dotSize={dotSize}
        showGradient={showGradient}
        containerClassName="bg-transparent absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10 p-6 flex flex-col h-full justify-end">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default CardHoverEffect;