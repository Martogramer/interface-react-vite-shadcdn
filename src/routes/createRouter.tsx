import { createBrowserRouter } from "react-router-dom";
import { user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import HomePage from '../pages/index';
import PanelUserAdmin from "@/pages/admin/PanelUserAdmin";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";
import CustomComponents from "@/pages/_PRUEBAS/CustomComponents";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <HomePage />
        )
    },
    {
        path: '/error',
        element: (
            <HomePage />
        )
    },
    {
        path: '/dashboard',
        element: (
            <LayoutUser />
        ),
        children: user,
    },
    {
		path: '/proveedor',
		element: <LayoutUserAdmin />,

		children: [
			{
				path: '',
				element: <PanelUserAdmin />,
			},
		],
	},
    {
		path: '/_PRUEBAS',
		element: <CustomComponents />,
		/* children: [
			{
				path: '',
				element: <PanelUserAdmin />,
			},
		], */
	}
])