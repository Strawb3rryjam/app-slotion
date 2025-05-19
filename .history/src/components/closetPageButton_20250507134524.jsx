import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/closetPageButton.module.css"; // ✅ Make sure file name matches

// Import icons
import closetNotActive from "../assets/Hanger.svg";
import closetActive from "../assets/HangerActive.svg";



export default function ClosetButton() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={styles.closetWrapper}>
            {isActive && (
                <div className={styles.dropdown}>
<Link to="/CreatePost">
    <button className={styles.dropdownOption}>Create Post</button>
</Link>                    <Link to="/Closet" className={styles.dropdownOption2}>View Closet</Link>
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
