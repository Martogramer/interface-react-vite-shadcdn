import CustomComponents from "@/pages/_PRUEBAS/CustomComponents";
import TablerUsers from "@/pages/admin/TablerUsers";
import DashboardCrud from "@/pages/users/DashboardCrud";
import Dashboard from "@/pages/users/DashboardTablerInfo";
import { ProfilePage } from "@/pages/users/ProfilePage";
import { LoginShad } from "@/pages/users/LoginShad";
import OffersPage from "@/pages/users/OffersPage";
import Forum from "@/pages/users/Forum";
import { RegisterShad } from "@/pages/users/RegisterShad";
import Payments from "@/pages/users/Payments";
import ThreeContainer from "@/pages/_PRUEBAS/three/ThreeContainer";
import ThreeScene from "@/pages/_PRUEBAS/three/ThreeScene";
import SceneMultiple from "@/pages/_PRUEBAS/three/SceneMultiple";
import * as THREE from 'three';

export const user = [
  {
    path: "",
    element: <OffersPage />,
  },
  {
    path: "perfil",
    element: <ProfilePage />,
  },
  {
    path: "ventas",
    element: <Dashboard />,
  },
  {
    path: "clientes",
    element: <TablerUsers />,
  },
  {
    path: "payments",
    element: <Payments />,
  },
  {
    path: "productos",
    element: <DashboardCrud />,
  },
  {
    path: "login",
    element: <LoginShad />,
  },
  {
    path: "signup",
    element: <RegisterShad />,
  },
  {
    path: "foro",
    element: <Forum />,
  },
  {
    path: "nosotros",
    element: <CustomComponents />,
  },
  {
    path: "_PRUEBAS",
    element: <CustomComponents />,
  },
];
export const admin = [
  {
    path: "",
    element: <p>Ruta children admin uno</p>,
  },
  {
    path: "_PRUEBAS",
    element: <CustomComponents />,
  },
  {
    path: "escenaMultiple",
    element: (
      <SceneMultiple
        modelPath="../_PRUEBAS/three/models/scene.gltf"
        cameraType="perspective"
        cameraOptions={{
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        lighting={{
          ambientLight: {
            color: 0xffffff,
            intensity: 0.5,
          },
          pointLight: {
            color: 0xffffff,
            intensity: 1,
            position: new THREE.Vector3(5, 5, 5),
          },
        }}
      />
    ),
  },
  {
    path: "three",
    element: (
      <ThreeContainer>
        <ThreeScene />
      </ThreeContainer>
    ),
  },
];
