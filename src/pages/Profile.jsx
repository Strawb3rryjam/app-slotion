import React, { useEffect } from "react";
import styles from '../css/Profile.module.css';
import profilePicture from '../assets/profile_page/profile-picture.jpg';

function ProfileHeader({ username }) {
  return (
    <section className={styles.profileHeader}>
      <p className={styles.profileGreeting}>
        Hello, <strong>{'Amanda Wu'}</strong>
      </p>
      <button aria-label="Settings">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d94ffadff03bcd5ab6f3372b04d6607026a9dc68?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
          alt="Settings icon"
          className={styles.settingsIcon}
        />
      </button>
    </section>
  );
}

function Profile() {
  useEffect(() => {
    console.log("Profile component mounted");
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <ProfileHeader username="Amanda Wu" />
      <ProfileInfo
        profileImage={profilePicture}
        username="Amanda Wu"
        styleChips={["Chic", "Minimalistic", "Y2K"]}
        followers={87}
        following={45}
        pronouns="she/her"
      />
      <ProfileNavigation />
      <PostsGrid />
    </div>
  );
}

export function ProfileInfo({
  profileImage,
  username,
  styleChips,
  followers,
  following,
  pronouns
}) {
  return (
    <section className={styles.profileInfo}>
      <img
        src={profileImage}
        alt="Profile picture"
        className={styles.profileImage}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/114x114";
        }}
      />
      <p className={styles.username}>@{username}</p>
      <div className={styles.styleChips}>
        {styleChips.map((chip, index) => (
          <span key={index} className={styles.styleChip}>
            {chip}
          </span>
        ))}
      </div>
      <div className={styles.followStats}>
        <p>{followers} Followers</p>
        <p>{following} Following</p>
      </div>
      <p className={styles.pronouns}>{pronouns}</p>
    </section>
  );
}

export function ProfileNavigation() {
  return (
    <nav className={styles.profileNav}>
      <div className={styles.navButtons}>
        <div className={styles.navItem}>
          <button aria-label="Grid view">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d20c95fa377b74a8c9e90419f571d2b11c30cfd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
              alt="Grid view icon"
              className={styles.navIcon}
            />
          </button>
          <div className={styles.activeIndicator} />
        </div>
        <button aria-label="List view">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d590067275a993023e821a7977508c86fa5fb0f?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
            alt="List view icon"
            className={styles.navIcon}
          />
        </button>
      </div>
      <div className={styles.navDivider} />
    </nav>
  );
}

function PostsGrid() {
  const posts = [
    { id: 1, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/294f99533755d365f07f376237364aa1360daa66?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 2, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8917e47cd905e1b67bcae4e44a74dccba8c99661?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 3, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/73c90c7bc17e79dee082cbc37357f9cd6dd5b39e?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 4, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 5, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b1368c8e0b11307d664071169187747eb6633c3?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 6, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5d06fd9f85a8a33f5544ef320dd0e43086a9b75?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 7, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b4640d3189f2644f83bed38a44f82739f3bc61bd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" },
    { id: 8, src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5581528379845613be231ad46501f12218b0fa2c?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178" }
  ];

  const handlePostClick = (postId) => {
    console.log(`Post ${postId} clicked`);
  };

  return (
    <div className={styles.postsContainer}>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => handlePostClick(post.id)}
            className={styles.postButton}
          >
            <img
              src={post.src}
              alt={`Post ${post.id}`}
              className={styles.postImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default Profile; 