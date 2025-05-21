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
import profilePic_2 from '../../assets/homeposts/profilePic_2.png';
import profilePic_3 from '../../assets/homeposts/profilePic_3.png';
import profilePic_4 from '../../assets/homeposts/profilePic_4.png';
import profilePic_5 from '../../assets/homeposts/profilePic_5.png';
import { FollowButton, UnfollowedButton } from './FollowButton';
import outfitPost_1 from '../../assets/homeposts/outfitPost_1.png';
import outfitPost_2 from '../../assets/homeposts/outfitPost_2.png';
import outfitPost_3 from '../../assets/homeposts/outfitPost_3.png';
import outfitPost_4 from '../../assets/homeposts/outfitPost_4.png';
import outfitPost_5 from '../../assets/homeposts/outfitPost_5.png';
import fitCheck_1 from '../../assets/homeposts/fitCheck_1.png';
import fitCheck_2 from '../../assets/homeposts/fitCheck_2.png';
import fitCheck_3_1 from '../../assets/homeposts/fitCheck_3_1.png';
import fitCheck_3_2 from '../../assets/homeposts/fitCheck_3_2.png';
import fitCheck_3_3 from '../../assets/homeposts/fitCheck_3_3.png';


function CommunityPost() {

    const [showOverlay, setShowOverlay] = useState(false);

    const handleOpenOverlay = () => setShowOverlay(true);
    const handleCloseOverlay = () => setShowOverlay(false);

    return (
    <div className={styles.post}>
            <div className={styles.post_container}>
                <PostHeader 
                    profilePic={profilePic_4}
                    username="Vy.truong"
                    content="Vaycay fit in Vietnam! 🌴☀️"
                    isFollowing={true}
                />
                <StyleChips 
                    styleChips={["Coquette", "Summer", "Cute"]}
                />
                <Carousel 
                    postPicture1={fitCheck_3_1}
                    outfitCard={outfitPost_4}
                    hasFitCheck={true}
                />
                <DetailCard 
                    outfitDetails={["Top: Navy top", "Skirt: Grey Pants", "Shoes: Loafers"]}
                    shopNames={["Value Village", "Value Village", "Steve Madden"]}
                />
                <PostFooter onSaveClick={handleOpenOverlay} />
            </div>
            <div className={styles.post_container}>
                <PostHeader 
                    profilePic={profilePic_5}
                    username="Jamie.lee"
                    content="My go to Uni fit... comfortable and stylish!"
                    isFollowing={true}
                />
                <StyleChips 
                    styleChips={["Comfy", "School", "Athleisure"]}
                />
                <Carousel 
                    postPicture1={outfitPost_5}
                    hasFitCheck={false}
                />
                <DetailCard 
                 outfitDetails={["Top: Grey t-shirt", "Pants: Darkgrey Jeans", "Shoes: Khaki boots"]}
                 shopNames={["H&M", "H&M", "Value Village"]}
                 />
                <PostFooter onSaveClick={handleOpenOverlay} />
            </div>
            {showOverlay && <CollectionOverlay onClose={handleCloseOverlay} />}
        </div>  
    );
}

function Post() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleOpenOverlay = () => setShowOverlay(true);
    const handleCloseOverlay = () => setShowOverlay(false);

    return (
        <div className={styles.post}>
            <div className={styles.post_container}>
                <PostHeader 
                    profilePic={profilePic_1}
                    username="Mckayala13"
                    content="First day at my new job 😀💻✨"
                    isFollowing={false}
                />
                <StyleChips 
                    styleChips={["Office Siren", "Business Casual"]}
                />
                <Carousel 
                    postPicture1={outfitPost_1}
                    hasFitCheck={false}
                />
                <DetailCard 
                    outfitDetails={["Top: Navy top", "Skirt: Grey Pants", "Shoes: Loafers"]}
                    shopNames={["Value Village", "Value Village", "Steve Madden"]}
                />
                <PostFooter onSaveClick={handleOpenOverlay} />
            </div>
            <div className={styles.post_container}>
                <PostHeader 
                    profilePic={profilePic_2}
                    username="JakeP.14"
                    content="Fit check" 
                    isFollowing={false}
                />
                <StyleChips 
                    styleChips={["Menswear", "Minimalistic", "Everyday"]}
                />
                <Carousel 
                    postPicture1={fitCheck_1}
                    outfitCard={outfitPost_2}
                    hasFitCheck={true}
                />
                <DetailCard 
                 outfitDetails={["Top: Grey t-shirt", "Pants: Darkgrey Jeans", "Shoes: Khaki boots"]}
                 shopNames={["H&M", "H&M", "Value Village"]}
                 />
                <PostFooter onSaveClick={handleOpenOverlay} />
            </div>
            <div className={styles.post_container}>
                <PostHeader 
                    profilePic={profilePic_3}
                    username="usernamee"
                    content="Hope everyone is havin a wonderful day!"
                    isFollowing={false}
                />
                <StyleChips 
                    styleChips={["Cottage Core", "Fairycore", "Indie"]}
                />
                <Carousel 
                    postPicture1={fitCheck_2}
                    outfitCard={outfitPost_3}
                    hasFitCheck={true}
                />
                <DetailCard 
                 outfitDetails={["Top: Basic white t-shirt", "Skirt: denim midiskirt", "Shoes: black loafers"]}
                 shopNames={["Aritzia", "Garage", "Thriftque"]}
                />
                <PostFooter onSaveClick={handleOpenOverlay} />
            </div>
            {showOverlay && <CollectionOverlay onClose={handleCloseOverlay} />}
        </div>       

    );
};

function PostHeader({ profilePic, username, content, isFollowing }) {
    return (
        <div className={styles.post_header}>
            <div className={styles.profile_container}>
                <img src={profilePic} alt="profile-pic" className={styles.profile_pic}/>
                <p className={styles.username}>{username}</p>
                {!isFollowing ? <FollowButton /> : <UnfollowedButton />}
            </div>
            <div className={styles.content_container}>
             <p className={styles.content}>{content}</p>
             <img src={Meatballs} alt="meatballs-icon" className={styles.meatballs_icon} />
            </div>
        </div>
    );
};

function StyleChips({ styleChips = [] }) {
    return (
        <div className={styles.styleChips}>
            {styleChips.map((chip, index) => (
                <span key={index} className={styles.styleChip}>
                    {chip}
                </span>
            ))}
        </div>
    );
};

function Carousel({ postPicture1, postPicture2, postPicture3, outfitCard, hasFitCheck }) {
    return (
        <div className={styles.carousel}>
            <img src={postPicture1} alt="post-pic" className={styles.post_picture} />
            <img src={outfitCard} alt="outfit-card" className={`${styles.outfit_card} ${hasFitCheck === true ? styles.visible : styles.invisible}`}/>
        </div>
    );

};

function DetailCard({ outfitDetails = [], shopNames = [] }) {
    return (
        <div className={styles.detail_card_container}>
            <div className={styles.detail_card_header}>
                <h3 className={styles.detail_card_title}>Outfit details</h3>
                <img src={DownArrow} alt="expand-icon" className={styles.expand_icon} />
            </div>
            <div className={styles.detail_card_content}>
                <ul className={styles.detail_card_list}>
                    <li className={styles.info_item}>{outfitDetails[0]} <span>{shopNames[0]}</span></li>
                    <li className={styles.info_item}>{outfitDetails[1]} <span>{shopNames[1]}</span></li>
                    <li className={styles.info_item}>{outfitDetails[2]} <span>{shopNames[2]}</span></li>
                </ul>
            </div>
            
        </div>
    );
}

function PostFooter({ onSaveClick }) {
    return (
        <div className={styles.post_footer}>
            <div className={styles.icon_button_container}>
                <LikeButton /> 
                <CommentButton /> 
                <ShareButton />
                <SaveButton onSaveClick={onSaveClick} />
            </div>
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
        <button className={styles.comment_button} onClick={handleComment}>
            <img src={Comment} alt="comment-icon" />
        </button>
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

function SaveButton({ onSaveClick }) {
    const [isSaved, setIsSaved] = useState(false);
    
    const handleSave = () => {
        setIsSaved(!isSaved);
        if (onSaveClick) onSaveClick();
    };

    return (
        <button className={styles.save_button} onClick={handleSave}>
            <img src={isSaved ? Save_filled : Save_unfilled} alt="save-icon" />
        </button>
    );
}

function CollectionOverlay({ onClose }) {
    return (
       <div className={styles.collection_overlay}>
        <div className={styles.collection_overlay_header}>
            <button className={styles.close_button} onClick={onClose}>
                <img src={close} alt="close-icon" className={styles.close_icon} />
            </button>
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

export { Post, CommunityPost, PostHeader, Carousel, PostFooter, SaveButton, CollectionOverlay, LikeButton, CommentButton, ShareButton, DetailCard, StyleChips };

