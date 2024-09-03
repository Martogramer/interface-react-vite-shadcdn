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
      className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 px-6 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${textColor} ${className}`}
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