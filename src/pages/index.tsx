import React from "react";
import GlobeLanding from "./landings/GlobeLanding";
/* --- 
  --- Despues del segundo desplegue se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <GlobeLanding/>
    </>
  );
};

export default HomePage;
