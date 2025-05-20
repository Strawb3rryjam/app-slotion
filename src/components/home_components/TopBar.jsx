import styles from '../../css/TopBar.module.css';
import Bell from '../../assets/icon/Bell.svg';
import { useState } from 'react';

function TopBar() {
    return (
        <div className={styles["topBar-container"]}>
            <div className={styles["topBar-container_top"]}>
                <NotificationButton />
            </div>
            <div className={styles["topBar-container_bottom"]}>
                <TopBarButton text="Following" onClick={() => {}} />
                <TopBarButton text="Community" onClick={() => {}} />
            </div>
        </div>
    )
};

function TopBarButton({ text, onClick }) {
    const [isPressed, setIsPressed] = useState(false);
    return (
        <button
            className={`${styles.topBar_button} ${isPressed ? styles.pressed: ''}`}
            onClick={onClick}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
        >
            {text}
        </button>
    );
};

function NotificationButton({ onClick }) {
    return (
        <button className={styles.notification_button} onClick={onClick}>
            <img src={Bell} alt="notification-icon" />
        </button>
    );
};

export default TopBar;