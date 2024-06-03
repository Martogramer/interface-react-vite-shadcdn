import { createBrowserRouter } from "react-router-dom";
import { user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import HomePage from '../pages/index';
import CustomComponents from "@/pages/_PRUEBAS/CustomComponents";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/StoreHomePage";

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
		path: '/_PRUEBAS',
		element: <CustomComponents />,
	}
])