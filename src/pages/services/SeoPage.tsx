import React from "react";

const SeoPage: React.FC = () => {
  return (
    <>
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Optimización en Motores de Búsqueda (SEO)
            </h2>
            <p className="mt-4 text-gray-400">
              Aumenta la visibilidad de tu sitio web en Google y otros motores
              de búsqueda con nuestras técnicas avanzadas de SEO. Te ayudamos a
              generar más tráfico orgánico y mejorar tu posicionamiento.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Mejorar mi SEO
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoPage;
