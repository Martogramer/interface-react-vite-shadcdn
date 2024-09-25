import React from "react";
import StoreHomePage from "./StoreHomePage";
import StoreBanner from "./StoreBanner";
import { AppleCardsCarouselDemo } from "@/features/CarouselAce";

const Index: React.FC = () => {
  return (
    <>
      <StoreHomePage />
      <AppleCardsCarouselDemo />
      <StoreBanner />
    </>
  );
};

export default Index;
