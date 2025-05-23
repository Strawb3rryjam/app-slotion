import styles from '../../css/FollowButton.module.css';
import { useState } from 'react';

function FollowButton() {
    const [isFollowing, setIsFollowing] = useState(true);

    return (
        <button className={`${styles.follow_button} ${isFollowing ? styles.following : styles.not_following}`}
            onClick={() => setIsFollowing(!isFollowing)}>
            {isFollowing ? 'following' : 'follow'}
        </button>
    );
    
};

function UnfollowedButton() {
    const [isFollowing, setIsFollowing] = useState(true);

    return (
        <button className={`${styles.follow_button} ${isFollowing ? styles.not_following : styles.following}`}
            onClick={() => setIsFollowing(!isFollowing)}>
            {isFollowing ? 'follow' : 'following'}
        </button>
    );
    
};


export { FollowButton, UnfollowedButton };