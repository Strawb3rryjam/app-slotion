import styles from '../../css/Post.module.css';
import CurvedArrow from '../../assets/icon/CurvedArrow.svg';
import Heart_unfilled from '../../assets/icon/Heart_unfilled.svg';
import Heart_filled from '../../assets/icon/Heart_filled.svg';
import Save_unfilled from '../../assets/icon/Save_unfilled.svg';
import Save_filled from '../../assets/icon/Save_filled.svg';
import Meatballs from '../../assets/icon/Meatballs.svg';
import Comment from '../../assets/icon/Comment.svg';
import DownArrow from '../../assets/icon/DownArrow.svg';
import close from '../../assets/close.svg';
import { useState } from 'react';
import thumbnail_1 from '../../assets/homeposts/thumbnail_1.png';
import thumbnail_2 from '../../assets/homeposts/thumbnail_2.png';
import thumbnail_3 from '../../assets/homeposts/thumbnail_3.png';
import thumbnail_4 from '../../assets/homeposts/thumbnail_4.png';
import thumbnail_5 from '../../assets/homeposts/thumbnail_5.png';
import thumbnail_6 from '../../assets/homeposts/thumbnail_6.png';
import profilePic_1 from '../../assets/homeposts/profilePic_1.png';
import { FollowButton } from './FollowButton';
import outfitPost_1 from '../../assets/homeposts/outfitPost_1.png';
import outfitPost_2 from '../../assets/homeposts/outfitPost_2.png';

function Post() {
    return (
       <div className={styles.post_container}>
        <PostHeader 
            profilePic={profilePic_1}
            username="Mckayala13"
            content="First day at my new job"
        />
        <Carousel 
            postPicture1={outfitPost_1}
        />
        <DetailCard />
        <PostFooter />
       </div>
    );
};

function PostHeader({ profilePic, username, content }) {
    return (
        <div className={styles.post_header}>
            <div className={styles.profile_container}>
                <img src={profilePic} alt="profile-pic" className={styles.profile_pic}/>
                <p className={styles.username}>{username}</p>
                <FollowButton />
            </div>
            <div className={styles.content_container}>
             <p className={styles.content}>{content}</p>
             <img src={Meatballs} alt="meatballs-icon" className={styles.meatballs_icon} />
            </div>
        </div>
    );
};

function Carousel({ postPicture1, postPicture2, postPicture3 }) {
    return (
        <div className={styles.carousel}>
            <img src={postPicture1} alt="post-pic" className={styles.post_picture} />
        </div>
    );

};

function DetailCard() {
    return (
        <div className={styles.detail_card_container}>
            <div className={styles.detail_card_header}>
                <h3 className={styles.detail_card_title}>Outfit details</h3>
                <img src={DownArrow} alt="expand-icon" className={styles.expand_icon} />
            </div>
            <div className={styles.detail_card_content}>
                <ul className={styles.detail_card_list}>
                    <li className={styles.info_item}>Top: babydoll top <span>Thriftque</span></li>
                    <li className={styles.info_item}>Skirt: white skirt <span>Aritzia</span></li>
                    <li className={styles.info_item}>Shoes: New Balance <span>Value Village</span></li>
                </ul>
            </div>
            
        </div>
    );
}

function PostFooter() {
    return (
        <div className={styles.post_footer}>
            <div className={styles.icon_button_container}>
            <LikeButton /> 
            <CommentButton /> 
            <ShareButton />
            </div>
            <SaveButton />
        </div>
    );
};

function LikeButton() {
    const [isLiked, setIsLiked] = useState(false);
    
    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    return (
        <button className={styles.like_button} onClick={handleLike}>
            <img src={isLiked ? Heart_filled : Heart_unfilled} alt="like-icon" />
        </button>
    );
}

function CommentButton() {
    const handleComment = () => {

        console.log('Comment clicked');
    };

    return (
        <div className={styles.comment_button_container}>
        <button className={styles.comment_button} onClick={handleComment}>
            <img src={Comment} alt="comment-icon" />
        </button>
        <p className={styles.button_count}>5</p>
        </div>
    );
}

function ShareButton() {
    const handleShare = () => {
        // Add share logic here
        console.log('Share clicked');
    };

    return (
        <button className={styles.share_button} onClick={handleShare}>
            <img src={CurvedArrow} alt="share-icon" />
        </button>
    );
}

function SaveButton() {
    const [isSaved, setIsSaved] = useState(false);
    
    const handleSave = () => {
        setIsSaved(!isSaved);
    };

    return (
        <button className={styles.save_button} onClick={handleSave}>
            <img src={isSaved ? Save_filled : Save_unfilled} alt="save-icon" />
        </button>
    );
}

function CollectionOverlay() {

    const [isOpen, setIsOpen] = useState(false);
    const handleCloseOverlay = () => {
        setIsOpen(false);
    };

    return (
       <div className={styles.collection_overlay}>
        <div className={styles.collection_overlay_header}>
        <img src={close} alt="close-icon" className={styles.close_icon} onClick={handleCloseOverlay} />
        <h3 className={styles.collection_title}>My Collections</h3>
        </div>
        <div className={styles.collection_card_container}>
        <div className={styles.collection_card}>
            <img src={thumbnail_1} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>All Outfits</h3>
            <p className={styles.collection_description}>12 Outfits</p>
        </div>
        <div className={styles.collection_card}>
            <img src={thumbnail_2} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>Minimalistic</h3>
            <p className={styles.collection_description}>27 Outfits</p>
        </div>
        <div className={styles.collection_card}>
            <img src={thumbnail_3} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>Comfy</h3>
            <p className={styles.collection_description}>7 Outfits</p>
        </div>
        <div className={styles.collection_card}>
            <img src={thumbnail_4} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>Chic</h3>
            <p className={styles.collection_description}>27 Outfits</p>
        </div>
        <div className={styles.collection_card}>
            <img src={thumbnail_5} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>Winter</h3>
            <p className={styles.collection_description}>15 Outfits</p>
        </div>
        <div className={styles.collection_card}>
            <img src={thumbnail_6} alt="thumbnail-1" className={styles.thumbnail} />
            <h3 className={styles.collection_name}>Preppy</h3>
            <p className={styles.collection_description}>18 Outfits</p>
        </div>
        </div>
       </div>
    );
}

export { Post, PostHeader, Carousel, PostFooter, SaveButton, CollectionOverlay, LikeButton, CommentButton, ShareButton, DetailCard };

