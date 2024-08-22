import React from "react";
import StoreHomePage from "./StoreHomePage";
import StoreBanner from "./StoreBanner";
import { AppleCardsCarouselDemo } from "@/features/CarouselAce";
import { BackgroundBeamsDemo } from "@/components/_Customs2024/Background";

const Index: React.FC = () => {
  return (
    <>
      <StoreHomePage />
      <BackgroundBeamsDemo />
      <AppleCardsCarouselDemo />
      <StoreBanner />
    </>
  );
};

export default Index;
