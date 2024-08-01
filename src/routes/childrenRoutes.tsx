import CustomComponents from "@/pages/_PRUEBAS/CustomComponents";
import TablerUsers from "@/pages/admin/TablerUsers";
import DashboardCrud from "@/pages/users/DashboardCrud";
import DashboardTablerInfo from "@/pages/users/DashboardTablerInfo";
import { ProfilePage } from "@/pages/users/ProfilePage";
import { LoginShad } from "@/pages/users/LoginShad";
import OffersPage from "@/pages/users/OffersPage";
import Forum from "@/pages/users/Forum";
import { RegisterShad } from "@/pages/users/RegisterShad";
import Payments from "@/pages/users/Payments";
import ThreeContainer from "@/pages/_PRUEBAS/three/ThreeContainer";
import ThreeScene from "@/pages/_PRUEBAS/three/ThreeScene";
import SceneMultileUltimate from "@/pages/_PRUEBAS/three/SceneMultipleUltimate";
import * as THREE from "three";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";
import RegisterPage from "@/components/_Customs2024/containers/RegisterPage";
import { Model3DViewer } from "@/pages/_PRUEBAS/three/custom/Model3DViewer";
import BlogPostDetailMultipleRENDER from "@/features/details/BlogPostDetailMultipleRENDER";
import HomeUser from "@/pages/users/Home";

export const user = [
  {
    path: "",
    element: (
      <>
        <ErrorBoundary>
          <HomeUser />
        </ErrorBoundary>
      </>
    ),
  },
  {
    path: "perfil",
    element: <ProfilePage />,
  },
  {
    path: "sales",
    element: <DashboardTablerInfo />,
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
    path: "foro",
    element: <Forum />,
  },
  {
    path: 'foro/:id',
    element: <BlogPostDetailMultipleRENDER />,
  },
  {
    path: "nosotros",
    element: <OffersPage />,
  },
  {
    path: "componentes",
    element: <CustomComponents />,
  },
  {
    path: "login",
    element: (
      <RegisterPage>
        <LoginShad />
      </RegisterPage>
    ),
  },
  {
    path: "signup",
    element: (
      <RegisterPage>
        <RegisterShad />,
      </RegisterPage>
    ),
  },
  {
    path: "_PRUEBAS",
    element: (
      <>
        <ErrorBoundary>
          <Model3DViewer modelPath="/public/models/smartwatch.glb" />
        </ErrorBoundary>
        <ThreeContainer>
          <ErrorBoundary>
            <ThreeScene />
          </ErrorBoundary>
        </ThreeContainer>
      </>
    ),
  },
];
export const admin = [
  {
    path: "_PRUEBAS",
    element: <CustomComponents />,
  },
  {
    path: "",
    element: (
      <ThreeContainer>
        <ThreeScene />
      </ThreeContainer>
    ),
  },
  {
    path: "escena-mejorada",
    element: (
      <ThreeContainer>
        <SceneMultileUltimate
          modelPath="/models/scene.gltf"
          cameraType="perspective"
          cameraOptions={{ fov: 75, near: 0.1, far: 1000 }}
          lighting={{
            ambientLight: { color: 0xffffff, intensity: 0.5 },
            pointLight: {
              color: 0xffffff,
              intensity: 1,
              position: new THREE.Vector3(5, 5, 5),
            },
          }}
          onModelLoaded={(model) => console.log("Model loaded:", model)}
          onError={(error) => console.error("Error loading model:", error)}
        />
      </ThreeContainer>
    ),
  },
];
