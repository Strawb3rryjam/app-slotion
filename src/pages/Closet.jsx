
/*styles*/
import styles from '../css/closetPage.module.css';

/*Components*/
import ImageGallery from '../components/closet_components/closetGallery'; // Make sure the path is correct
import CreateOutfitButton from '../components/closet_components/createOutfitButton';

/*Images*/
import HangerImage from'../assets/Hanger.svg';


function Closet() {


  return (
    <div>
      <div className={styles["closetHeader"]}>
            <img src={HangerImage} alt="Hanger" className={styles['closetHeader_image']} />
            <h1 id={styles['closetHeader_title']}>Closet</h1>
            <CreateOutfitButton></CreateOutfitButton>
      </div>
    </div>
  );
}

export default Closet;
