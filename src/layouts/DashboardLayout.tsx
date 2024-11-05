import { Navigate, Outlet } from "react-router-dom"
import { Navbar, Route } from "../components/Navbar/Navbar"
import { useAppSelector } from "../context/hooks"
const routes: Route[] = [
    {
        to: '/dashboard/tasks',
        text: 'Todas las tareas'
    },
    {
        to: '/dashboard/add-task',
        text: 'Agregar tarea'
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

                        <Navbar routes={routes} />
                        <Outlet />
                    </>) : <Navigate to="/login" />
            }
        </>
    )
}