import React from "react";

const AdsPage: React.FC = () => {
  return (
    <>
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Publicidad en Línea (Ads)
            </h2>
            <p className="mt-4 text-gray-400">
              Maximiza tu retorno de inversión con campañas de publicidad
              altamente segmentadas en Google Ads, Facebook Ads, y otras
              plataformas. Te ayudamos a llegar al público adecuado y generar
              más leads de calidad.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Mejorar mis Ads
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdsPage;
