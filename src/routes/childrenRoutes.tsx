import Dashboard from "@/pages/users/Dashboard"
import {InfoPage} from "@/pages/users/InfoPage"
import { LoginShad } from "@/pages/users/LoginShad"
import OffersPage from "@/pages/users/OffersPage"
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