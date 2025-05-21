import { useState } from 'react';
import styles from '../css/HomePage.module.css';
import NotificationButton from '../components/home_components/NotificationButton.jsx';
import { FollowButton, UnfollowedButton } from '../components/home_components/FollowButton.jsx';
import profilePic_1 from '../assets/homeposts/profilePic_1.png';
import { Post, CommunityPost } from '../components/home_components/Post.jsx';

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

      <section className={styles.content_section}>

        {activeTab === 'Following' ? (
          <div className={styles.section_following}>
            <Post />
          </div>

        ) : (

          <div className={styles.section_community}>
            <CommunityPost />
          </div>
        )}

      </section>
    </div>
  );
};
export default Home;