import React, { createContext, ReactNode } from 'react';

// Definición del tipo de contexto
interface ContextType {
  // Define las propiedades del contexto según tus necesidades
  exampleProp: string;
}
// Crea el contexto con un valor inicial vacío (se puede cambiar según tus necesidades)
const Context = createContext<ContextType>({ exampleProp: '' });

// Definición de props para el componente InternalProvider
interface InternalProviderProps {
  context: ContextType; 
  children: ReactNode;
}

const InternalProvider: React.FC<InternalProviderProps> = ({ children, context }) => {
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default InternalProvider;
export { Context };
