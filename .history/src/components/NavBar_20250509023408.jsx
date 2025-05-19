import { Link } from "react-router-dom";
import styles from "../css/NavBar.module.css";  // Use this to import styles

/*images*/
import navBase from "../assets/NavBar.svg";
import homeIcon from "../assets/Home.svg";
import searchIcon from "../assets/search.svg";
import closetIcon from "../assets/Hanger.svg";
import tipsIcon from "../assets/leaf.svg";
import profileIcon from "../assets/Profile.svg";

/*component*/
import ClosetButton from "../components/closetPageButton";


function NavBar() {
    return (
        <nav className={styles.navbar}> {/* Use styles.navbar for CSS modules */}
            <div className={styles["navbar-links"]}> {/* Use styles for other classes */}
                <Link to="/" className={styles.Home}>
                    <img src={homeIcon} alt="Home" className={styles["nav-icon"]} />
                </Link>
                <Link to="/Search" className={styles.Search}>
                    <img src={searchIcon} alt="Search" className={styles["nav-icon"]} />
                </Link>

                <div className={styles.Closet}>
                  <ClosetButton></ClosetButton>
                </div>

                <Link to="/Tips" className={styles.Tips}>
                    <img src={tipsIcon} alt="Tips" className={styles["nav-icon"]} />
                </Link>
                <Link to="/Profile" className={styles.Profile}>
                    <img src={profileIcon} alt="Profile" className={styles["nav-icon"]} />
                </Link>

              

            </div>
        </nav>
    );
}

export default NavBar;
