import { Link } from "react-router-dom";
import "../styles/NavBar.module.css";

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