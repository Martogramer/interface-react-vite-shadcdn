import { createBrowserRouter, Navigate } from "react-router-dom";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/Index";
import { user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import HomePage from "@/pages";
import NotPass from "@/components/errorPage/NotPass";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";

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
	}
])