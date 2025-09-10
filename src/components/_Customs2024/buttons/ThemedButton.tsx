import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@/context/ThemeContext';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ThemedShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariant;
  animationDuration?: string;
  bgGradient?: string;
  textColor?: string;
}

const ThemedShimmerButton: React.FC<ThemedShimmerButtonProps> = ({
  text,
  variant = 'primary',
  animationDuration = '2s',
  bgGradient = 'linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)',
  textColor = 'text-slate-400',
  className,
  ...props
}) => {
  const { themeClasses } = useTheme();

  return (
    <button
      className={clsx(
        'inline-flex h-10 animate-shimmer items-center justify-center rounded-md border px-5 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
        'my-1', // 👈 margen superior sutil
        textColor,
        themeClasses[variant],
        themeClasses.shadow,
        className
      )}
      style={{
        background: bgGradient,
        backgroundSize: '200% 100%',
        animationDuration: animationDuration,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default ThemedShimmerButton;
