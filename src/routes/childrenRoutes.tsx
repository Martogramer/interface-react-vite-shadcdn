import CustomComponents from "@/pages/_PRUEBAS/CustomComponents"
import TablerUsers from "@/pages/admin/TablerUsers"
import DashboardCrud from "@/pages/users/DashboardCrud"
import Dashboard from "@/pages/users/DashboardTablerInfo"
import {InfoPage} from "@/pages/users/InfoPage"
import { LoginShad } from "@/pages/users/LoginShad"
import OffersPage from "@/pages/users/OffersPage"
import PostsPage from "@/pages/users/PostsPage"
import { RegisterShad } from "@/pages/users/RegisterShad"

export const user = [
    {
        path: '',
        element: <OffersPage/>,
    },
    {
        path: 'login',
        element: <LoginShad/>,
    },
    {
        path: 'signup',
        element: <RegisterShad/>,
    },
    {
        path: 'info',
        element: <InfoPage/>,
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
    },
    {
        path: 'posts',
        element: <PostsPage/>,
    },
    {
        path: 'crud',
        element: <DashboardCrud/>,
    },
    {
        path: 'tableruser',
        element: <TablerUsers/>,
    },
    {
        path: '_PRUEBAS',
        element: <CustomComponents/>,
    }
]
export const admin = [
    {
        path: '',
        element: <p>Ruta children admin uno</p>,
    },
    {
        path: 'dos',
        element: <p>Ruta children admin dos</p>,
    }
]