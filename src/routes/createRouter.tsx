import { createBrowserRouter } from "react-router-dom";
import { admin, user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import Dashboard from "@/pages/users/Dashboard";
import HomePage from '../pages/index';

export const router = createBrowserRouter([
    {
        path: '/error',
        element: (
            <HomePage />
        )
    },
    {
        path: '/',
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
    }
])