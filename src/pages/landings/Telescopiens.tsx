import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";//import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import FirstContactSection from "@/components/sections/FirstContactSection";
import GlobeSection from "@/components/sections/GlobeSection"
import CTALightSection from "@/lib/CTALightSection";
import React from "react";
import { useNavigate } from "react-router-dom";
/* 💻 */
const Telescopiens: React.FC = () => {

  const navigate = useNavigate();
  const onPrimary = () => {
    navigate("/servicios/empezar"); // CTA principal
  };
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
      <CTALightSection
        title="Digitalizá tu negocio con impacto local"
        description="Te acompañamos paso a paso: presencia online, procesos eficientes y datos para decidir mejor. Diseñado para productores y pymes de la región."
        primaryText="Quiero empezar"
        secondaryText="Conocer más"
        onPrimary={onPrimary}
      />
      <FirstContactSection />
    </>
  );
};

export default Telescopiens;
