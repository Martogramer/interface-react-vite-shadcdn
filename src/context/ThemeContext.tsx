// ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { themeVariants, ThemeVariant } from '../lib/theme';

type ThemeContextType = {
  currentTheme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
  toggleTheme: () => void;
  themeClasses: typeof themeVariants[ThemeVariant];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeVariant>('dark');

  const setTheme = (theme: ThemeVariant) => {
    setCurrentTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const themes: ThemeVariant[] = ['light', 'dark', 'sepia'];
    const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
    setTheme(nextTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeVariant;
    if (savedTheme && themeVariants[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      setTheme,
      toggleTheme,
      themeClasses: themeVariants[currentTheme],
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};