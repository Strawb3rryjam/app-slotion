import { useState } from 'react';
import styles from '../css/HomePage.module.css';
import { NotificationButton } from '../components/home_components/NotificationButton';
import { FollowButton } from '../components/home_components/FollowButton';
import profilePic_1 from '../assets/homeposts/profilePic_1.png';
import { CollectionOverlay, Post } from '../components/home_components/Post';
// import TopBar from '../components/home_components/TopBar';
// return (
//   <nav className={styles["nav-container"]}>
//     <TopBar />
//   </nav>
// );

function Home() {
  const [activeTab, setActiveTab] = useState('Following');

  return (
    <div className={`${styles.home_container}`}>
      <nav className={`${styles.nav_container}`}>
        <div className={`${styles.notification_button}`}>
          <NotificationButton />
        </div>
        
        <div className={`${styles.navTab}`}>
          <button 
            className={`${styles["body-text"]} ${activeTab === 'Following' ? styles.clicked : styles.default}`}
            onClick={() => setActiveTab('Following')}>
            Following
          </button>
          <button 
            className={`${styles["body-text"]} ${activeTab === 'Community' ? styles.clicked : styles.default}`}
            onClick={() => setActiveTab('Community')}>
            Community
          </button>
        </div>
      </nav>

      <section className={styles.content_container}>
        {activeTab === 'Following' ? (
          <div className={styles.post_container}>
            <Post />

          </div>
        ) : (
          <div>
          <div className={styles.collection_overlay_container}>
            <CollectionOverlay />
          </div>
          </div>
        )}
      </section>
    </div>
  );
};
export default Home;