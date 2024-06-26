
import React from "react";
import HomeSection from "@/components/sections/HomeSection";
import HeroSection from "@/components/sections/HeroSection";

/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <HomeSection />
      <HeroSection
        backgroundUrl="https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        title="Let us find your"
        subtitle="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!"
        primaryAction={{ text: "Get Started", href: "#" }}
        secondaryAction={{ text: "Learn More", href: "#" }}
      />
    </>
  );
};

export default HomePage;
