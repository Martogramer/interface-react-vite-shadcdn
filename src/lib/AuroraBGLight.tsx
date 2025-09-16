// components/_Customs2024/backgrounds/AuroraBGLight.tsx
import React from "react";

const AuroraBGLight: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-visible ${className}`}>
      {/* Halo central suave (radial) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 700px at 50% 45%, rgba(180,230,255,0.45), rgba(230,235,255,0.25) 55%, transparent 75%)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Blob superior izquierdo (conic pastel) */}
      <div
        className="absolute -top-24 -left-20 w-[36rem] h-[36rem] rounded-full blur-2xl"
        style={{
          opacity: 0.6,
          background:
            "conic-gradient(from 210deg at 50% 50%, rgba(56,189,248,0.35), rgba(236,72,153,0.28), rgba(99,102,241,0.28), transparent 85%)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Blob derecho (radial elongado) */}
      <div
        className="absolute top-6 -right-24 w-[38rem] h-[26rem] rotate-6 rounded-[48%_52%_47%_53%/55%_45%_55%_45%] blur-xl"
        style={{
          opacity: 0.55,
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(125,196,255,0.38), rgba(167,181,255,0.32), transparent)",
          maskImage:
            "radial-gradient(70% 110% at 50% 50%, #000 58%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(70% 110% at 50% 50%, #000 58%, transparent 100%)",
          mixBlendMode: "multiply",
        }}
      />
      {/* Veladura inferior (lineal muy tenue) */}
      <div
        className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[52rem] h-[16rem] rounded-[999px] blur-2xl"
        style={{
          opacity: 0.45,
          background:
            "linear-gradient(180deg, rgba(167,181,255,0.25), rgba(125,224,255,0.2), transparent)",
          mixBlendMode: "multiply",
        }}
      />
    </div>
  );
};

export default AuroraBGLight;
