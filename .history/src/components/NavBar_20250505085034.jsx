import { Link } from "react-router-dom";
import "../css/NavBar.module.css"; 

/*images*/
import homeIcon from "./assets/Home.svg";
import searchIcon from "./assets/Search.svg";
import closetIcon from "./assets/Hanger.svg";
import tipsIcon from "./assets/Tips.svg";
import profileIcon from "./assets/Profile.svg";



function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <Link to="/" className="Home">
                    <img src={homeIcon} alt="Home" className="nav-icon" />
                    Home
                </Link>
                <Link to="/Search" className="Search">
                    <img src={searchIcon} alt="Search" className="nav-icon" />
                    Search
                </Link>
                <Link to="/Closet">
                    <img src={closetIcon} alt="Closet" className="nav-icon" />
                    Closet
                </Link>
                <Link to="/Tips">
                    <img src={tipsIcon} alt="Tips" className="nav-icon" />
                    Tips
                </Link>
                <Link to="/Profile">
                    <img src={profileIcon} alt="Profile" className="nav-icon" />
                    Profile
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
