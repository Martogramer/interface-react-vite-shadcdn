import ProductSection from "@/components/sections/ProductSection";
import React from "react";
import StoreBanner from "../store/home/StoreBanner";
import StoreHomePage from "../store/home/StoreHomePage";
import ImageContainer from "@/components/_Customs2024/images/LazyImage";

const OffersPage: React.FC = () => {
  return (
    <>
      <ImageContainer />
      <StoreHomePage />
      <StoreBanner />
      <ProductSection />
    </>
  );
};

export default OffersPage;
