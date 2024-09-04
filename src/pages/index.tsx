import React from "react";
import SimpleLandingPage from "./landings/SimpleLandingPage";
/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <SimpleLandingPage />
    </>
  );
};

export default HomePage;
