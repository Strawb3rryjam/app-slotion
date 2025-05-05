import { Link } from "react-router-dom";
import "../css/NavBar.module.css"; // Make sure this exists and is set up correctly

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="Home">
                    <img src="/images/home.png" alt="Home" className="nav-icon" />
                    Home
                </Link>
                <Link to="/Search" className="Search">
                    <img src="/images/search.png" alt="Search" className="nav-icon" />
                    Search
                </Link>
                <Link to="/Closet">
                    <img src="/images/closet.png" alt="Closet" className="nav-icon" />
                    Closet
                </Link>
                <Link to="/Tips">
                    <img src="/images/tips.png" alt="Tips" className="nav-icon" />
                    Tips
                </Link>
                <Link to="/Profile">
                    <img src="/images/profile.png" alt="Profile" className="nav-icon" />
                    Profile
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
