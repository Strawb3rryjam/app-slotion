import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/closetPage.module.css';
import ClosetNavBar from '../components/closet_components/closetNavBar.jsx';
import chevronLeft from '../assets/chevron.svg';

// Load all outfit item images
const imageImports = import.meta.glob('../assets/**/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

const SaveOutfit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Form state
  const [saveToCollection, setSaveToCollection] = useState('');
  const [styleTag, setStyleTag] = useState('');
  const [styleTags, setStyleTags] = useState([]);

  if (!state) {
    return <p>No outfit data found. Go back and create an outfit.</p>;
  }

  const { outfit, positions } = state;

  const getImageSrc = (category, filename) => {
    const directKey = `../assets/${category}/${filename}`;
    const fallbackKey = `../assets/${filename}`;
    const image = imageImports[directKey] || imageImports[fallbackKey];
    if (!image) console.error(`Image not found for: ${directKey} or ${fallbackKey}`);
    return image;
  };

  const handleBack = () => {
    navigate('/add-item', { state: { outfit, positions } });
  };

  const handleSave = () => {
    if (saveToCollection && styleTags.length > 0) {
      // Add your saving logic here
      alert(`Outfit saved to ${saveToCollection} collection with tags: ${styleTags.join(', ')}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && styleTag.trim() !== '') {
      e.preventDefault();
      if (!styleTags.includes(styleTag.trim())) {
        setStyleTags([...styleTags, styleTag.trim()]);
        setStyleTag('');
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setStyleTags(styleTags.filter(tag => tag !== tagToRemove));
  };

  // Check if form is valid for enabling the save button
  const isFormValid = saveToCollection !== '' && styleTags.length > 0;

  return (
    <div> 
      <ClosetNavBar
        leftButtonImgSrc={chevronLeft}
        leftButtonAlt="Back"
        onLeftButtonClick={handleBack}
        title="Save Outfit"
        rightButtonText="Save"
        onRightButtonClick={handleSave}
        rightButtonDisabled={!isFormValid}
      />
      <div className={styles.page}>
        <div className={styles.board} style={{ position: 'relative', width: '100%', height: '500px' }}>
          {Object.entries(outfit).map(([category, item]) => (
            item && (
              <div
                key={category}
                className={styles.outfitItem}
                style={{
                  position: 'absolute',
                  left: positions[category]?.x || 0,
                  top: positions[category]?.y || 0,
                }}
              >
                <img
                  src={getImageSrc(category, item.image)}
                  alt={item.name}
                  className={styles.image}
                />
                <p className={styles.label}>{item.name}</p>
              </div>
            )
          ))}
        </div>
        
        {/* Save Outfit Form */}
        <div className={styles.saveForm}>
          <div className={styles.formGroup}>
            <label htmlFor="saveToCollection">Save to:</label>
            <select 
              id="saveToCollection" 
              className={styles.select}
              value={saveToCollection} 
              onChange={(e) => setSaveToCollection(e.target.value)}
            >
              <option value="">Select a collection</option>
              <option value="all outfits">All Outfits</option>
              <option value="minimalistic">Minimalistic</option>
              <option value="comfy">Comfy</option>
              <option value="chic">Chic</option>
              <option value="winter">Winter</option>
              <option value="preppy">Preppy</option>
            </select>
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="styleTag">Style Tag:</label>
            <input 
              type="text" 
              id="styleTag" 
              className={styles.input}
              value={styleTag} 
              onChange={(e) => setStyleTag(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a style tag and press Enter"
            />
          </div>
          
          {/* Tag Display */}
          <div className={styles.tagContainer}>
            {styleTags.map((tag, index) => (
              <div key={index} className={styles.tag}>
                {tag}
                <button 
                  className={styles.removeTagButton} 
                  onClick={() => handleRemoveTag(tag)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveOutfit;