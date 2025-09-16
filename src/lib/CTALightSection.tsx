// components/sections/CTALightSection.tsx
import React from "react";
import AuroraBGLight from "./AuroraBGLight";
import ThemedShimmerButton from "@/components/_Customs2024/buttons/ThemedButton";

type Props = {
  title?: string;
  description?: string;
  primaryText?: string;
  secondaryText?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
};

const CTALightSection: React.FC<Props> = ({
  title = "Acelerá tu digitalización hoy",
  description = "Impulsamos la adopción tecnológica en América Latina con soluciones simples, medibles y pensadas para productores y emprendedores locales.",
  primaryText = "Agendar asesoría gratuita",
  secondaryText = "Ver casos de éxito",
  onPrimary,
  onSecondary,
}) => {
  return (
    <section className="relative overflow-visible py-12 sm:py-16 lg:py-20 bg-white">
      {/* Fondo aurora claro */}
      <AuroraBGLight />

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-sm px-6 py-10 sm:px-10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              {title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Botón primario (shimmer sutil dark para contraste) */}
              <ThemedShimmerButton
                text={primaryText}
                aria-label={primaryText}
                onClick={onPrimary}
                className="h-11 px-6 rounded-lg border-slate-300"
                textColor="text-white"
                bgGradient="linear-gradient(110deg,#0f172a,45%,#1f2937,55%,#0f172a)"
                animationDuration="3s"
              />
              {/* Secundario: outline con fondo translúcido */}
              <button
                onClick={onSecondary}
                className="h-11 px-6 rounded-lg border border-slate-300/80 bg-white/60 text-slate-800 hover:bg-white hover:border-slate-400 transition-colors"
              >
                {secondaryText}
              </button>
            </div>

            {/* Mini nota de confianza opcional */}
            <p className="mt-4 text-xs text-slate-500">
              Sin costo inicial · Enfoque práctico · Acompañamiento continuo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTALightSection;
