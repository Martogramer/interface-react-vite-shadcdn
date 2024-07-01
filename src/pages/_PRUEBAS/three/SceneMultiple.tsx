/* 
Definimos el tipo de la cámara como THREE.PerspectiveCamera | THREE.OrthographicCamera en lugar de THREE.Camera.
Utilizamos un tipo de aserción para acceder a los métodos específicos de cada tipo de cámara en el manejador de redimensionamiento.
*/
import React, { useEffect, useRef } from "react";
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
}

const SceneMultiple: React.FC<ThreeSceneProps> = ({
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
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    let camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    if (cameraType === "perspective") {
      camera = new THREE.PerspectiveCamera(
        cameraOptions.fov || 75,
        window.innerWidth / window.innerHeight,
        cameraOptions.near || 0.1,
        cameraOptions.far || 1000
      );
    } else {
      camera = new THREE.OrthographicCamera(
        cameraOptions.left || -5,
        cameraOptions.right || 5,
        cameraOptions.top || 5,
        cameraOptions.bottom || -5,
        cameraOptions.near || 0.1,
        cameraOptions.far || 1000
      );
    }
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(
      lighting.ambientLight?.color || 0xffffff,
      lighting.ambientLight?.intensity || 0.5
    );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      lighting.pointLight?.color || 0xffffff,
      lighting.pointLight?.intensity || 1
    );
    pointLight.position.copy(
      lighting.pointLight?.position || new THREE.Vector3(5, 5, 5)
    );
    scene.add(pointLight);

    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        animate(); // Iniciar la animación después de cargar el modelo
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      (camera as THREE.PerspectiveCamera).aspect =
        window.innerWidth / window.innerHeight;
      (camera as THREE.PerspectiveCamera).updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, [modelPath, cameraType, cameraOptions, lighting]);

  return <div ref={mountRef} className="h-full" />;
};

export default SceneMultiple;
