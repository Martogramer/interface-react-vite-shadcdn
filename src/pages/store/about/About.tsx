import React from "react";
import { BackgroundBeamsDemo } from "@/components/_Customs2024/Background";
import { BackgroundGradientAnimationDemo } from "@/components/_Customs2024/BackgroundAnimation";
import { HeroParallaxDemo } from "@/components/_Customs2024/Parallax";

const About: React.FC = () => {
  return (
    <>
      <BackgroundGradientAnimationDemo />
        <HeroParallaxDemo />
      <BackgroundBeamsDemo />
    </>
  );
};

export default About;
