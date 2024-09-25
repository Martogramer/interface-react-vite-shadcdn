import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";
import { VortexDemo } from "@/components/_Customs2024/backgrounds/VortexDemo";
import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import StatsSection from "@/components/sections/StatsSection";
import React from "react";

const Telescopiens: React.FC = () => {
  const careerPathData = {
    title: "🔍 Desde el diseño de sitios web que cautivan, hasta estrategias de SEO que posicionan.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.",
    ctaText: "Get Started Today",
    ctaLink: "#",
    careers: [
      {
        title: "🌐 Servicios",
        description: " No solo queremos que estés presente, queremos que domines tu sector en el entorno digital.",
        link: "#",
      },
      {
        title: "💻 Colaboradores",
        description: "Buscamos desarrolladores y diseñadores que quieran aportar su talento a proyectos innovadores.",
        link: "#",
      },
    ],
  };

  return (
    <>
      <VortexDemo />
      <GlobeDemo />
      <ShootingStarsAndStarsBackgroundDemo />
      <StatsSection {...careerPathData} />      
    </>
  );
};

export default Telescopiens;
