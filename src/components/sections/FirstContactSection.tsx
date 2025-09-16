// components/sections/FirstContactSection.tsx
import React from "react";
import CTALightSection from "@/lib/CTALightSection";

const FirstContactSection: React.FC = () => {
  return (
    <CTALightSection
      title="Primer contacto: recopilamos información clave"
      description="En nuestra primera reunión te escuchamos. Relevamos los datos más importantes de tu negocio —desde procesos actuales hasta objetivos específicos— para construir una demo adaptada a tu realidad. Queremos que veas resultados desde el primer día."
      primaryText="Compartir mis datos"
      secondaryText="Ver ejemplo de demo"
      onPrimary={() => console.log("Formulario de datos")}
      onSecondary={() => console.log("Ejemplo de demo")}
    />
  );
};

export default FirstContactSection;
