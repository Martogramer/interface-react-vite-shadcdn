import React from "react";
import { FlipWords } from "../ui/flip-words";

export const FlipWordsDemo: React.FC = () => {
 const words = [
  "Componentes reutilizables",
  "Biblioteca UI",
  "Snippets de código",
  "Mentorías personalizadas",
  "Guías prácticas",
  "Documentación técnica",
  "Asesoría de proyectos",
  "Recursos visuales",
  "Plantillas listas para usar",
  "Diseño colaborativo",
  "Buenas prácticas",
  "Comunidad activa",
  "Soporte técnico",
  "Integración ágil",
  "Casos de estudio",
];


  return (
    <div className="h-[40rem] flex justify-center">
      <div>
        <div className="text-4xl text-center mx-auto font-normal text-neutral-100">
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
};
