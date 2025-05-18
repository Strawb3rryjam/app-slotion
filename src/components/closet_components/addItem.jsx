import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "../../css/closetPage.module.css";

import itemData from '../../services/items.json';
import ClosetNavBar from './closetNavBar';
import closeIcon from '../../assets/close.svg';
import '../../index.css';



import TouchIcon from '../../assets/touch_double.svg';

const imageImports = import.meta.glob('../../assets/**/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

function AddItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialOutfit = location.state?.outfit ?? {
    outerwear: null,
    top: null,
    bottom: null,
    shoes: null,
    accessories: null,
  };

  const initialPositions = location.state?.positions ?? {
    outerwear: { x: 0, y: 0 },
    top: { x: 100, y: 0 },
    bottom: { x: 200, y: 0 },
    shoes: { x: 300, y: 0 },
    accessories: { x: 400, y: 0 },
  };

  const [page, setPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('outerwear');
  const [outfit, setOutfit] = useState(initialOutfit);
  const [positions, setPositions] = useState(initialPositions);
  const [dragging, setDragging] = useState(null);
  const offset = useRef({ x: 0, y: 0 });

  const getImageSrc = (category, filename) => {
    if (!filename) return null;
    const key = `../../assets/${category}/${filename}`;
    if (key in imageImports) {
      return imageImports[key];
    }
    console.warn(`Image not found for key: ${key}`);
    return null;
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleItemSelect = (item) => {
    setOutfit((prev) => ({
      ...prev,
      [selectedCategory]: item,
    }));
  };

  const handleRemoveItem = (category) => {
    setOutfit((prev) => ({
      ...prev,
      [category]: null,
    }));
  };

  const handleDragStart = (category, e) => {
    e.preventDefault();
    setDragging(category);
    offset.current = {
      x: e.clientX - positions[category].x,
      y: e.clientY - positions[category].y,
    };
  };

  const handleDragMove = (e) => {
    if (dragging && e.clientX !== undefined && e.clientY !== undefined) {
      const newX = e.clientX - offset.current.x;
      const newY = e.clientY - offset.current.y;
      setPositions((prev) => ({
        ...prev,
        [dragging]: { x: newX, y: newY },
      }));
    }
  };

  const handleDragEnd = () => {
    setDragging(null);
  };

  const handleCloseFromHome = () => {
    navigate('/closet');
  };

  const handleSaveOutfit = () => {
    navigate('/save-outfit', {
      state: { outfit, positions },
    });
  };

  const handleCloseFromAddItem = () => {
    setPage('home');
  };

  const handleAddToOutfit = () => {
    if (outfit[selectedCategory]) {
      setPage('home');
    }
  };

  const renderHomePage = () => {
    const noItemsSelected = Object.values(outfit).every((item) => item === null);
    const isSaveButtonActive = !noItemsSelected;

      const handleSaveClick = () => {
        if (isSaveButtonActive) {
          handleSaveOutfit();
        }
      };

    return (
      <div
        className={styles.homePage}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
       <ClosetNavBar
  leftButtonImgSrc={closeIcon}
  leftButtonAlt="Close Create Outfit"
  onLeftButtonClick={handleCloseFromHome}
  title="Create Outfit"
  rightButtonText="Save"
  onRightButtonClick={handleSaveClick}
  isActive={isSaveButtonActive}
/>


        <div className={styles.instructions}>
             <img src={TouchIcon} alt="description" className={styles.instructions_img} />
              <p className={styles.instructions_title}>Board</p>
          
          <p className={styles.instructions_desc}>Tap on item and drag to adjust the position</p>
        </div>

        <div className={styles.outfitBoard}>
          {noItemsSelected ? (
            <div className={styles.outfitBoard_empty}>
              <p className={styles.outfitBoard_empty1}>
              No Item Selected
              
            </p>
            <p className={styles.outfitBoard_empty2}>
              Click on “Add Item” button under the <span className={styles.outfitBoard_empty2selected}>Selected</span> tab to start creating an outfit.
            </p>
            </div>
        
          ) : (
            ['outerwear', 'top', 'bottom', 'shoes', 'accessories'].map(
              (category) =>
                outfit[category] && (
                  <div
                    key={category}
                    className={`${styles.outfitItem} ${dragging === category ? styles.dragging : ''}`}
                    style={{
                      left: positions[category].x,
                      top: positions[category].y,
                      position: 'absolute',
                      width: '80px',
                      cursor: dragging === category ? 'grabbing' : 'grab',
                      userSelect: 'none',
                      zIndex: dragging === category ? 1000 : 10,
                    }}
                    onMouseDown={(e) => handleDragStart(category, e)}
                  >
                    <img
                      src={getImageSrc(category, outfit[category].image) || ''}
                      alt={outfit[category].name}
                      className={styles.itemImage}
                      draggable={false}
                      style={{ width: '100%', height: 'auto' }}
                    />
                    <p style={{ fontSize: '0.7rem', textAlign: 'center' }}>
                      {outfit[category].name}
                    </p>
                  </div>
                )

                
            )
            
          )
          }
        </div>

        <div className={styles.homeControls}>
        <div className={styles.homeControls_text}>
          <p className={styles.homeControls_text1}>Selected</p>
          <p className={styles.homeControls_text2}>Select two or more items to create outfit</p>
        </div>

        <div className={styles.previewCards}>
          <button className={styles.addItemButton} onClick={() => setPage('addItem')}>
            <div className={styles.addItemButton_content}>
              <span className={styles.addItemButton_icon}>+</span>
              <span>Add Item</span>
            </div>
          </button>

          {['outerwear', 'top', 'bottom', 'shoes', 'accessories'].map(
            (category) =>
              outfit[category] && (
                <div key={category} className={styles.previewCards_selected}>
                  <button
                    className={styles.previewCards_remove}
                    onClick={() => handleRemoveItem(category)}
                    aria-label={`Remove ${category}`}
                  >
                    ×
                  </button>
                  <img
                    src={getImageSrc(category, outfit[category].image) || ''}
                    alt={outfit[category].name}
                    className={styles.previewCards_Image}
                    draggable={false}
                  />
                </div>
              )
          )}
        </div>
      </div>

      </div>
    );
  };

  const renderAddItemPage = () => {
    const items = itemData[selectedCategory] || [];
    
    const isRightButtonActive = outfit[selectedCategory] !== null;

    const handleRightButtonClick = () => {
      if (isRightButtonActive) {
        handleAddToOutfit();
      }
    };


    return (
      <div className={styles.addItem}>
            <ClosetNavBar
            leftButtonImgSrc={closeIcon}
            leftButtonAlt="Back to Create Outfit"
            onLeftButtonClick={handleCloseFromAddItem}
            title="Add Item"
            rightButtonText="Add"
            onRightButtonClick={handleRightButtonClick}
            isActive={isRightButtonActive}
          />


        <div className={styles.addItem_categorySelector}>
          {['outerwear', 'top', 'bottom', 'shoes', 'accessories'].map((category) => (
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

        <div className={styles.itemsGrid}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles.itemCard} ${
                outfit[selectedCategory]?.id === item.id ? styles.selected : ''
              }`}
              onClick={() => handleItemSelect(item)}
            >
              {outfit[selectedCategory]?.id === item.id && (
                <img
                  src={imageImports['../../assets/check.svg'] || ''}
                  alt="Selected"
                  className={styles.checkmarkIcon}
                />
              )}
              <img
                src={getImageSrc(selectedCategory, item.image) || ''}
                alt={item.name}
                className={styles.itemImage}
                draggable={false}
              />
            </div>
          ))}
        </div>

          
        
      </div>
    );
  };

  return <div className={styles.app}>{page === 'home' ? renderHomePage() : renderAddItemPage()}</div>;
}

export default AddItem;
