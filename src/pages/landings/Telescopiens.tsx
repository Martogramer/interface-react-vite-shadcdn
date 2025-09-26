import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";//import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import GlobeSection from "@/components/sections/GlobeSection"
import ScrollingGallerySection from "@/components/sections/ScrollingGallerySectionABSOLUT"
import CTALightSection from "@/lib/CTALightSection";
import React from "react";
import { useNavigate } from "react-router-dom";
/* 💻 */
const Telescopiens: React.FC = () => {
  const navigate = useNavigate();

  const onPrimary = () => navigate("/servicios/empezar");
  const onSecondary = () => navigate("/servicios/conoce-mas");

  const careerPathData = {
    title: "La transformación digital es clave para el crecimiento de la región.",
    description: "",
    ctaText: "¡Empieza hoy!",
    ctaLink: "#",
  };

  return (
    <>
      {/*<RadioPlayer /> */}
      <ShootingStarsAndStarsBackgroundDemo />
      <GlobeSection {...careerPathData} />
      <CTALightSection
        title="Digitalizá tu negocio con impacto local"
        description="Te acompañamos paso a paso: presencia online, procesos eficientes y datos para decidir mejor. Diseñado para productores y pymes de la región."
        primaryText="Quiero empezar"
        secondaryText="Conocer más"
        onPrimary={onPrimary}
        onSecondary={onSecondary}
      />
      <ScrollingGallerySection
        title="Digitalización en América Latina"
        images={[
          [
            "https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg",
            "https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg",
          ],
          [
            "https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg",
            "https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg",
          ],
          [
            "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
            "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
          ],
        ]}
      />
    </>
  );
};

export default Telescopiens;
