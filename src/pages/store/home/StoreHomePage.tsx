import React from "react";
import { NavLink } from "react-router-dom";

interface DeveloperCardProps {
  imageSrc: string;
  title: string;
  description: string;
  to: string;
  category: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  imageSrc,
  title,
  description,
  to,
  category,
}) => (
  <NavLink to={to} className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-6 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        {category}
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  </NavLink>
);

const DeveloperCardVariant: React.FC<DeveloperCardProps> = ({
  imageSrc,
  title,
  description,
  category,
  to,
}) => (
  <NavLink to={to} className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-6 lg:p-16">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        {category}
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">{title}</p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{description}</p>
        </div>
      </div>
    </div>
  </NavLink>
);

const StoreHomePage: React.FC = () => {
  const developers = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      category: "indumentaria",
      title: "Buzos Oversize",
      to: "#",
      description:
        "👕 Añade un toque de comodidad y estilo relajado a tu guardarropa con nuestros buzos oversize. Confeccionados con tejidos suaves y de alta calidad, estos buzos ofrecen un ajuste holgado y cómodo que es perfecto para los días relajados en casa o para lucir un estilo urbano y moderno en la calle.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "accesorios",
      title: "Smartwatchs",
      to: "#",
      description:
        "🕒  Descubre la última tecnología para llevar en tu muñeca. Nuestros smartwatches combinan estilo y funcionalidad para mantenerte conectado y activo durante todo el día. Desde monitoreo de actividad física hasta notificaciones inteligentes, estos dispositivos están diseñados para adaptarse a tu estilo de vida activo.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1585155784229-aff921ccfa10?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "accesorios",
      title: "Auriculares inalámbricos",
      to: "#",
      description:
        " 🎧 Sumérgete en un mundo de música sin límites con nuestros auriculares inalámbricos. Conectividad Bluetooth, calidad de sonido premium y diseño ergonómico para un ajuste cómodo durante horas. Experimenta la libertad de movimiento mientras disfrutas de tu música favorita en cualquier lugar y en cualquier momento.",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1714070700737-24acfe6b957c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "indumentaria",
      title: "Remeras Oversize",
      to: "#",
      description:
        "👚  Nuestras remeras oversize son una fusión perfecta de estilo y comodidad. Confeccionadas con telas transpirables y cortes amplios, estas remeras ofrecen un aspecto moderno y desenfadado que es ideal para cualquier ocasión. Desde looks casuales hasta combinaciones más elegantes, estas remeras versátiles son un imprescindible en cualquier guardarropa.",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            🚀 Bienvenidos a nuestro Store! 🌟
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            Nuestros productos combinan tecnología, moda y accesorios para
            complementar tu estilo de vida. Nuestro objetivo es ofrecerte
            calidad, innovación y estilo en cada producto. Explora nuestras
            colecciones y descubre lo mejor en tecnología y moda.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {developers.slice(0, 2).map((dev, index) => (
            <li key={index}>
              <DeveloperCard {...dev} />
            </li>
          ))}
          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-1 lg:row-start-1">
            <DeveloperCardVariant {...developers[2]} />
          </li>
          <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-2">
            <DeveloperCardVariant {...developers[3]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StoreHomePage;
