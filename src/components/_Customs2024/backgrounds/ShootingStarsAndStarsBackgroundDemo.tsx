import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
{/* 🚀 */}
export const ShootingStarsAndStarsBackgroundDemo: React.FC = () => {
  return (
    <div className="relative h-[40rem] w-full rounded-md bg-neutral-900 flex items-center justify-center">
      {/* Overlay radial sutil para mejorar contraste del título */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_60%)]" />
      <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-slate-300 via-white to-slate-300">
        No estar presente online no es opción.
      </h2>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
};