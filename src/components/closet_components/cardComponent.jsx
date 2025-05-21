

{/*card component
* object = insert image, instert text for bottom
* image of plus button 
* object of plus button to which page it will link to 
    

*/}


import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/closetPage.module.css"; 

import AddItemIcon from '../../assets/add_Item.svg';

function Card({ image, label, link, iconLink }) {
  const navigate = useNavigate();

  const handleIconClick = (e) => {
    e.stopPropagation(); // Prevent card's onClick from triggering
    navigate(iconLink);
  };

  return (
    <div className={styles.card} onClick={() => navigate(link)}>
      <img src={image} alt={label} className={styles.cardImage} />
      <div className={styles.cardLabelRow}>
        <p className={styles.cardLabel}>{label}</p>
        {iconLink && (
          <img 
            src={AddItemIcon} 
            alt="Add item" 
            className={styles.addItemIcon}
            onClick={handleIconClick}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
