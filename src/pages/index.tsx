import { fetchUsers } from "@/services/handlers/users/usersAction";
import React, { useEffect, useState } from "react";
import HomeSection from "@/components/sections/HomeSection";
import InternalProvider from "@/services/mercadoPago/ContextProvider";

const HomePage: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({
    quantity: "1",
    price: "10",
    amount: 10,
    description: "Some book",
  });

  return (
    <>
      <InternalProvider
        context={{ preferenceId, isLoading, orderData, setOrderData }}
      >
        <HomeSection />
      </InternalProvider>
    </>
  );
};

export default HomePage;
