import styles from '../../css/Post.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import addIcon from '../../assets/icon/DownArrow.svg'; // replace with correct icon

export default function PostPreview() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const outfit = state?.outfit;

  return (
    <div className={styles.collection_overlay}>
      <div className={styles.collection_overlay_header}>
        <button className={styles.back_button} onClick={() => navigate('/choose-outfit')}>{'<'}</button>
        <h3 className={styles.collection_title}>Create Post</h3>
        <img src={addIcon} alt="add icon" className={styles.add_icon} />
      </div>

      <div className={styles.preview_content}>
        <img src={outfit} alt="Selected Outfit" className={styles.preview_outfit} />
        <textarea className={styles.caption_box} placeholder="Write a caption..." />
      </div>
    </div>
  );
}
