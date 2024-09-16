import React from "react";
import { FlipWords } from "../ui/flip-words";

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
      <div>
        <div className="text-4xl text-center mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Construímos herramientas
          <FlipWords words={words} /> <br />
        </div>
      </div>
    </div>
  );
};
