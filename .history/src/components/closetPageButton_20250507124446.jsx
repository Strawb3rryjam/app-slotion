import { Link } from "react-router-dom";
import closetIcon from "../assets/Hanger.svg";
   
export default closetButton () {
    return(
        <Link to="/Closet" className={styles.Closet}>
        <img src={closetIcon} alt="Closet" className={styles["nav-icon"]} />
        </Link>
    );
}