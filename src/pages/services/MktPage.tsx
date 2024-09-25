import React from "react";

const MktPage: React.FC = () => {
  return (
    <>
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Marketing Digital
            </h2>
            <p className="mt-4 text-gray-400">
              Llevamos tu negocio al siguiente nivel con estrategias
              personalizadas de marketing digital. Ya sea a través de email,
              redes sociales o publicidad pagada, te ayudamos a conectar con tu
              audiencia y aumentar tus ventas.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Quiero mejorar mi marketing
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MktPage;
