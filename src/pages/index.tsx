import React from "react";
import GlobeLanding from "./landings/GlobeLanding";
/* --- 
  --- Despues del segundo stage se deberìa implementar Analytics de Vercel.
 --- */

const HomePage: React.FC = () => {
  return (
    <>
      <GlobeLanding/>
    </>
  );
};

export default HomePage;
