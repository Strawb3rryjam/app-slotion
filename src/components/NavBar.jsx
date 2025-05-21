import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import styles from '../css/NavBar.module.css';

import navBase from '../assets/NavBar.svg';
import homeIcon from '../assets/Home.svg';
import searchIcon from '../assets/search.svg';
import leafIcon from '../assets/leaf.svg';
import profileIcon from '../assets/profile.svg';
import hangerIcon from '../assets/hanger.svg';

export default function NavBar() {
  const [showClosetMenu, setShowClosetMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const hiddenRoutes = ['/login', '/onboarding'];
  
  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  }

  const handleToggleMenu = () => {
    console.log('Toggling menu:', !showClosetMenu); // Debug log
    setShowClosetMenu((v) => !v);
  };

  return (
    <>
      {/* Overlay menu */}
      {showClosetMenu && (
        <>
          <div className={styles.overlayBg} onClick={() => setShowClosetMenu(false)} />
          <div className={styles.overlayMenu}>
            <div className={styles.menuBox}>
              <button 
                className={styles.menuButton}
                onClick={() => {
                  navigate('/create-post'); // Navigate first
                  setShowClosetMenu(false); // Then close the menu
                }}
              >
                Create Post
              </button>
              <hr className={styles.menuDivider} />
              <button 
                className={styles.menuButton}
                onClick={() => {
                  navigate('/closet'); // Navigate first
                  setShowClosetMenu(false); // Then close the menu
                }}
              >
                View Closet
              </button>
              <div 
                className={styles.menuHangerCircle}
                onClick={() => setShowClosetMenu(false)}
              >
                <img src={hangerIcon} alt="Closet" className={styles.menuHangerIcon} />
              </div>
            </div>
          </div>
        </>
      )}

      {/* NavBar */}
      <nav className={styles.navbar}>
        <img src={navBase} alt="NavBar" className={styles.navBase} />
        <button 
          className={styles.navBtn}
          onClick={() => navigate('/')}
        >
          <img src={homeIcon} alt="Home" />
        </button>
        <button 
          className={styles.navBtn}
          onClick={() => navigate('/search')}
        >
          <img src={searchIcon} alt="Search" />
        </button>
        <div className={styles.centerBtnWrapper}>
          <button
            className={styles.centerBtn}
            onClick={() => setShowClosetMenu((v) => !v)}
          >
            <img src={hangerIcon} alt="Closet" />
          </button>
        </div>
        <button 
          className={styles.navBtn}
          onClick={() => navigate('/tips')}
        >
          <img src={leafIcon} alt="Leaf" />
        </button>
        <button 
          className={styles.navBtn}
          onClick={() => navigate('/profile')}
        >
          <img src={profileIcon} alt="Profile" />
        </button>
      </nav>
    </>
  );
}
