import { useNavigate } from "react-router-dom";
import styles from "../../css/closetPage.module.css";

export default function CreateOutfitButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-outfit"); // This must match your route path
  };

  return (
    <div>
      <button className={styles["createOutfitButton"]} onClick={handleClick}>
        Create Outfit
      </button>
    </div>
  );
}
