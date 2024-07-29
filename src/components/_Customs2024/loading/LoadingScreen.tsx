import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3D } from '@/pages/_PRUEBAS/three/custom/Model3D';

const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => setIsVisible(false), 1000); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        style={{ opacity, transition: 'opacity 0.5s ease-in-out' }}
      >
        <div className="w-64 h-64">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={2} />c
            <spotLight position={[1, 1, 10]} angle={1.0} penumbra={1} />
            <pointLight position={[-1, -10, -10]} />
            <Model3D modelPath="/public/models/terra.glb" scale={1.5} />
            <OrbitControls />
          </Canvas>
        </div>
      </div>
    )
  );
};

export default LoadingScreen;
