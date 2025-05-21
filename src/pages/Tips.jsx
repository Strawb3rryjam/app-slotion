import React from "react";
import styles from "../css/Tips.module.css";

import HeartIcon from "../assets/tips-icons/heart.svg";
import CommentIcon from "../assets/tips-icons/comment.svg";
import ShareIcon from "../assets/tips-icons/share.svg";
import BookmarkIcon from "../assets/tips-icons/bookmark.svg";

function Tips() {
  return (
    <div className={styles.container}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <span className={styles.category}>Fashion Sustainability</span>
        <span className={styles.statusIcons}>
          {/* Add status icons here if needed */}
        </span>
      </div>

      <div className={styles.mediaWrapper}>
        <img
          src="https://your-image-url.jpg"
          alt="Upcycling 2024 Olympic Blanket"
          className={styles.media}
        />
      </div>

      {/* Post Info (bottom left) */}
      <div className={styles.postInfo}>
        <div className={styles.title}>Upcycling 2024 Olympic Blanket</div>
        <div className={styles.author}>
          <span className={styles.username}>antonio__chen</span>
          <span className={styles.views}>30.4k</span>
        </div>
        <div className={styles.caption}>
          new jacket w/ the paris olympic blanket
        </div>
      </div>


      <div className={styles.actions}>
        <button className={styles.actionBtn}>
          <img src={HeartIcon} alt="Like" />
        </button>
        <button className={styles.actionBtn}>
          <img src={CommentIcon} alt="Comment" />
        </button>
            <button className={styles.actionBtn}>
            <img src={ShareIcon} alt="Share" />
        </button>
        <button className={styles.actionBtn}>
            <img src={BookmarkIcon} alt="Bookmark" />
        </button>
      </div>
    </div>
  );
}

export default Tips;