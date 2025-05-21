import styles from '../../css/NotificationButton.module.css';
import Bell from '../../assets/icon/Bell.svg';

function NotificationButton({ onClick }) {
    return (
        <button className={styles.notification_button} onClick={onClick}>
            <img src={Bell} alt="notification-icon" />
        </button>
    );
};

export default NotificationButton;