import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { HomePage } from "./pages/Home/HomePage"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { DashboardLayout } from "./layouts/DashboardLayout"
import { Logout } from "./pages/Logout"
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<RootLayout />}>
            <Route path="" element={<HomePage />} index />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="tasks" element={<></>} />
            <Route path="task/:id" element={<></>} />
            <Route path="add-task" element={<></>} />
            <Route path="logout" element={<Logout />} />
        </Route>
    </>
)
)
export const ConfigurationRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}