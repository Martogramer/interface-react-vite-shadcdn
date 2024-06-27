import  { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Model3D } from './Model3D';

interface Model3DViewerProps {
  modelPath: string;
}

export function Model3DViewer({ modelPath }: Model3DViewerProps) {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={2} />
        <spotLight position={[1, 1, 10]} angle={1.0} penumbra={1} />
        <pointLight position={[-1, -10, -10]} />
        <Suspense fallback={null}>
          <Model3D modelPath={modelPath} />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}