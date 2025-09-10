import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";//import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import GlobeSection from "@/components/sections/GlobeSection"
import React from "react";
/* 💻 */
const Telescopiens: React.FC = () => {
  const careerPathData = {
    title: "La transformación digital es clave para el crecimiento de la región.",
    description:
      "",/* Acompañamos a productores y emprendedores locales en el proceso de adoptar tecnologías que potencien su competitividad, generen nuevas oportunidades y conecten sus negocios con el mundo. */
    ctaText: "Expieza hoy!",
    ctaLink: "#",
  };

  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <GlobeSection {...careerPathData} />
    </>
  );
};

export default Telescopiens;
