
import React from "react";
import HeroSection from "@/components/sections/HeroSection";

/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Template Typescript React Vite.js"
        strong="Conocimiento sintetizado"
        subtitle="El trabajo de un año resumido en este humilde template donde podras encontrar componentes customizados hasta diversos puntos de vistas de referentes del Software"
        primaryAction={{ text: "Get Started", href: "usuarios" }}
        secondaryAction={{ text: "Learn More", href: "#" }}
      />
    </>
  );
};

export default HomePage;
