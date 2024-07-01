import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './style.css'; // Suponiendo que tu archivo de estilos está en src/App.css
interface ImageProps {
  src: string;
}
type Routes =
  | "usuarios/perfil"
  | "usuarios/ventas"
  | "usuarios/clientes"
  | "usuarios/payments"
  | "usuarios/productos"
  | "usuarios/foro"
  | "usuarios/nosotros"
  | "usuarios/componentes";
  const imageLinks: Record<Routes, string> = {
    "usuarios/perfil": "https://images.unsplash.com/photo-1543094585-3629d00f6f3a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/ventas": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/clientes": "https://plus.unsplash.com/premium_photo-1683288662040-5ca51d0880b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/payments": "https://plus.unsplash.com/premium_photo-1683288537184-7ef228ca6820?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/productos": "https://plus.unsplash.com/premium_photo-1683288662019-c92caea8276d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/foro": "https://images.unsplash.com/photo-1674673243921-9e6ab580431f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    "usuarios/nosotros": "https://plus.unsplash.com/premium_photo-1683288537199-3a102f1a3959?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "usuarios/componentes": "https://plus.unsplash.com/premium_photo-1683288662040-5ca51d0880b2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };


const LazyImage: React.FC<ImageProps> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <img
        ref={imgRef}
        src={isLoaded ? `${src}&w=1770&q=80` : `${src}&w=10&q=80`}
        alt=""
        className={`h-80 w-full rounded-md object-cover ${
          isLoaded ? 'image-rendering-auto' : 'image-rendering-pixelated'
        }`}
      />
    </div>
  );
};

const ImageContainer: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.slice(1); // Eliminamos el primer '/' de la ruta

  // Validamos que la ruta actual es una de las rutas definidas
  const isValidRoute = (path: string): path is Routes => {
    return path in imageLinks;
  };

  const imageSrc = isValidRoute(currentPath) ? imageLinks[currentPath] : null;

  return imageSrc ? (
    <LazyImage src={imageSrc} />
  ) : (
    <div>No image available for this route</div>
  );
};

export default ImageContainer;
