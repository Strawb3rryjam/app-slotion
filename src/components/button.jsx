import styles from '../css/button.module.css';
import chevron from '../assets/chevron.svg';
function LargeButton({ text, onClick, type }) {
    return (
        <button className={`${styles.lg_button} ${type === 'primary' ? styles.primary: styles.secondary}`} onClick={onClick}>
            {text}
        </button>
    );
};

function SmallButton({ text, onClick, type }) {
    return (
        <button className={`${styles.sm_button} ${type === 'primary' ? styles.primary: styles.secondary}`} onClick={onClick}>
            {text}
        </button>
    );
};

function BackButton({ onClick }) {
    return (
        <button className={`${styles.back_button} `} onClick={onClick}>
          <img src={chevron} alt="back-icon" />
        </button>
    );
};

export { LargeButton, SmallButton, BackButton };