import { createBrowserRouter } from "react-router-dom";
import { admin, user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import LayoutAdmin from "@/layouts/LayoutUserAdmin";
import Dashboard from "@/pages/users/Dashboard";
import HomePage from '../pages/index';
import PanelUserAdmin from "@/pages/admin/PanelUserAdmin";
import LayoutUserAdmin from "@/layouts/LayoutUserAdmin";

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
	}
])