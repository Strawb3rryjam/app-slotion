import { Link } from "react-router-dom";



export function NavBar() {
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to ="/"><Slotion></Slotion> App</Link>
        </div>
        <div className="navbar-links">
            <Link to = "/" className="nav-link">Home</Link>
            <Link to = "/" className="nav-link">Closet</Link>
        </div>
    </nav>
}