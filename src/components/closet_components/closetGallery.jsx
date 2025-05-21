import { useState } from 'react';
import styles from '../../css/closetPage.module.css';

import addButton from '../../assets/add_Item.svg';
import forwardButton from '../../assets/arrow_forward.svg';

import AddNewItemPopup from '../../components/closet_components/addNewItem.jsx';
import BottomDrawerPortal from '../../components/closet_components/BottomDrawerPortal.jsx';

const ClosetGallery = ({ title, photoSets }) => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const nextSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % photoSets.length);
  };

  const currentPhotos = photoSets[currentSetIndex];

  return (
    <>
      {/* Main Closet Component */}
      <div className={styles.closetGallery}>
        <div className={styles.closetGallery_header}>
          <button
            onClick={() => setShowPopup(true)}
            className="closetGallery"
            aria-label="Add new item"
          >
            <img src={addButton} alt="Add New Item" />
          </button>

          <h2 className={styles.closetGallery_title}>
            {title}
          </h2>

          <button onClick={nextSet} aria-label="Next item set">
            <img src={forwardButton} alt="Next Set" className={styles.closetGallery_forward} />
          </button>
        </div>

        <div className={styles.closetGallery_grid}>
          {currentPhotos && currentPhotos.length > 0 ? (
            currentPhotos.map((photo) => (
              <img
                key={photo.id}
                src={photo.src}
                alt={photo.alt}
                className={styles.closetGallery_image}
              />
            ))
          ) : (
            <p className={styles.emptyMessage}>No items in closet yet.</p>
          )}
        </div>
      </div>

      {/* Portal-based Drawer Popup */}
      {showPopup && (
        <BottomDrawerPortal>
          <div className={styles.popupOverlay} onClick={() => setShowPopup(false)}>
            <div
              className={styles.bottomDrawer}
              onClick={(e) => e.stopPropagation()} // prevent close on inner click
            >
              <AddNewItemPopup onClose={() => setShowPopup(false)} />
            </div>
          </div>
        </BottomDrawerPortal>
      )}
    </>
  );
};

export default ClosetGallery;
