import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/closetPageButton.module.css";

// Import icons
import closetNotActive from ".../assets/Hanger.svg";
import closetActive from ".../assets/HangerActive.svg";

export default function ClosetButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    const handleOptionClick = () => {
        setIsActive(false); // Reset the active state when an option is clicked
    };

    return (
        <div className={styles.closetWrapper}>
            {isActive && (
                <div className={styles.dropdown}>
                    <Link 
                        to="/CreatePost" 
                        className={styles.dropdownOption1} 
                        onClick={handleOptionClick} // Reset to inactive on click
                    >
                        Create Post
                    </Link>
                    <Link 
                        to="/Closet" 
                        className={styles.dropdownOption2} 
                        onClick={handleOptionClick} // Reset to inactive on click
                    >
                        View Closet
                    </Link>
                </div>
            )}
            <button 
                onClick={handleClick} 
                className={`${styles.Closet} ${isActive ? styles.active : styles.inactive}`} 
            >
                <img 
                    src={isActive ? closetActive : closetNotActive} 
                    alt="Closet" 
                    className={styles["nav-icon"]} 
                />
            </button>
        </div>
    );
}
