import { Navigate, Outlet } from "react-router-dom"
import { Navbar, Route } from "../components/Navbar/Navbar"
import { useAppSelector } from "../context/hooks"
const routes: Route[] = [
    {
        to: '/dashboard/movies',
        text: 'Todas las películas'
    },
    {
        to: '/dashboard/add-movie',
        text: 'Agregar película'
    },
    {
        to: '/dashboard/logout',
        text: 'Logout'
    }
]
export const DashboardLayout = () => {
    const user = useAppSelector(({ userReducer }) => userReducer.user);

    return (
        <>
            {
                user._id ?
                    (<>

                        <Navbar title="Peliculas" routes={routes} />
                        <Outlet />
                    </>) : <Navigate to="/login" />
            }
        </>
    )
}