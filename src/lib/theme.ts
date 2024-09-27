// theme.ts
export const themeVariants = {
    light: {
      background: 'bg-white',
      text: 'text-gray-800',
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-gray-200 text-gray-700',
      accent: 'bg-yellow-400 text-black',
      border: 'border-gray-300',
      shadow: 'shadow-md',
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-gray-100',
      primary: 'bg-blue-600 text-white',
      secondary: 'bg-gray-700 text-gray-200',
      accent: 'bg-yellow-500 text-black',
      border: 'border-gray-600',
      shadow: 'shadow-lg shadow-gray-800',
    },
    sepia: {
      background: 'bg-yellow-100',
      text: 'text-brown-800',
      primary: 'bg-brown-600 text-white',
      secondary: 'bg-yellow-200 text-brown-700',
      accent: 'bg-orange-400 text-black',
      border: 'border-brown-300',
      shadow: 'shadow-md shadow-brown-200',
    },
  };
  
  export type ThemeVariant = keyof typeof themeVariants;