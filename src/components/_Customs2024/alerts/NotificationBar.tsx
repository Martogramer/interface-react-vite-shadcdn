import React, { useState, useEffect } from "react";

const NotificationBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar la barra de notificación después de 1 segundo
    const showTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Ocultar la barra de notificación después de 5 segundos
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    // Limpiar los timeouts si el componente se desmonta
    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    isVisible && (
      <div className="text-center flex items-center z-10 justify-between gap-4 bg-indigo-600 px-4 py-3 text-white transition-opacity duration-300">
        <div>
          
        </div>
        <p className="text-sm text-center  font-medium">
          Te gusta lo que ves?
          <a href="#" className="inline-block underline ml-1">Checka la nueva interface de usuario!</a>
        </p>

        <button
          aria-label="Dismiss"
          className="shrink-0 rounded-lg flex-end bg-black/10 p-1 transition hover:bg-black/20"
          onClick={() => setIsVisible(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  );
};

export default NotificationBar;
