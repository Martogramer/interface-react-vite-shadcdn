import { createBrowserRouter } from "react-router-dom";
import { admin, user } from "./childrenRoutes";
import LayoutUser from "@/layouts/LayoutUser";
import LayoutAdmin from "@/layouts/LayoutAdmin";
import Dashboard from "@/pages/users/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <LayoutUser />
        ),
        children: user,
    },
    {
        path: '/panel',
        element: (
            <LayoutAdmin />
        ),
        children: admin,
    }
])