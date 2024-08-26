import React from "react";
import { FlipWords } from "../ui/flip-words";
import { Link } from "react-router-dom";

export const FlipWordsDemo: React.FC = () => {
  const words = [
    "dinámicas",
    "escalables",
    "customizables",
    "vanguardístas",
    "reutilizables",
    "Open Source",
  ];

  return (
    <div className="h-[40rem] flex justify-center">
      <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
         Construímos herramientas
        <FlipWords words={words} /> <br />
        <p className="text-2xl text-center gap-2 font-sans text-neutral-600 dark:text-neutral-400">
          Enterate cómo colaborar en{" "}
          <Link className="text-secondary" to={""}>
            Guía para Colaboradores
          </Link>
        </p>
      </div>
    </div>
  );
};
