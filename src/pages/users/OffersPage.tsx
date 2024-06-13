import ProductSection from "@/components/sections/ProductSection";
import React from "react";
import StoreBanner from "../store/home/StoreBanner";
import StoreHomePage from "../store/home/StoreHomePage";

const OffersPage: React.FC = () => {
  return (
    <>
      <StoreHomePage />
      <StoreBanner />
      <ProductSection />
    </>
  );
};

export default OffersPage;
