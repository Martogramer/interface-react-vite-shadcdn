import React from "react";
import { Checkout, InternalProvider, Payment } from "@/services/mercadoPago";
import LazyImage from "@/components/_Customs2024/images/LazyImage";

const Payments: React.FC = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1674673243921-9e6ab580431f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop";
  const handleCheckoutClick = () => {
    console.log("Checkout button clicked");
    // Aquí puedes agregar la lógica adicional para el click en el checkout
  };
  const contextValue = {
    exampleProp: "Example value",
    preferenceId: "some-preference-id",
    isLoading: false,
    orderData: {
      price: 10,
      quantity: 1,
      amount: 10,
    },
    setOrderData: () => {},
  };
  return (
    <>
      <InternalProvider context={contextValue}>
        <div className="mx-auto lg:mx-20 md:mx-10 ">
          <LazyImage src={imageUrl} />
          <Checkout onClick={handleCheckoutClick} />
          <Payment />
        </div>
      </InternalProvider>
    </>
  );
};

export default Payments;
