import React from "react";
import HeroSection from "@/components/sections/HeroSectionStore";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";
import { Model3DViewer } from "./_PRUEBAS/three/custom/Model3DViewer";

/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomeAlternative: React.FC = () => {
  return (
    <>
      <HeroSection
        backgroundUrl=""
        title="Template Frontend⚡"
        subtitle="React + Typescript."
        primaryAction={{ text: "Entrar", href: "usuarios" }}
        secondaryAction={{ text: "Contacto", href: "#" }}
      >
        <ErrorBoundary>
          <Model3DViewer modelPath="/public/models/terra.glb" />
        </ErrorBoundary>
      </HeroSection>
    </>
  );
};

export default HomeAlternative;
