import { NavLink } from "react-router-dom";
function getClassName({ isActive }) {
    return isActive ? "nav-active" : "";
}
export default function Nav() {
    return <nav>
        <ul>
            <li>
                <NavLink to="/" className={getClassName}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={getClassName}>About</NavLink>
            </li>
            <li>
                <NavLink to="/products" className={getClassName}>Products</NavLink>
            </li>
        </ul>
    </nav>
}
