// src/components/ProductDetail.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '@/mocks/mocks';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
  tags?: string[];
  price: number;
  imageUrl?: string[];
}

const useWhatsApp = (product: Product | null) => {
  const phoneNumber = '5493492524734'; // Número de WhatsApp con código de país (ejemplo para Argentina)

  const getMessage = () => {
    if (!product) return '';
    return encodeURIComponent(
      `Hola, estoy interesado en el producto: ${product.name}\n` +
      `Categoría: ${product.category}\n` +
      `Precio: $${product.price.toFixed(2)}\n` +
      `¿Podrías darme más información?`
    );
  };

  const getWhatsAppLink = (useWeb = true) => {
    const message = getMessage();
    return useWeb
      ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`
      : `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  };

  const openWhatsApp = (useWeb = true) => {
    const link = getWhatsAppLink(useWeb);
    window.open(link, '_blank');
  };

  return { openWhatsApp };
};

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { openWhatsApp } = useWhatsApp(product);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = mockProducts.find(p => p.id === Number(id));
        if (foundProduct) {
          setProduct(foundProduct as Product);
        } else {
          setError('Producto no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el producto');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleWhatsAppClick = (useWeb: boolean) => {
    try {
      openWhatsApp(useWeb);
    } catch (error) {
      console.error('Error al abrir WhatsApp:', error);
      alert('Hubo un problema al intentar abrir WhatsApp. Por favor, inténtalo de nuevo.');
    }
  };

  if (loading) {
    return <div className="text-center py-4">Cargando...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (!product) {
    return null;
  }

  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <Link to="/store" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        &larr; Volver a la lista de productos
      </Link>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img 
            src={product.imageUrl?.[selectedImageIndex]} 
            alt={`${product.name} - imagen principal`}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex space-x-2 overflow-x-auto">
          {(product.imageUrl ?? []).map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${product.name} - miniatura ${index + 1}`}
                className={`w-16 h-16 object-cover rounded cursor-pointer ${
                  index === selectedImageIndex ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-3">
            <span className="font-semibold">Categoría:</span> {product.category}
          </p>
          <p className="text-green-600 font-bold text-2xl mb-4">
            Precio: ${product.price.toFixed(2)}
          </p>
            <button 
              onClick={() => handleWhatsAppClick(false)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center w-full justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Consultar por WhatsApp Móvil
            </button>
        </div>
      </div>
    </article>
  );
};

export default ProductDetail;
