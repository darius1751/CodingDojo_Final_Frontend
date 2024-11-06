import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { HomePage } from "./pages/Home/HomePage"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Register/Register"
import { DashboardLayout } from "./layouts/DashboardLayout"
import { Logout } from "./pages/Logout"
import { Movies } from "./pages/Movies/Movies"
import { Movie } from "./pages/Movie/Movie"
import { AddMovie } from "./pages/AddMovie/AddMovie"
import { EditMovie } from "./pages/EditMovie/EditMovie"
import { AddComment } from "./pages/AddComment/AddComment"
const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<RootLayout />}>
            <Route path="" element={<HomePage />} index />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="movies" element={<Movies/>} />
            <Route path="movie/:id" element={<Movie/>} />
            <Route path="add-movie" element={<AddMovie/>} />
            <Route path="edit-movie/:id" element={<EditMovie/>} />
            <Route path="add-comment/:id" element={<AddComment/>} />
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