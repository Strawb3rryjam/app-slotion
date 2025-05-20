import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/closetPage.module.css';

import addButton from '../../assets/add_Item.svg';
import forwardButton from '../../assets/arrow_forward.svg';

const ClosetGallery = ({ title, photoSets }) => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const nextSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % photoSets.length);
  };

  const currentPhotos = photoSets[currentSetIndex];

  return (
    <div className={styles.closetGallery}>
      {/* Header with buttons and title */}
      <div className={styles.closetGallery_header}>
        {/* Left: Add Button */}
        <Link to="/add-item" className="closetGallery" aria-label="Add new item">
          <img src={addButton} alt="Add Item" className={styles.closetGallery_add} />
        </Link>

        {/* Center: Title */}
        <h2 className={styles.closetGallery_title}>
          {title}
        </h2>

        {/* Right: Forward Button (triggers state change) */}
        <button onClick={nextSet} aria-label="Next item set">
          <img src={forwardButton} alt="Next Set" className={styles.closetGallery_forward} />
        </button>
      </div>

      {/* Photo Gallery Section */}
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
  );
};

export default ClosetGallery;
