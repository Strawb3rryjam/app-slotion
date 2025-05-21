

/*will show after you press add 

Top bar 
* x to link back to closet paeg
* title "item added!"
* save button will change into edit -> edit will take you back to edit in new ItemForm


will have the name from inew item form 
* at the top

*button that links to create outfit page 

*the same image

* the size

* the brand

* the style tags you've added

* the notes



*/



import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from '../../css/closetPage.module.css';

import CreateOutfitButton from '../closet_components/createOutfitButton';


export default function NewItemFormComplete() {
  const navigate = useNavigate();
  const location = useLocation();

  // We expect the item data to be passed via location.state from NewItemForm submit
  const item = location.state?.item;

  // If no item, redirect back to closet or new item form
  if (!item) {
    navigate('/closet');
    return null;
  }

  const [isEditing, setIsEditing] = useState(false);

  const handleClose = () => {
    navigate('/closet'); // back to closet page
  };

  const handleEdit = () => {
    // Navigate back to NewItemForm with item data so user can edit
    navigate('/add-item-form', { state: { item } });
  };

  return (
    <div className={styles.formWrapper}>
      {/* Top Bar */}
      <div className={styles.navbar}>
        <button onClick={handleClose} className={styles.backButton}>×</button>
        <h1 className={styles.title}>Item added!</h1>
        <button onClick={handleEdit} className={styles.addButton}>
          Edit
        </button>
      </div>

      {/* Item Details */}
      <div className={styles.itemDetails}>
        <h2 className={styles.itemName}>{item.name}</h2>

        <CreateOutfitButton/>

        {item.selectedImage && (
          <div className={styles.imagePreviewWrapper}>
            <img
              src={item.selectedImage}
              alt={item.name}
              className={styles.imagePreview}
            />
          </div>
        )}

        <p><strong>Size:</strong> {item.size}</p>
        <p><strong>Brand:</strong> {item.brand || 'N/A'}</p>

        <div>
          <strong>Style Tags:</strong>
          <div className={styles.tagList}>
            {item.styleTags.length > 0
              ? item.styleTags.map((tag) => (
                  <span key={tag} className={styles.tagChip}>
                    #{tag}
                  </span>
                ))
              : ' None'}
          </div>
        </div>

        <div className={styles.noteSection}>
          <strong>Notes:</strong>
          <p>{item.note || 'No notes added.'}</p>
        </div>



      </div>
    </div>
  );
}
