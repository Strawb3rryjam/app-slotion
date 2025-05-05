import { Link } from "react-router-dom";
import "../css/NavBar.css";

/*images*/
import homeIcon from "../assets/Home.svg";
import searchIcon from "../assets/search.svg";
import closetIcon from "../assets/Hanger.svg";
import tipsIcon from "../assets/leaf.svg";
import profileIcon from "../assets/Profile.svg";



function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="Home">
                    <img src={homeIcon} alt="Home" className="nav-icon" />
                </Link>
                <Link to="/Search" className="Search">
                    <img src={searchIcon} alt="Search" className="nav-icon" />
                </Link>
                <Link to="/Closet">
                    <img src={closetIcon} alt="Closet" className="nav-icon" />
                </Link>
                <Link to="/Tips">
                    <img src={tipsIcon} alt="Tips" className="nav-icon" />
                </Link>
                <Link to="/Profile">
                    <img src={profileIcon} alt="Profile" className="nav-icon" />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
