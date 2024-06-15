import CustomComponents from "@/pages/_PRUEBAS/CustomComponents";
import TablerUsers from "@/pages/admin/TablerUsers";
import DashboardCrud from "@/pages/users/DashboardCrud";
import Dashboard from "@/pages/users/DashboardTablerInfo";
import { ProfilePage } from "@/pages/users/ProfilePage";
import { LoginShad } from "@/pages/users/LoginShad";
import OffersPage from "@/pages/users/OffersPage";
//import Payments from "@/pages/users/Payments"
import PostsPage from "@/pages/users/PostsPage";
import { RegisterShad } from "@/pages/users/RegisterShad";

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
      element: <PostsPage />,
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
  /* {
        path: 'payments',
        element: <Payments/>,
    }, */
    {
      path: "foro",
      element: <CustomComponents />,
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
    path: "dos",
    element: <p>Ruta children admin dos</p>,
  },
];
