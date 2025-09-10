// components/_Customs2024/backgrounds/AuroraBGNav.tsx
import React from "react";

type AuroraBGNavProps = {
  className?: string;
  /** Escala simple de intensidad [0..1.5], default 1 */
  intensity?: number;
};

const AuroraBGNav: React.FC<AuroraBGNavProps> = ({ className = "", intensity = 1 }) => {
  // helper para aplicar intensidad a opacidad de cada capa
  const opa = (x: number) => Math.max(0, Math.min(1, x * intensity));

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-visible ${className}`}>
      {/* Banda radial horizontal suave (centro sutil) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(800px 240px at 50% 60%, rgba(80,120,200,0.18), rgba(30,30,40,0.06) 55%, transparent 75%)",
          mixBlendMode: "screen",
          opacity: opa(0.85),
        }}
      />

      {/* Glow fino superior (linear) */}
      <div
        className="absolute inset-x-0 -top-16 h-32"
        style={{
          background:
            "linear-gradient(180deg, rgba(99,102,241,0.18), rgba(6,182,212,0.10), transparent)",
          mixBlendMode: "screen",
          opacity: opa(0.7),
        }}
      />

      {/* Blob pequeño izquierda */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 w-40 h-24 rounded-[60%] blur-xl"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(21,196,227,0.28), rgba(134,136,243,0.22), transparent)",
          mixBlendMode: "screen",
          opacity: opa(0.65),
        }}
      />

      {/* Streak/arc derecha (conic + mascara para forma de “barrido”) */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 w-56 h-20 rotate-6 blur-[20px] rounded-[999px]"
        style={{
          background:
            "conic-gradient(from 190deg at 50% 50%, rgba(236,72,153,0.20), rgba(79,70,229,0.22), rgba(6,182,212,0.18), transparent 85%)",
          maskImage:
            "radial-gradient(70% 120% at 50% 50%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 120% at 50% 50%, #000 55%, transparent 100%)",
          mixBlendMode: "screen",
          opacity: opa(0.55),
        }}
      />
    </div>
  );
};

export default AuroraBGNav;
