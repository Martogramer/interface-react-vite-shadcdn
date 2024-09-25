import { ShootingStarsAndStarsBackgroundDemo } from "@/components/_Customs2024/backgrounds/ShootingStarsAndStarsBackgroundDemo";
import CardHoverEffect from "@/components/_Customs2024/cards/CardHoverEffect";
import { CardStackDemo } from "@/components/_Customs2024/cards/CardStack";
import { GlobeDemo } from "@/components/_Customs2024/GlobeGithub";
import StatsSection from "@/components/sections/StatsSection";
import React from "react";

const Telescopiens: React.FC = () => {
  const careerPathData = {
    title: "Find your career path",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.",
    ctaText: "Get Started Today",
    ctaLink: "#",
    careers: [
      {
        title: "Accountant",
        description: "Lorem ipsum dolor sit amet consectetur.",
        link: "#",
      },
      {
        title: "Accountant",
        description: "Lorem ipsum dolor sit amet consectetur.",
        link: "#",
      },
    ],
  };

  return (
    <>
      <GlobeDemo />
      <ShootingStarsAndStarsBackgroundDemo />
      <CardStackDemo />
      <StatsSection {...careerPathData} />
      
     {/*  <CardHoverEffect
              title={"El poder de los datos"}
              description={"Descubre cómo podemos ayudarte a conocer a tus usuarios."}
              animationSpeed={1.5}
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              dotSize={5}
              showGradient={true}
            /> */}
      
    </>
  );
};

export default Telescopiens;
