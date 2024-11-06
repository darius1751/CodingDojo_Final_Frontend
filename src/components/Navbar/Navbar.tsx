import styles from './navbar.module.css';
import { NavLink } from "react-router-dom";

export type Route = {
    to: string;
    text: string;
}
type Props = {
    routes: Route[];
    title: string;
}
export const Navbar = ({ title, routes }: Props) => {
    return (
        <nav className={styles.navbar}>
            <h1>{title}</h1>
            <ul>
                {
                    routes.map(
                        ({ to, text }, index) => (<li key={`navbar-item-${index}`}><NavLink className={styles.navbarItem} to={to}>{text}</NavLink></li>)
                    )
                }
            </ul>
        </nav>
    )
}