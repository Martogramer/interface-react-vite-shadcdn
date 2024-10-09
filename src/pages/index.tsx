import React from "react";
import SimpleLandingPage from "./landings/SimpleLandingPage";
/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <SimpleLandingPage
        title="Template Typescript React & Vite.js"
        subtitle="Proyecto basado en las últimas tendencias, siguiendo buenas prácticas en Desarrollo Web y estándares UX/UI."
        strong="Custom Comps 2024"
        secondaryAction={{
          text: "Documentación del Proyecto",
          href: "/colaboradores/docs",
        }}
        primaryAction={{ text: "Inicio", href: "/telescopiens" }}
      />
    </>
  );
};

export default HomePage;
