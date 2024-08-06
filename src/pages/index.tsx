
import React from "react";
import HeroSection from "@/components/sections/HeroSection";

/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
