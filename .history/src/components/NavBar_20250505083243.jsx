import { Link } from "react-router-dom";
import styles from "./css/NavStyles.css"

function NavBar() {
    return <nav className="navbar">
        <div className = "navbar-brand">
            <Link to = "/">Home</Link>
        </div>
        <div className = "navbar-links">
            <Link to = "/">Home</Link>
            <Link to = "/closet">Closet</Link>
       </div>
    </nav>
}

export default NavBar;