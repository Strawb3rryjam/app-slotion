import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../css/closetPage.module.css";
import Card from '../closet_components/cardComponent.jsx';

/* import images */
import Image1 from '../../assets/top/redhoodie.png';
import Image2 from '../../assets/top/whitehoodie.png';
import Image3 from '../../assets/top/stripesweater.png';
import Image4 from '../../assets/top/whitesweater.png';

function SlotionLibrary() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('Top');

  const imagesByCategory = {
    Outerwear: [Image1],
    Top: [Image1, Image2, Image3, Image4],
    Bottom: [Image1],
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // When image clicked, navigate to newItemForm and pass image in state
  const handleImageClick = (imgSrc) => {
    navigate('/add-item-form', { state: { selectedImage: imgSrc } });
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        Back
      </button>

      <h1>Library</h1>

      <div className={styles.addItem_categorySelector}>
        {Object.keys(imagesByCategory).map((category) => (
          <button
            key={category}
            className={`${styles.categoryButton} ${
              selectedCategory === category ? styles.categoryButton_selected : ''
            }`}
            onClick={() => handleCategorySelect(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className={styles.imagesGrid}>
        {imagesByCategory[selectedCategory].map((imgSrc, index) => (
          <div key={index} onClick={() => handleImageClick(imgSrc)} style={{ cursor: 'pointer' }}>
            <Card 
              image={imgSrc}
              label="Tops"
              // Remove link/iconLink props since we're handling click here
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlotionLibrary;
