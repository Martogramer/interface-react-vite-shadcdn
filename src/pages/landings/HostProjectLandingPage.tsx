// components/sections/HowToStartSection.tsx
import React from "react";
import CTALightSection from "@/lib/CTALightSection";

const HowToStartSection: React.FC = () => {
  return (
    <CTALightSection
      title="¿Cómo empezar tu camino a la digitalización?"
      description="El proceso es simple: primero conversamos para entender tu situación actual, luego definimos un plan adaptado a tus necesidades, y finalmente te acompañamos paso a paso en la implementación. Todo pensado para productores y emprendedores de América Latina."
      primaryText="Agendar tu primera reunión"
      secondaryText="Descargar guía inicial"
      onPrimary={() => console.log("Agendar reunión")}
      onSecondary={() => console.log("Descargar guía")}
    />
  );
};

export default HowToStartSection;
