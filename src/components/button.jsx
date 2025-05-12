import styles from '../css/button.module.css';

function Button({ text, onClick, type }) {
    return (
        <button className={`${styles.button} ${type === 'primary' ? styles.primary : styles.secondary}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;