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

export default DeveloperCard;
