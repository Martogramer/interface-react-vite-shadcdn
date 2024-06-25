/* Acá implementamos Canvas y 'useGLTF' para la prueba de renderizado de archivos .glb y .gltf en lugar de objetos de THREE.js */
import React from 'react';
import { OrbitControls, TransformControls } from '@react-three/drei';
import { extend } from '@react-three/fiber';
extend({ OrbitControls, TransformControls })

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three-stdlib';

// Asegurarse de que todos los objetos necesarios estén extendidos

type ModelProps = {
  path: string;
};

const ModelViewer: React.FC<ModelProps> = ({ path }) => {
    const gltf = useLoader(GLTFLoader, `${path}`)
    return <primitive object={gltf.scene} />
};

export default ModelViewer;