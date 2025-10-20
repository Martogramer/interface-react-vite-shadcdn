/**
 * Configures the web routing using `react-router-dom`.
 * Defines various routes and their corresponding React components.
 *
 * @example
 * To add a new route, simply add a new object to the `router` array:
 * ```
 * {
 *   path: "/new-route",
 *   element: <NewRouteComponent />,
 * }
 * ```
 *
 * @see https://reactrouter.com/en/main for more information on `react-router-dom`.
 */
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import NotPass from "@/components/errorPage/NotPass";
import HomePage from "@/pages";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";
import LayoutCollabs from "@/layouts/LayoutCollabs";
import Forum from "@/pages/forum/Forum";
import BlogPostDetailMultipleRENDER from "@/features/details/BlogPostDetailMultipleRENDER";

import LayoutMain from "@/layouts/LayoutMain";
import LayoutServices from "@/layouts/LayoutServices";
import LayoutForo from "@/layouts/LayoutForo";
import Telescopiens from "@/pages/landings/Telescopiens";
import WebDesignPage from "@/pages/services/WebDesignPage";
import SeoPage from "@/pages/services/SeoPage";
import MktPage from "@/pages/services/MktPage";
import AdsPage from "@/pages/services/AdsPage";
import CustomComponentsPage from "@/pages/collabs/CustomComponentsPage";
import GuidePage from "@/pages/collabs/GuidePage";
import Docs from "@/pages/collabs/Docs";
import MultiRenderDocs from "@/features/details/MultiRenderDocs";
import LayoutContacto from "@/layouts/LayoutContacto";
import ContactPage from "@/pages/contacto/ContactPage";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";
import { admin } from "./childrenRoutes";
import HowToStartSection from "@/pages/landings/HostProjectLandingPage";
import HomePageAV from "@/pages/demos/AudioVisuales/HomePage";

{
  /* 🚀
Este archivo configura el enrutamiento web utilizando `react-router-dom`. 
Define varias rutas y sus correspondientes componentes de React:

1. La ruta raíz (`'/'`) redirige a la página de inicio (`'/inicio'`) utilizando `<Navigate>`.
2. Define una ruta para la página de inicio (`'/inicio'`) que renderiza el componente `HomePage`.
3.  -> ErrorBoundary <- ruta de error (`'/error'`) para manejar accesos no autorizados o páginas no encontradas.
4. La sección de usuarios (`'/usuarios'`) usa el layout `LayoutUser` y subrutas específicas definidas en `user`. (Children Routes)

Posibles mejoras:
- Añadir manejo de rutas no encontradas (`404`) para mejorar la experiencia del usuario.
- Considerar el uso de rutas anidadas dinámicas para mejorar la escalabilidad de la estructura del enrutamiento.
- Implementar Lazy Loading para cargar componentes solo cuando son necesarios, mejorando el rendimiento.
*/
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/telescopiens" replace />,
  },
  {
    path: "/telescopiens",
    element: <Navigate to="/telescopiens" replace />,
  },
  {
    path: "/servicios",
    element: <Navigate to="/servicios" replace />,
  },
  {
    path: "/colaboradores",
    element: <Navigate to="/colaboradores" replace />,
  },
  {
    path: "/contacto",
    element: <Navigate to="/contacto" replace />,
  },
  {
    path: "/α",
    element: (
      <ErrorBoundary>
        <HomePage />
      </ErrorBoundary>
    ),
  },
  {
    path: "/telescopiens",
    element: (
      <LayoutMain>
        <ErrorBoundary>
          <LayoutCollabs /> {/* reemplazar por parallax main */}
        </ErrorBoundary>
      </LayoutMain>
    ),
    children: [{ path: "", element: <Telescopiens /> }],
  },
  {
    path: "/servicios",
    element: (
      <LayoutMain>
        <ErrorBoundary>
          <LayoutServices />
        </ErrorBoundary>
      </LayoutMain>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="webdesign" replace />,
      },
      { path: "empezar", element: <HowToStartSection /> },
      { path: "webdesign", element: <WebDesignPage /> },
      { path: "seo", element: <SeoPage /> },
      { path: "ads", element: <MktPage /> },
      { path: "mkt", element: <AdsPage /> },
    ],
  },
  {
    path: "/audiovisuales",
    element: (
      <LayoutMain>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </LayoutMain>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="homepage" replace />,
      },
      { path: "homepage", element: <HomePageAV /> },
      { path: "webdesign", element: <WebDesignPage /> },
      { path: "seo", element: <SeoPage /> },
      { path: "ads", element: <MktPage /> },
      { path: "mkt", element: <AdsPage /> },
    ],
  },
  {
    path: "/colaboradores",
    element: (
      <>
        <LayoutMain>
          <ErrorBoundary>
            <LayoutCollabs />
          </ErrorBoundary>
        </LayoutMain>
      </>
    ),
    children: [
      {
        path: "*",
        element: <NotPass />,
      },
      {
        path: "",
        element: <Navigate to="guide" replace />,
      },
      { path: "guide", element: <GuidePage /> },
      { path: "componentes", element: <CustomComponentsPage /> },
      {
        path: "docs",
        element: <Docs />,
        children: [
          { path: ":id", element: <MultiRenderDocs /> },
          { path: "", element: <Navigate to="1" replace /> },
        ],
      },
    ],
  },
  {
    path: "/foro",
    element: (
      <LayoutMain>
        <LayoutForo />
      </LayoutMain>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="@marto" replace />,
      },
      {
        path: "@marto",
        element: <Forum />,
        children: [{ path: ":id", element: <BlogPostDetailMultipleRENDER /> }],
      },
    ],
  },
  {
    path: "/contacto",
    element: (
      <LayoutMain>
        <LayoutContacto />
      </LayoutMain>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="colaboradores" replace />,
      },
      {
        path: "colaboradores",
        element: <ContactPage />,
      },
      {
        path: "clientes",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/error",
    element: <NotPass />,
  },
  {
    path: "/admin",
    element: (
      <LayoutMain>
        <LayoutUserAdmin />
      </LayoutMain>
    ),
    children: admin,
  }
]);
