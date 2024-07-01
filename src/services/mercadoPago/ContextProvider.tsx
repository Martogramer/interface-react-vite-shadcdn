import React, { createContext, ReactNode, useState } from "react";

// Definición del tipo de contexto
interface ContextType {
  exampleProp: string;
  orderData: {
    price: number;
    quantity: number;
    amount: number;
  };
  preferenceId: string;
  isLoading: boolean;
  setOrderData: React.Dispatch<
    React.SetStateAction<{
      price: number;
      quantity: number;
      amount: number;
    }>
  >;
}
const initialContext: ContextType = {
  exampleProp: "",
  orderData: { price: 10, quantity: 1, amount: 10 },
  preferenceId: "",
  isLoading: false,
  setOrderData: () => {},
};
// Crea el contexto con un valor inicial vacío (se puede cambiar según tus necesidades)
const Context = createContext<ContextType>(initialContext);

// Definición de props para el componente InternalProvider
interface InternalProviderProps {
  context: Partial<ContextType>;
  children: ReactNode;
}

const InternalProvider: React.FC<InternalProviderProps> = ({
  children,
  context,
}) => {
  const [orderData, setOrderData] = useState(initialContext.orderData);
  const value = { ...initialContext, ...context, orderData, setOrderData };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default InternalProvider;
export { Context };
