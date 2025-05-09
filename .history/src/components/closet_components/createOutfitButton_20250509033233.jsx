
import styles from "./css/closetPage.module.css"; // Make sure the file name matches


export default function CreateOutfitButton() {
    return(
        <div>
           <button className={styles.createOutfitButtonText}>Create Outfit</button>
        </div>
    )
}