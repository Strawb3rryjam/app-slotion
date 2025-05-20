import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "../../css/closetPage.module.css";
import Card from '../closet_components/cardComponent.jsx';
import leaf from '../../assets/leaf.svg';

// Example image arrays per category
const imagesByCategory = {
  outerwear: [leaf, leaf, leaf],
  top: [leaf, leaf, leaf],
  bottom: [leaf, leaf, leaf],
  shoes: [leaf, leaf, leaf],
  accessories: [leaf, leaf, leaf],
};

function SlotionLibrary() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('outerwear');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
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
          <Card
            key={index}
            image={imgSrc}
            label={`${selectedCategory} item ${index + 1}`}
            link="/add-item"
          />
        ))}
      </div>
    </div>
  );
}

export default SlotionLibrary;
