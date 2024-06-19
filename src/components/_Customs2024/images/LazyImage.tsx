import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Suponiendo que tu archivo de estilos está en src/App.css

interface ImageProps {
  src: string;
}

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

export default LazyImage;
