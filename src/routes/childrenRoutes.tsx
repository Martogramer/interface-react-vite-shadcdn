import HomePage from "@/pages/users/HomePage"
import InfoPage from "@/pages/users/InfoPage"
import LoginPage from "@/pages/users/LoginPage"
import OffersPage from "@/pages/users/OffersPage"
import RegisterAlternativePage from "@/pages/users/RegisterAlternativePage"
import RegisterPage from "@/pages/users/RegisterPage"

export const user = [
    {
        path: '',
        element: <LoginPage/>,
    },
    {
        path: 'uno',
        element: <HomePage/>,
    },
    {
        path: 'dos',
        element: <RegisterPage/>,
    },
    {
        path: 'tres',
        element: <InfoPage/>,
    },
    {
        path: 'cuatro',
        element: <OffersPage/>,
    },
    {
        path: 'cinco',
        element: <RegisterAlternativePage/>,
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