import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";//import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import StatsSection from "@/components/sections/StatsSection";
import React from "react";

const Telescopiens: React.FC = () => {
  const careerPathData = {
    title: "Construyamos Juntos!",
    description:
      "Desde el diseño de tu sitio web, hasta estrategias de SEO que posicionan. Te acompañamos en el proceso.",
    ctaText: "Expieza hoy!",
    ctaLink: "#",
    careers: [
      {
        title: "🌐 Servicios",
        description: " No solo queremos que estés presente, queremos que domines el entorno digital.",
        link: "/servicios",
      },
      {
        title: "💻 Colaboradores",
        description: "Buscamos desarrolladores que quieran aportar su talento a proyectos innovadores.",
        link: "/colaboradores",
      },
    ],
  };

  return (
    <>
      <ShootingStarsAndStarsBackgroundDemo />
      <StatsSection {...careerPathData} />      
    </>
  );
};

export default Telescopiens;
