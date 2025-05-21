import styles from '../css/NotificationPage.module.css';
import { useNavigate } from 'react-router-dom';
import { FollowButton } from '../components/home_components/FollowButton';

import profilePic_1 from '../assets/homeposts/profilePic_1.png';
import profilePic_2 from '../assets/homeposts/profilePic_2.png';
import profilePic_3 from '../assets/homeposts/profilePic_3.png';
import profilePic_4 from '../assets/homeposts/profilePic_4.png';
import profilePic_5 from '../assets/homeposts/profilePic_5.png';
import profilePic_6 from '../assets/homeposts/profilePic_6.png';
import profilePic_7 from '../assets/homeposts/profilePic_7.png';
import profilePic_8 from '../assets/homeposts/profilePic_8.png';
import chevron from '../assets/chevron.svg';


function Notification() {
  const navigate = useNavigate();

  const notification = [
    {
      id: 1,
      avatar: profilePic_1,
      text: 't.eemoo started following you',
      time: '2d',
      type: 'following',
      action: 'Following',
    },
    {
      id: 2,
      avatar: profilePic_2,
      text: 'cjy_leo saved your outfit',
      time: '5d',
      type: 'outfit',
      outfitImg: '/outfits/outfit1.png',
    },
    {
      id: 3,
      avatar: profilePic_3,
      text: 'renilsunil started following you',
      time: '4d',
      type: 'followback',
      action: 'Follow back',
    },
    {
      id: 4,
      avatar: profilePic_4,
      text: 'its_tami metioned you in a comment: @janedoe ahh tysm',
      time: '5d',
      type: 'comment',
      outfitImg: '/outfits/outfit2.png',
    },
    {
      id: 5,
      avatar: profilePic_5,
      text: 'Johnvanilla started following you',
      time: '6d',
      type: 'follow',
      action: 'Follow',
    },
    {
      id: 6,
      avatar: profilePic_6,
      text: 'renilsunil started following you',
      time: '2d',
      type: 'followback',
      action: 'Follow back',
    },
    {
      id: 7,
      avatar: profilePic_7,
      text: 'cami_col3 liked your comment: soso pretty!! 1w',
      time: '',
      type: 'like',
      outfitImg: '/outfits/outfit3.png',
    },
    {
      id: 8,
      avatar: profilePic_8,
      text: 'cjy_leo saved your outfit',
      time: '5d',
      type: 'outfit',
      outfitImg: '/outfits/outfit1.png',
    },
  ];

  return (
    <div className={styles.page}>
      <header className={styles.page_header}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <img src={chevron} alt="back" />
        </button>
        <h1 className={styles.page_title}>Notifications</h1>
      </header>
      <ul className={styles.notification_list}>
        {notification.map((n) => (
          <li key={n.id} className={styles.item}>
            <img src={n.avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
              <span className={styles.text}>{n.text}</span>
              {n.time && <span className={styles.time}>{n.time}</span>}
            </div>
            {n.action && (
              <FollowButton isFollowing={n.action === 'Following'} />
            )}
            {n.outfitImg && (
              <img src={n.outfitImg} alt="outfit" className={styles.outfitImg} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Notification;