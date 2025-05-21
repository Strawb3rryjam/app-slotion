import styles from '../../css/Post.module.css';
import { useNavigate } from 'react-router-dom';
import outfit1 from '../../assets/homeposts/outfitPost_1.png';
import outfit2 from '../../assets/homeposts/outfitPost_2.png';

export default function ChooseOutfit() {
  const navigate = useNavigate();

  const handleSelectOutfit = (imgSrc) => {
    navigate('/post-preview', { state: { outfit: imgSrc } });
  };

  return (
    <div className={styles.chooseOutfit}>
      <div className={styles.chooseOutfit_header}>
        <button className={styles.chooseOutfit_back_button} onClick={() => navigate('/create-post')}>{'<'}</button>
        <h3 className={styles.chooseOutfit_title}>Choose Outfit</h3>
      </div>

      <div className={styles.chooseOutfit_grid}>
        <img src={outfit1} alt="outfit1" onClick={() => handleSelectOutfit(outfit1)} />
        <img src={outfit2} alt="outfit2" onClick={() => handleSelectOutfit(outfit2)} />
        <img src={outfit1} alt="outfit3" onClick={() => handleSelectOutfit(outfit1)} />
        <img src={outfit2} alt="outfit4" onClick={() => handleSelectOutfit(outfit2)} />
      </div>
    </div>
  );
}
