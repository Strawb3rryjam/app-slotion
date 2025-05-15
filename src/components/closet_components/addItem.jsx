import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../css/addItem.module.css';
import itemData from '../../services/items.json';
import ClosetNavBar from './closetNavBar';
import closeIcon from '../../assets/close.svg';

// Import all images eagerly, get their default exports
const imageImports = import.meta.glob('../../assets/**/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

function AddItem() {
  const navigate = useNavigate();
  const location = useLocation();

  // Use state passed via navigation, or defaults if none
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

  // Helper to get image src from the glob imports safely
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
          rightButtonText="Save Outfit"
          onRightButtonClick={handleSaveOutfit}
        />



        <div className={styles.outfitBoard} style={{ position: 'relative', height: '300px' }}>
          {noItemsSelected ? (
            <p className={styles.emptyOutfitText}>
              No Item Selected. Click on “Add Item” button under the selected tab to start creating an outfit.
            </p>
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
          )}
        </div>
        
    
        <div className={styles.homeControls}>
      
          <button className={styles.addItemButton} onClick={() => setPage('addItem')}>
            Add Item
          </button>

          <div className={styles.selectedItemsPreview}>
            {['outerwear', 'top', 'bottom', 'shoes', 'accessories'].map(
              (category) =>
                outfit[category] && (
                  <div key={category} className={styles.selectedPreviewCard}>
                    <button
                      className={styles.removeButton}
                      onClick={() => handleRemoveItem(category)}
                      aria-label={`Remove ${category}`}
                    >
                      ×
                    </button>
                    <img
                      src={getImageSrc(category, outfit[category].image) || ''}
                      alt={outfit[category].name}
                      className={styles.selectedPreviewImage}
                      draggable={false}
                    />
                    <p>{outfit[category].name}</p>
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

    return (
      <div className={styles.addItemPage}>
        <ClosetNavBar
          leftButtonImgSrc={closeIcon}
          leftButtonAlt="Back to Create Outfit"
          onLeftButtonClick={handleCloseFromAddItem}
          title="Add Item"
          rightButtonText="Add"
          onRightButtonClick={handleAddToOutfit}
        />

        <div className={styles.categorySelector}>
          {['outerwear', 'top', 'bottom', 'shoes', 'accessories'].map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.selected : ''
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

        <div className={styles.buttonContainer}>
          <button className={styles.backButton} onClick={() => setPage('home')}>
            Cancel
          </button>
          <button
            className={styles.addButton}
            onClick={handleAddToOutfit}
            disabled={!outfit[selectedCategory]}
          >
            Add to Outfit
          </button>
        </div>
      </div>
    );
  };

  return <div className={styles.app}>{page === 'home' ? renderHomePage() : renderAddItemPage()}</div>;
}

export default AddItem;
