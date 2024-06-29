import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/Index";
import { admin, user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import HomePage from "@/pages";
import NotPass from "@/components/errorPage/NotPass";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";
import HomeAlternative from "@/pages/HomeAlternative";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/inicio" replace />
    },
    {
        path: '/inicio',
        element: (
            <HomePage />
        )
    },
    {
        path: '/error',
        element: (
            <NotPass />
        )
    },
    {
        path: '/usuarios',
        element: (
            <LayoutUser />
        ),
        children: user,
    },
    {
        path: '/inicioalternative',
        element: (
            <HomeAlternative />
        )
    },
    {
		path: '/store',
		element: <LayoutStore/>,

		children: [
			{
				path: '',
				element: <StoreHomePage />,
			},
		],
	},
    {
		path: '/admin',
		element: <LayoutUserAdmin />,
        children: admin
	}
])