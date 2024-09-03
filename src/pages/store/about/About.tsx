import React from "react";
import { BackgroundBeamsDemo } from "@/components/_Customs2024/Background";
import { BackgroundGradientAnimationDemo } from "@/components/_Customs2024/BackgroundAnimation";
import { PlaceholdersAndVanishInputDemo } from "@/components/inputs/PlaceholdersAndVanishInputDemo";

const About: React.FC = () => {
  return (
    <>
      <BackgroundGradientAnimationDemo />
      
      <BackgroundBeamsDemo
        title="Tu título aquí"
        description="Tu descripción aquí"
        inputPlaceholder="ejemplo@email.com"
        height="50rem"
        titleColor="from-blue-200 to-blue-600"
      />
    </>
  );
};

export default About;
