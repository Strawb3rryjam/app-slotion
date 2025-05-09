import { Link } from "react-router-dom";
import styles from "../css/closetButton.css;

//import icons
// icon notActive 
import closetNotActive from "../assets/Hanger.svg";
//icon Active
import closetActive from "../assets/HangerActive.svg";
   
export default function closetButton () {
    return(
        <Link to="/Closet" className={styles.Closet}>
        <img src={closetNotActive} alt="Closet" className={styles["nav-icon"]} />
        </Link>
    );
}