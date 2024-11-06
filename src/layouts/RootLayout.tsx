import { Outlet } from "react-router-dom"
import { Navbar, Route } from "../components/Navbar/Navbar"
const rootRoutes: Route[] = [
    { text: 'Login', to: 'login' },
    { text: 'Registro', to: 'register' }
]
export const RootLayout = () => {
    return (
        <>
            <Navbar title="Peliculas" routes={rootRoutes} />
            <Outlet />
        </>
    )
}