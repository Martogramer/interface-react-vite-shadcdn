import { createBrowserRouter } from "react-router-dom";
import LayoutStore from "@/layouts/LayoutStore";
import StoreHomePage from "@/pages/store/home/Index";

export const router = createBrowserRouter([
    /* {
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
    }, */
    {
		path: '/',
		element: <LayoutStore/>,

		children: [
			{
				path: '',
				element: <StoreHomePage />,
			},
		],
	}/* ,
    {
		path: '/_PRUEBAS',
		element: <CustomComponents />,
	} */
])