import React from "react";
import { Vortex } from "../../ui/vortex";

export const VortexDemo: React.FC = () => {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[20rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
       
        <h2 className="relative flex-col md:flex-row z-10 text-4xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-slate-600 via-white to-slate-600 flex items-center gap-2 md:gap-8">
          <span>
            {" "}
            En el mundo digital, la visibilidad es poder. Y queremos darte ese
            poder
          </span>
        </h2>
      </Vortex>
    </div>
  );
};
