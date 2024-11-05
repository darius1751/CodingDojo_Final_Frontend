import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { useAppDispatch } from "../context/hooks";
import { logout } from "../context/slice";
import { logoutUser } from "../services/logoutUser";

export const Logout = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        logoutUser().subscribe({
            next(_value) {
                dispatch(logout({}));
            },
        })
    }, []);
    return (
        <Navigate to={'/login'} />
    )
}