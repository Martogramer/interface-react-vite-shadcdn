/* Acá implementamos Canvas y 'useGLTF' para la prueba de renderizado de archivos .glb y .gltf en lugar de objetos de THREE.js */
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, TransformControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
extend({ OrbitControls, TransformControls })

// Asegurarse de que todos los objetos necesarios estén extendidos
extend(THREE);

type ModelProps = {
  path: string;
};

const Model: React.FC<ModelProps> = ({ path }) => {
  const { scene } = useGLTF(path);
  return <primitive object={scene} />;
};

const ModelViewer: React.FC<ModelProps> = ({ path }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 5]} />
      <Suspense fallback={<span>Loading...</span>}>
        <Model path={path} />
      </Suspense>
      <OrbitControls />
      <TransformControls />
    </Canvas>
  );
};

export default ModelViewer;

