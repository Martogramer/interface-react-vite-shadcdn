import React from "react";

interface ProductItemProps {
  title: string;
  href: string;
  src: string;
  description: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({ title, href, src, description }) => {
  return (
    <a href={href} className="product-item">
      <img src={src} alt={title} width={150} height={150} />
      <div className="product-item-details">
        <h4 className="product-item-title">{title}</h4>
        <p className="product-item-description">{description}</p>
      </div>
    </a>
  );
};
