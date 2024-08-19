import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import { motion } from "framer-motion";

/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero min-h-screen bg-base-200"
      >
        <HeroSection
          title="Template Typescript React & Vite.js"
          strong="Custom Comps 2024"
          subtitle="Proyecto basado en las últimas tendencias, siguiendo buenas prácticas en Desarrollo Web y estándares de Ux de AirBnb."
          primaryAction={{ text: "Inicio", href: "usuarios" }}
          secondaryAction={{ text: "Documentación del Proyecto", href: "documentacion" }}
        />
      </motion.div>
    </>
  );
};

export default HomePage;
