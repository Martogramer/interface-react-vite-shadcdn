import React from "react";
import { NavLink } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  link: string;
}

export const ProductCard: React.FC<Product> = ({ name, imageUrl, link }) => (
  <li>
    <NavLink to={link} className="group relative block">
      <img
        src={imageUrl}
        alt={name}
        className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        <h3 className="text-xl font-medium text-white">{name}</h3>
        <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
          Shop Now
        </span>
      </div>
    </NavLink>
  </li>
);
