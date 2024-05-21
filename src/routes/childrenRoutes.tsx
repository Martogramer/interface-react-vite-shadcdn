import Dashboard from "@/pages/users/DashboardTablerInfo"
import {InfoPage} from "@/pages/users/InfoPage"
import { LoginShad } from "@/pages/users/LoginShad"
import OffersPage from "@/pages/users/OffersPage"
import PostsPage from "@/pages/users/PostsPage"
import RegisterAlternativePage from "@/pages/users/RegisterAlternativePage"
import { RegisterShad } from "@/pages/users/RegisterShad"

export const user = [
    {
        path: '',
        element: <LoginShad/>,
    },
    {
        path: 'register',
        element: <RegisterShad/>,
    },
    {
        path: 'info',
        element: <InfoPage/>,
    },
    {
        path: 'cuatro',
        element: <OffersPage/>,
    },
    {
        path: 'dashboard',
        element: <Dashboard/>,
    },
    {
        path: 'posts',
        element: <PostsPage/>,
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