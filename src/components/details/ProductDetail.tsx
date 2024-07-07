// src/components/ProductDetail.tsx

import { mockProducts } from '@/mocks/mocks';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-2">Categoría: {product.category}</p>
      <p className="text-green-600 font-bold text-xl">Precio: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;