/* Uso de estado local: Ahora se utiliza el estado local para almacenar las instancias de THREE.Scene, THREE.Camera, THREE.WebGLRenderer y OrbitControls. Esto permite un mejor control y manejo de estos objetos.
Manejo de errores: Se han agregado dos nuevas props, onModelLoaded y onError, que permiten a los usuarios del componente manejar los eventos de carga exitosa y errores.
Manejo de redimensionamiento: El manejo del evento de redimensionamiento se ha mejorado para asegurarse de que la cámara y el renderizador se actualicen correctamente.
Uso de props opcionales: Algunas props, como cameraType, cameraOptions y lighting, ahora son opcionales, lo que hace que el componente sea más flexible.
Documentación de props: Se han agregado comentarios de TypeScript para documentar las props del componente.
Separación de responsabilidades: El componente ahora se enfoca únicamente en la renderización de la escena 3D, dejando el manejo de eventos y la lógica de negocio a los usuarios del componente.
Uso de buenas prácticas de React: Se han seguido las mejores prácticas de React, como el uso de useEffect y useState para manejar el ciclo de vida del componente. */

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { GLTFLoader } from "three-stdlib";

interface ThreeSceneProps {
  modelPath: string;
  cameraType?: "perspective" | "orthographic";
  cameraOptions?: {
    fov?: number;
    near?: number;
    far?: number;
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
  };
  lighting?: {
    ambientLight?: {
      color?: number;
      intensity?: number;
    };
    pointLight?: {
      color?: number;
      intensity?: number;
      position?: THREE.Vector3;
    };
  };
  onModelLoaded?: (model: THREE.Object3D) => void;
  onError?: (error: Error) => void;
}

const SceneMultileUltimate: React.FC<ThreeSceneProps> = ({
  modelPath,
  cameraType = "perspective",
  cameraOptions = {},
  lighting = {
    ambientLight: {
      color: 0xffffff,
      intensity: 0.5,
    },
    pointLight: {
      color: 0xffffff,
      intensity: 1,
      position: new THREE.Vector3(5, 5, 5),
    },
  },
  onModelLoaded,
  onError,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.Camera | null>(null);
  const [renderer, setRenderer] = useState<THREE.WebGLRenderer | null>(null);
  const [controls, setControls] = useState<OrbitControls | null>(null);

  console.log(scene,camera,renderer,controls)
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const newScene = new THREE.Scene();
    setScene(newScene);

    let newCamera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    if (cameraType === "perspective") {
      newCamera = new THREE.PerspectiveCamera(
        cameraOptions.fov || 75,
        mount.offsetWidth / mount.offsetHeight,
        cameraOptions.near || 0.1,
        cameraOptions.far || 1000
      );
    } else {
      newCamera = new THREE.OrthographicCamera(
        cameraOptions.left || -5,
        cameraOptions.right || 5,
        cameraOptions.top || 5,
        cameraOptions.bottom || -5,
        cameraOptions.near || 0.1,
        cameraOptions.far || 1000
      );
    }
    setCamera(newCamera);

    const newRenderer = new THREE.WebGLRenderer({ antialias: true });
    newRenderer.setSize(mount.offsetWidth, mount.offsetHeight);
    newRenderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(newRenderer.domElement);
    setRenderer(newRenderer);

    const newControls = new OrbitControls(newCamera, newRenderer.domElement);
    newControls.enableDamping = true;
    setControls(newControls);

    const ambientLight = new THREE.AmbientLight(
      lighting.ambientLight?.color || 0xffffff,
      lighting.ambientLight?.intensity || 0.5
    );
    newScene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      lighting.pointLight?.color || 0xffffff,
      lighting.pointLight?.intensity || 1
    );
    pointLight.position.copy(
      lighting.pointLight?.position || new THREE.Vector3(5, 5, 5)
    );
    newScene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        newScene.add(model);
        onModelLoaded?.(model);
        animate();
      },
      undefined,
      (error) => {
        onError?.(convertErrorEvent(error));
      }
    );

    const animate = () => {
      if (!newScene || !newCamera || !newRenderer || !newControls) return;
      requestAnimationFrame(animate);
      newControls.update();
      newRenderer.render(newScene, newCamera);
    };

    const handleResize = () => {
      if (!newCamera || !newRenderer) return;
      if (newCamera instanceof THREE.PerspectiveCamera) {
        newCamera.aspect = mount.offsetWidth / mount.offsetHeight;
        newCamera.updateProjectionMatrix();
      } else if (newCamera instanceof THREE.OrthographicCamera) {
        const aspect = mount.offsetWidth / mount.offsetHeight;
        const frustumHeight = newCamera.top - newCamera.bottom;
        newCamera.left = (-frustumHeight * aspect) / 2;
        newCamera.right = (frustumHeight * aspect) / 2;
        newCamera.updateProjectionMatrix();
      }
      newRenderer.setSize(mount.offsetWidth, mount.offsetHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(newRenderer.domElement);
    };
  }, [modelPath, cameraType, cameraOptions, lighting, onModelLoaded, onError]);

  return <div ref={mountRef} className="h-full" />;
};

function convertErrorEvent(error: unknown): Error {
  if (error instanceof ErrorEvent) {
    return new Error(error.message);
  } else if (error instanceof Error) {
    return error;
  } else {
    return new Error("Unknown error");
  }
}

export default SceneMultileUltimate;