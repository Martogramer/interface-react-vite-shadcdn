import React from "react";
import { Meteors } from "../ui/meteors";

export const MeteorsDemo: React.FC = () => {
  return (
    <div className="">
      <div className="h-full w-full mb-0 relative ">
        <div className="relative inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden flex flex-col justify-end items-start">
          <div className="h-full w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
          ¡Contribuye con nosotros!
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
             Este proyecto es un esfuerzo open source
            para crear un template reutilizable que beneficie a la comunidad de
            desarrollo de software. Ya seas principiante o experto, tu ayuda es
            bienvenida. Juntos, podemos construir herramientas mejores y más
            accesibles. ¡Únete a nosotros en GitHub y aporta tus ideas y
            habilidades! 🚀
          </p>

          <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Enterate Cómo
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
};
