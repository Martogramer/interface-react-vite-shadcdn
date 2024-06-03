import React from "react";
import { NavLink } from "react-router-dom";

interface DeveloperCardProps {
  imageSrc: string;
  title: string;
  description: string;
  to: string;
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({ imageSrc, title, description, to }) => (
  <NavLink to={to} className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-6 lg:p-8">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        Developer
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">
        {title}
      </p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  </NavLink>
);

const DeveloperCardVariant: React.FC<DeveloperCardProps> = ({ imageSrc, title, description }) => (
  <NavLink to="#" className="group relative block bg-black">
    <img
      alt={title}
      src={imageSrc}
      className="absolute aspect-square inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:opacity-50"
    />

    <div className="relative p-4 sm:p-6 lg:p-12">
      <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
        Developer
      </p>

      <p className="text-xl font-bold text-white sm:text-2xl">
        {title}
      </p>

      <div className="mt-32 sm:mt-48 lg:mt-64">
        <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  </NavLink>
);

const StoreHomePage: React.FC = () => {
  const developers = [
    {
      imageSrc: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Tony Wayne",
      to: '#',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Tony Wayne",
      to: '#',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
      title: "Tony Wayne",
      to: '#',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis perferendis hic asperiores quibusdam quidem voluptates doloremque reiciendis nostrum harum. Repudiandae?"
    }
  ];

  return (
    <div>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
          <header className="text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
              New Collection
            </h2>

            <p className="mx-auto mt-4 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
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
              <DeveloperCardVariant {...developers[2]} />
            </li>
          </ul>
        </div>
    </div>
  );
};

export default StoreHomePage;
