

/*
Navbar component for the closet page 
Object so we can pass in different props
* top left: x button (img)
* centre: name of page (ex. create outfit)
* top right: button (e.g. save outfit)
*/

import styles from '../../css/closetPage.module.css';

const ClosetNavBar = ({
  leftButtonImgSrc,
  leftButtonAlt = "Back",
  onLeftButtonClick,
  title,
  rightButtonText,
  onRightButtonClick,
  isActive = false
}) => {
  return (
    <nav className={styles.navBar}>
      <button
        className={styles.navBar_leftButton}
        onClick={onLeftButtonClick}
        aria-label={leftButtonAlt}
      >
        <img src={leftButtonImgSrc} alt={leftButtonAlt} className={styles.navBar_leftButtonImg} />
      </button>

      <h1 className={styles.navBar_title}>{title}</h1>

          <button
        className={`
          ${styles.navBar_rightButton}
          ${isActive ? styles.navBar_rightButton_active : styles.navBar_rightButton_disabled}
        `}
        onClick={isActive ? onRightButtonClick : null}
        disabled={!isActive}
      >
        {rightButtonText}
      </button>

    </nav>
  );
};

export default ClosetNavBar;
