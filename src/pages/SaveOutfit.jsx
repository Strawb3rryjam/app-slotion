import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../css/closetPage.module.css';
import ClosetNavBar from '../components/closet_components/closetNavBar.jsx';
import chevronLeft from '../assets/chevron.svg'; // Make sure this path is correct

// Load all outfit item images
const imageImports = import.meta.glob('../assets/**/*.{jpg,jpeg,png,svg}', {
  eager: true,
  import: 'default',
});

const SaveOutfit = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

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
    // Add your saving logic here
    alert('Outfit saved!');
  };

  return (
    <div> 
         <ClosetNavBar
        leftButtonImgSrc={chevronLeft}
        leftButtonAlt="Back"
        onLeftButtonClick={handleBack}
        title="Save Outfit"
        rightButtonText="Save"
        onRightButtonClick={handleSave}
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
    </div></div>
   
  );
};

export default SaveOutfit;

/*Forms with 2 inputs
*save to -> has drop down and opens another component called safe to collection
* save to collection has 6 options (all outfits, minimalistic, comfy, chich, winter,preppy)
* style tag -> user can type in style tag and it will appear as a tag at the bottom
* save button will be disabled until the user enters these two options
*/