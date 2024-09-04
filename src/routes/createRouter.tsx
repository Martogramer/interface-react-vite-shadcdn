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
import { createBrowserRouter, Navigate } from "react-router-dom";
import { admin, user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import NotPass from "@/components/errorPage/NotPass";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";
import HomePage from "@/pages";
import About from "@/pages/store/about/About";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";
import LayoutCollabs from "@/layouts/LayoutCollabs";
import HomeUser from "@/pages/users/Home";
import Forum from "@/pages/users/Forum";
import BlogPostDetailMultipleRENDER from "@/features/details/BlogPostDetailMultipleRENDER";
import { BackgroundBeamsDemo } from "@/components/_Customs2024/Background";
import { PlaceholdersAndVanishInputDemo } from "@/components/inputs/PlaceholdersAndVanishInputDemo";
import CollaboratorsGuidePage from "@/pages/collabs/CollaboratorsGuidePage";
import ServicesPage from "@/pages/services/ServicesPage";

{
  /* 
🚀 Este código configura el enrutamiento web utilizando `react-router-dom`. 
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
    element: <Navigate to="/α" replace />,
  },
  {
    path: "/admin",
    element: <LayoutUserAdmin />,
    children: admin,
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
    path: "/error",
    element: <NotPass />,
  },
  {
    path: "/usuarios",

    element: (
      <ErrorBoundary>
        <LayoutUser />
      </ErrorBoundary>
    ),
    children: user,
  },

  {
    path: "/services",
    element: <LayoutCollabs />,
    children: [{ path: "", element: <PlaceholdersAndVanishInputDemo /> }],
  },
  {
    path: "/collabs",
    element: <LayoutCollabs />,
    children: [
      {
        path: "",
        element: <HomeUser />,
      },
      { path: "webdesign", element: <ServicesPage /> },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <About />,
      },
      {
        path: "foro",
        element: <Forum />,
      },
      {
        path: "foro/:id",
        element: <BlogPostDetailMultipleRENDER />,
      },
      {
        path: "contact",
        element: (
          <BackgroundBeamsDemo
            title="🚀 ¿Listo para transformar tu negocio?"
            description="Estamos aquí para potenciar tu marca y llevarla a donde merece estar: en la mente de tus clientes y en la cima de los resultados de búsqueda."
            inputPlaceholder="ejemplo@email.com"
            height="50rem"
            titleColor="from-blue-200 to-blue-600"
          />
        ),
      },
      { path: "collaboratos-guide", element: <CollaboratorsGuidePage /> },
      { path: "docs", element: <CollaboratorsGuidePage /> },
    ],
  },
]);
