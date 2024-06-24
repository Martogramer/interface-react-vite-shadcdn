import { fetchUsers } from "@/services/handlers/users/usersAction";
import React, { useEffect } from "react";
import HomeSection from "@/components/sections/HomeSection";
const HomePage: React.FC = () => {
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <HomeSection />
    </>
  );
};

export default HomePage;
