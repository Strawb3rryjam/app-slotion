

{/*card component
* object = insert image, instert text for bottom
* image of plus button 
* object of plus button to which page it will link to 
    

*/}


import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/closetPage.module.css"; // ✅ updated import

function Card({ image, label, link }) {
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(link)}>
      <img src={image} alt={label} className={styles.cardImage} />
      <p className={styles.cardLabel}>{label}</p>
    </div>
  );
}

export default Card;
