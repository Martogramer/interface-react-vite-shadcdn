import React from 'react';

const RadioPlayer: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">
        🎧 Nodecast Synthwave Radio
      </h1>

      <div className="w-full max-w-md">
        <audio controls autoPlay className="w-full rounded shadow-lg">
          <source src="http://localhost:3000/stream" type="audio/mpeg" />
          Tu navegador no soporta audio.
        </audio>

        <div className="mt-4 text-sm text-gray-400 text-center">
          Reproduciendo desde <code>/stream</code> (loop 24/7)<br />
          Asegurate de tener el backend corriendo localmente o en Render
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
