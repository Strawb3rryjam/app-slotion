import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from '../../css/closetPage.module.css';

export default function NewItemForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedImageFromState = location.state?.selectedImage || null;

  const [selectedImage, setSelectedImage] = useState(selectedImageFromState);

  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [styleTags, setStyleTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [note, setNote] = useState('');

  const isFormComplete = name && category && size;

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim() !== '') {
      e.preventDefault();
      if (!styleTags.includes(tagInput.trim())) {
        setStyleTags([...styleTags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setStyleTags(styleTags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    if (isFormComplete) {
      // Create item object to pass on
      const item = {
        selectedImage,
        name,
        category,
        size,
        brand,
        styleTags,
        note,
      };

      // Navigate to add-new-item-complete page with state
      navigate('/add-new-item-complete', { state: { item } });
    }
  };

  return (
    <div className={styles.formWrapper}>
      {/* Nav Bar */}
      <div className={styles.navbar}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>← Back</button>
        <h1 className={styles.title}>New Item</h1>
        <button
          onClick={handleSubmit}
          className={`${styles.addButton} ${!isFormComplete ? styles.disabled : ''}`}
          disabled={!isFormComplete}
        >
          Add
        </button>
      </div>

      {/* Show selected image preview if exists */}
      {selectedImage && (
        <div className={styles.imagePreviewWrapper}>
          <img src={selectedImage} alt="Selected item" className={styles.imagePreview} />
        </div>
      )}

      {/* Form Fields */}
      <div className={styles.formSection}>
        <input
          className={styles.input}
          placeholder="tap to add name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className={styles.input}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">tap to choose category</option>
          <option value="Tops">Tops</option>
          <option value="Bottoms">Bottoms</option>
          <option value="Outerwear">Outerwear</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          className={styles.input}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <option value="">tap to select size</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>

        <input
          className={styles.input}
          placeholder="tap to add brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <div className={styles.tagSection}>
          <input
            className={styles.input}
            placeholder="# tap to add style tags for the outfit"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
          <div className={styles.tagList}>
            {styleTags.map(tag => (
              <span key={tag} className={styles.tagChip}>
                #{tag}
                <button onClick={() => handleRemoveTag(tag)} className={styles.removeTag}>×</button>
              </span>
            ))}
          </div>
        </div>

        <textarea
          className={styles.noteBox}
          placeholder="tap to add notes"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
    </div>
  );
}
