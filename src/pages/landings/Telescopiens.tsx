import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";//import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import StatsSection from "@/components/sections/StatsSection";
import React from "react";
/* 💻 */
const Telescopiens: React.FC = () => {
  const careerPathData = {
    title: "Transformación Digital con Aliados Estratégicos",
    description:
      "Desde el diseño de tu sitio web, hasta estrategias de SEO que posicionan. Te acompañamos en el proceso.",
    ctaText: "Expieza hoy!",
    ctaLink: "#",
    careers: [
      {
        title: "🌐 Para Clientes: ",
        description: "¿Listo para llevar tu negocio al mundo digital? Te ayudamos a convertir ideas en resultados tangibles. Desde estrategias personalizadas hasta soluciones tecnológicas de punta, hacemos que la transición hacia la digitalización sea sencilla y efectiva.",
      },
      {
        title: "🤝 Para Colaboradores:",
        description: "Si eres un desarrollador apasionado por la innovación, aquí encontrarás el espacio perfecto para crecer, colaborar y crear. Nos encanta asociarnos con mentes creativas para llevar proyectos increíbles a la realidad.",
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
