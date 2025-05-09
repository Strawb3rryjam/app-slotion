import { Link } from "react-router-dom";
import styles from "../css/closetButton.module.css"; // ✅ for CSS Modules
import { useState } from "react";


//import icons
// icon notActive 
import closetNotActive from "../assets/Hanger.svg";
//icon Active
import closetActive from "../assets/HangerActive.svg";


export default function ClosetButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive); // toggle visibility of menu
    };

    return (
        <div className={styles.closetWrapper}>
            {isActive && (
                <div className={styles.dropdown}>
                    <Link to="/CreatePost" className={styles.dropdownOption}>Create Post</Link>
                    <Link to="/Closet" className={styles.dropdownOption}>View Closet</Link>
                </div>
            )}
            <button onClick={handleClick} className={styles.Closet}>
                <img 
                    src={isActive ? closetActive : closetNotActive} 
                    alt="Closet" 
                    className={styles["nav-icon"]} 
                />
            </button>
        </div>
    );
}