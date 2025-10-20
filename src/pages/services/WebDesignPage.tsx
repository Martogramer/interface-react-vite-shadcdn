import React from "react";
import CTALightSection from "../../lib/CTALightSection";
import AuroraBG from "../../lib/AuroraBG";

const WebDesignPage: React.FC = () => {
  return (
    <>
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Diseño Web Profesional
            </h2>
            <p className="mt-4 text-gray-400">
              Captura la atención de tus usuarios con un diseño web moderno,
              rápido y optimizado para móviles. Nuestro equipo crea experiencias
              únicas que reflejan la identidad de tu marca y mejoran la
              conversión.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Diseñar mi sitio web
            </a>
          </div>
        </div>
      </section>

      {/* Sección CTA clara orientada a diseño responsive */}
      <CTALightSection
        title="Diseño responsivo primero"
        description="Construimos interfaces que se adaptan con elegancia a móviles, tablets y desktop. Priorizamos legibilidad, jerarquía visual y velocidad en cada breakpoint."
        primaryText="Quiero mi web adaptable"
        secondaryText="Ver proceso de trabajo"
        onPrimary={() => (window.location.href = "/contacto")}
        onSecondary={() => (window.location.href = "/collabs/Docs")}
      />

      {/* Sección en contraste oscuro: principios y breakpoints */}
      <section className="relative overflow-hidden bg-slate-950 py-12 sm:py-16 lg:py-20">
        <AuroraBG />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
                Un sistema de diseño fluido
              </h3>
              <p className="mt-4 text-slate-300">
                Combinamos layouts fluidos, tipografías escalables y componentes reutilizables para
                asegurar consistencia y accesibilidad en todo el sitio.
              </p>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Mobile-first con breakpoints pensados: sm, md, lg, xl, 2xl.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
                  <span>Imágenes responsivas y optimizadas para reducir TTFB y LCP.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
                  <span>Controles táctiles cómodos: targets accesibles y espaciados.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">Móvil</p>
                <p className="mt-2 text-slate-200 text-sm">Columnas 1 • tipografía 16–18px • CTA sticky</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">Tablet</p>
                <p className="mt-2 text-slate-200 text-sm">Columnas 2 • grillas densas • navegación clara</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">Desktop</p>
                <p className="mt-2 text-slate-200 text-sm">Columnas 12 • áreas • sidebar y hero amplios</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección comparativa de estilos (contraste visual) */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Tarjeta estilo minimal claro */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-900">Estilo Minimal</h4>
              <p className="mt-2 text-slate-600">
                Enfoque editorial, espacios amplios, tipografía limpia y jerarquía marcada. Ideal para blogs,
                documentación y marcas sobrias.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <span className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">Grid airado</span>
                <span className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">Colores neutros</span>
                <span className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">Focus visible</span>
                <span className="rounded-lg bg-slate-50 px-3 py-2 text-slate-700">Tipografía legible</span>
              </div>
            </div>

            {/* Tarjeta estilo llamativo oscuro */}
            <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 p-[1px]">
              <div className="rounded-[15px] bg-slate-900/80 p-8">
                <h4 className="text-xl font-semibold text-white">Estilo Enfático</h4>
                <p className="mt-2 text-slate-300">
                  Gradientes, profundidad y micro-interacciones para experiencias memorables. Perfecto para landings,
                  lanzamientos y productos creativos.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <span className="rounded-lg bg-slate-800/70 px-3 py-2 text-slate-200">Glassmorphism</span>
                  <span className="rounded-lg bg-slate-800/70 px-3 py-2 text-slate-200">Gradientes</span>
                  <span className="rounded-lg bg-slate-800/70 px-3 py-2 text-slate-200">Sombras suaves</span>
                  <span className="rounded-lg bg-slate-800/70 px-3 py-2 text-slate-200">Animaciones sutiles</span>
                </div>
                <div className="mt-8">
                  <a
                    href="/collabs/CustomComponentsPage"
                    className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Ver componentes en acción
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                      <path fillRule="evenodd" d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414L9.414 17H6a1 1 0 01-1-1v-3.414l9.293-9.293zM5 16h2.586l8.293-8.293L13.586 6 5 14.586V16z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebDesignPage;
