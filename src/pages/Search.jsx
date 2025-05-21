import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/SearchPage.module.css';

// Profile Pics
import profilePic_1 from '../assets/homeposts/profilePic_1.png';
import profilePic_2 from '../assets/homeposts/profilePic_2.png';
import profilePic_3 from '../assets/homeposts/profilePic_3.png';
import profilePic_4 from '../assets/homeposts/profilePic_4.png';
import profilePic_5 from '../assets/homeposts/profilePic_5.png';
import profilePic_6 from '../assets/homeposts/profilePic_6.png';
import profilePic_7 from '../assets/homeposts/profilePic_7.png';
import profilePic_8 from '../assets/homeposts/profilePic_8.png';
import profilePic_9 from '../assets/homeposts/profilePic_9.png';
import profilePic_10 from '../assets/homeposts/profilePic_10.png';
import profilePic_11 from '../assets/homeposts/profilePic_11.png';
import profilePic_12 from '../assets/homeposts/profilePic_12.png';
import keywordPic from '../assets/icon/keywordPic.png';

// Clip Thumbnails
import clipThumbnail_1 from '../assets/homeposts/clipThumbnail_1.png';
import clipThumbnail_2 from '../assets/homeposts/clipThumbnail_2.png';
import clipThumbnail_3 from '../assets/homeposts/clipThumbnail_3.png';

// Outfit Cards
import outfitCard_1 from '../assets/homeposts/outfitCard_1.png';
import outfitCard_2 from '../assets/homeposts/outfitCard_2.png';
import outfitCard_3 from '../assets/homeposts/outfitCard_3.png';


const recentSearches = [
  { id: 1, avatar: profilePic_1, text: 'cjy_leo', following: true },
  { id: 2, avatar: keywordPic, text: 'onitsuka tigers', following: false },
  { id: 3, avatar: keywordPic, text: 'Japanese denim', following: false },
  { id: 4, avatar: profilePic_2, text: 'renilsunil', following: true },
  { id: 5, avatar: profilePic_3, text: 'thepostofficegirl', following: true },
];

const accounts = [
  { id: 1, avatar: profilePic_6, name: 'denim_ever..' },
  { id: 2, avatar: profilePic_7, name: 'denim_outfi..' },
  { id: 3, avatar: profilePic_8, name: 'all_denim_4' },
];

const outfits = [
  { id: 1, avatar: profilePic_11, user: 'the__girl', img: outfitCard_1 },
  { id: 2, avatar: profilePic_9, user: 'jam_514', img: outfitCard_2 },
  { id: 3, avatar: profilePic_10, user: 'whatsgood12', img: outfitCard_3 },
];

const tips = [
  { id: 1, img: clipThumbnail_1 },
  { id: 2, img: clipThumbnail_2 },
  { id: 3, img: clipThumbnail_3 },
];

export default function SearchPage() {
  const [showResults, setShowResults] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchBarClick = () => {
    setSearchValue('Denim');
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setSearchValue('');
  };

  return (
    <div className={styles.page}>
      {!showResults ? (
        <SearchRecent
          searchValue={searchValue}
          onSearchBarClick={handleSearchBarClick}
          recentSearches={recentSearches}
        />
      ) : (
        <SearchResults
          searchValue={searchValue}
          onBack={handleBack}
          accounts={accounts}
          outfits={outfits}
          tips={tips}
        />
      )}
    </div>
  );
}

function SearchRecent({ searchValue, onSearchBarClick, recentSearches }) {
  return (
    <div>
      <div className={styles.searchBarContainer}>
        <input
          className={styles.searchBar}
          placeholder="Search"
          value={searchValue}
          onFocus={onSearchBarClick}
          readOnly
        />
      </div>
      <div className={styles.recentHeader}>
        <h3 className={styles.recentTitle}>Recent</h3>
      </div>
      <ul className={styles.recentList}>
        {recentSearches.map((item) => (
          <li key={item.id} className={styles.recentItem}>
            {item.avatar ? (
              <img src={item.avatar} alt="avatar" className={styles.avatar} />
            ) : (
              <span className={styles.searchIcon}>🔍</span>
            )}
            <div className={styles.recentText}>
              {item.text}
              {item.following && <span className={styles.following}>following</span>}
            </div>
            <button className={styles.closeBtn}>×</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SearchResults({ searchValue, onBack, accounts, outfits, tips }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.searchBarContainer}>
        <button className={styles.backBtn} onClick={onBack}>&lt;</button>
        <input
          className={styles.searchBar}
          value={searchValue}
          readOnly
        />
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>Accounts</h3>
        <div className={styles.accountRow}>
          {accounts.map((acc) => (
            <div key={acc.id} className={styles.accountItem}>
              <img src={acc.avatar} alt="avatar" className={styles.avatar} />
              <div className={styles.accountName}>{acc.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>Outfits</h3>
        <div className={styles.outfitRow}>
          {outfits.map((o) => (
            <div key={o.id} className={styles.outfitItem}>
                <div className={styles.userInfoRow}>
                    <img src={o.avatar} alt="avatar" className={styles.avatarSmall} />
                    <div className={styles.outfitUser}>{o.user}</div>
                </div>
                <img src={o.img} alt="outfit" className={styles.outfit_card} />
                <div className={styles.styleChip}>Denim</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>Tips</h3>
        <div className={styles.tipsRow}>
          {tips.map((t) => (
            <button
              key={t.id}
              className={styles.tipButton}
              onClick={() => navigate('/tips')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img src={t.img} alt="tip" className={styles.tipImg} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
