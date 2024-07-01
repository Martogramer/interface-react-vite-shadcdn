/* utilizaremos la biblioteca Three.js junto con react-three-fiber, que es una adaptación de Three.js para React.  */
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

interface Model3DProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

export function Model3D({ modelPath, scale = 1, position = [0, 0, 0] }: Model3DProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF(modelPath);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} dispose={null} scale={scale} position={position}>
      <primitive object={scene} />
    </group>
  );
}