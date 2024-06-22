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
    path: "three",
    element: (
      <ThreeContainer>
        <ThreeScene />
      </ThreeContainer>
    ),
  },
];
