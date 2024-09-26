// ThemedButton.tsx
import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@/context/ThemeContext';

type ButtonVariant = 'primary' | 'secondary' | 'accent';

interface ThemedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}) => {
  const { themeClasses } = useTheme();

  return (
    <button
      className={clsx(
        'px-4 py-2 rounded transition-colors duration-200',
        themeClasses[variant],
        themeClasses.shadow,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ThemedButton;