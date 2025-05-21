import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/Post.module.css';

import BackIcon from '../../assets/chevron.svg'; // Replace with your actual back icon
import AddIcon from '../../assets/add_Item.svg';   // Replace with your actual add image icon
import outfitPost_1 from '../../assets/homeposts/outfitPost_1.png';
import outfitPost_2 from '../../assets/homeposts/outfitPost_2.png';

import thumbnail_1 from '../../assets/homeposts/thumbnail_1.png';
import thumbnail_2 from '../../assets/homeposts/thumbnail_2.png';
import thumbnail_3 from '../../assets/homeposts/thumbnail_3.png';
import thumbnail_4 from '../../assets/homeposts/thumbnail_4.png';
import thumbnail_5 from '../../assets/homeposts/thumbnail_5.png';
import thumbnail_6 from '../../assets/homeposts/thumbnail_6.png';

export function CreatePost() {
  const navigate = useNavigate();

  const handleChicClick = () => {
    navigate('/choose-outfit');
  };

  return (
    <div className={styles.collection_overlay}>
      <div className={styles.collection_overlay_header}>
        <button className={styles.back_button} onClick={() => navigate('/')}>{'<'}</button>
        <h3 className={styles.collection_title}>Create Post</h3>
      </div>

      <div className={styles.collection_card_container}>
        <div className={styles.collection_card}>
          <img src={thumbnail_1} alt="All Outfits" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>All Outfits</h3>
        </div>
        <div className={styles.collection_card}>
          <img src={thumbnail_2} alt="Minimalistic" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>Minimalistic</h3>
        </div>
        <div className={styles.collection_card}>
          <img src={thumbnail_3} alt="Comfy" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>Comfy</h3>
        </div>
        <div className={styles.collection_card} onClick={handleChicClick}>
          <img src={thumbnail_4} alt="Chic" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>Chic</h3>
        </div>
        <div className={styles.collection_card}>
          <img src={thumbnail_5} alt="Winter" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>Winter</h3>
        </div>
        <div className={styles.collection_card}>
          <img src={thumbnail_6} alt="Preppy" className={styles.thumbnail} />
          <h3 className={styles.collection_name}>Preppy</h3>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

