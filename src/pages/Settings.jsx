import { useNavigate } from 'react-router-dom';
import profilePicture from '../assets/profile_page/profile-picture.jpg';
import styles from '../css/SettingsPage.module.css';
import chevron from '../assets/chevron.svg';

function Settings() {
    const navigate = useNavigate();

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <button className={styles.backBtn} onClick={() => navigate('/profile')}>
                    <img src={chevron} alt="back-icon" className={styles.chevronLeft} />
                </button>
                <h1 className={`${styles["medium-header"]}`}>Settings</h1>
            </div>

            <div className={styles.section}>
                <div className={styles.sectionTitle}>User Account</div>
                <div className={styles.profileRow}>
                    <img src={profilePicture} alt="profile" className={styles.avatar} />
                    <div>
                        <div className={styles.profileName}>Amanda Wu</div>
                        <div className={styles.editProfile}>Edit Profile</div>
                    </div>
                </div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Settings</div>
                <div className={styles.row}>Account Management <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
                <div className={styles.row}>Notifications <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
                <div className={styles.row}>Privacy and Data <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
                <div className={styles.row}>Login Settings <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Accessibility</div>
                <div className={styles.row}>Accessibility <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
                <div
                    className={styles.row}
                    tabIndex={0}
                    role="button"
                    onClick={() => navigate('/display-settings')}
                >
                    Display Settings <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} />
                </div>
                <div className={styles.row}>Languages <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
            </div>

            <hr className={styles.divider} />

            <div className={styles.section}>
                <div className={styles.sectionTitle}>Support</div>
                <div className={styles.row}>Help Center <img src={chevron} alt="jump-to-(section)  " className={styles.chevronRight} /></div>
                <div className={styles.row}>Terms of Service <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
                <div className={styles.row}>Privacy Policy <img src={chevron} alt="jump-to-(section)" className={styles.chevronRight} /></div>
            </div>
        </div>
    );
}

export default Settings;