import styles from '../css/NotificationPage.module.css';

const notifications = [
  {
    id: 1,
    avatar: '/avatars/avatar1.jpg',
    text: 't.eemoo started following you',
    time: '2d',
    type: 'following',
    action: 'Following',
  },
  {
    id: 2,
    avatar: '/avatars/avatar2.jpg',
    text: 'cjy_leo saved your outfit',
    time: '5d',
    type: 'outfit',
    outfitImg: '/outfits/outfit1.png',
  },
  {
    id: 3,
    avatar: '/avatars/avatar3.jpg',
    text: 'renilsunil started following you',
    time: '4d',
    type: 'followback',
    action: 'Follow back',
  },
  {
    id: 4,
    avatar: '/avatars/avatar4.jpg',
    text: 'its_tami metioned you in a comment: @janedoe ahh tysm',
    time: '5d',
    type: 'comment',
    outfitImg: '/outfits/outfit2.png',
  },
  {
    id: 5,
    avatar: '/avatars/avatar5.jpg',
    text: 'Johnvanilla started following you',
    time: '6d',
    type: 'follow',
    action: 'Follow',
  },
  {
    id: 6,
    avatar: '/avatars/avatar3.jpg',
    text: 'renilsunil started following you',
    time: '2d',
    type: 'followback',
    action: 'Follow back',
  },
  {
    id: 7,
    avatar: '/avatars/avatar6.jpg',
    text: 'cami_col3 liked your comment: soso pretty!! 1w',
    time: '',
    type: 'like',
    outfitImg: '/outfits/outfit3.png',
  },
  {
    id: 8,
    avatar: '/avatars/avatar2.jpg',
    text: 'cjy_leo saved your outfit',
    time: '5d',
    type: 'outfit',
    outfitImg: '/outfits/outfit1.png',
  },
];

function Notification() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <button className={styles.backBtn}>&lt;</button>
        <h1 className={styles.title}>Notifications</h1>
      </header>
      <ul className={styles.list}>
        {notifications.map((n) => (
          <li key={n.id} className={styles.item}>
            <img src={n.avatar} alt="avatar" className={styles.avatar} />
            <div className={styles.info}>
              <span className={styles.text}>{n.text}</span>
              {n.time && <span className={styles.time}>{n.time}</span>}
            </div>
            {n.action && (
              <button
                className={
                  n.action === 'Following'
                    ? styles.followingBtn
                    : styles.followBtn
                }
              >
                {n.action}
              </button>
            )}
            {n.outfitImg && (
              <img
                src={n.outfitImg}
                alt="outfit"
                className={styles.outfitImg}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notification;