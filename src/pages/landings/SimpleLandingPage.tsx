import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";

const SimpleLandingPage: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="hero min-h-screen bg-base-200"
      >
        <HeroSection
          title="Template Typescript React & Vite.js"
          strong="Custom Comps 2024"
          subtitle="Proyecto basado en las últimas tendencias, siguiendo buenas prácticas en Desarrollo Web y estándares UX/UI."
          primaryAction={{ text: "Inicio", href: "collabs" }}
          secondaryAction={{
            text: "Documentación del Proyecto",
            href: "documentacion",
          }}
        />
      </motion.div>
    </div>
  );
};

export default SimpleLandingPage;
