import React from "react";

const StoreBanner: React.FC = () => {
  return (
    <section className="h-screen overflow-hidden bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80')"}}>
      <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col justify-center items-center h-full">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            STORE
          </h2>
          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreBanner;
