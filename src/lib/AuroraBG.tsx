import React from "react";

const AuroraBG: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-visible ${className}`}>
      {/* Halo central (radial más tenue, sobre negro) */}
      <div
        className="absolute  mr-0 inset-0"
        style={{
          background:
            "radial-gradient(1000px 700px at 50% 45%, rgba(80,120,200,0.20), rgba(40,40,60,0.08) 50%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Blob superior izquierdo */}
      <div
        className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full blur-5xl"
        style={{
          opacity: 0.45,
          background:
            "conic-gradient(from 210deg at 50% 50%, rgba(21,196,227,0.25), rgba(200,70,150,0.25), rgba(79,70,229,0.25), transparent)",
          mixBlendMode: "screen",
        }}
      />

      {/* Blob lateral derecho */}
     {/*  <div
        className="absolute top-10 -right-24 w-[38rem] h-[26rem] rotate-12 rounded-[58%_52%_57%_53%/65%_65%_65%_75%] blur-xl"
        style={{
          opacity: 0.3,
          background:
            "radial-gradient(60% 100% at 50% 50%, rgba(109,165,255,0.25), rgba(134,136,243,0.25), transparent)",
          WebkitMaskImage:
            "radial-gradient(70% 100% at 50% 50%, #000 60%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      /> */}

      {/* Veladura inferior */}
      <div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[52rem] h-[16rem] rounded-[999px] blur-3xl"
        style={{
          opacity: 0.4,
          background:
            "linear-gradient(180deg, rgba(99,102,241,0.18), rgba(6,182,212,0.12), transparent)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
};

export default AuroraBG;
