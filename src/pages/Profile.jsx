import React, { useEffect, useState } from "react";
import styles from '../css/Profile.module.css';
import profilePicture from '../assets/profile_page/profile-picture.jpg';
import Sun from '../assets/weather/Sun.svg';
import Cloudy from '../assets/weather/Cloudy.svg';
import Rain from '../assets/weather/Rain.svg';
import Freeze from '../assets/weather/Freeze.svg';
import Windy from '../assets/weather/Windy.svg';
import Hot from '../assets/weather/Hot.svg';
import Snow from '../assets/weather/Snow.svg';


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
  const [currentPage, setCurrentPage] = useState(1);

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
      <ProfileNavigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {currentPage === 1 ? <PostsGrid /> : <LookbookPage />}
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

export function ProfileNavigation({ currentPage, onPageChange }) {
  return (
    <nav className={styles.profileNav}>
      <div className={styles.navButtons}>
        <div className={styles.navItem}>
          <button 
            aria-label="Grid view"
            onClick={() => onPageChange(1)}
            className={currentPage === 1 ? styles.active : ''}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d20c95fa377b74a8c9e90419f571d2b11c30cfd?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
              alt="Grid view icon"
              className={styles.navIcon}
            />
          </button>
          {currentPage === 1 && <div className={styles.activeIndicator} />}
        </div>
        <div className={styles.navItem}>
          <button 
            aria-label="List view"
            onClick={() => onPageChange(2)}
            className={currentPage === 2 ? styles.active : ''}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d590067275a993023e821a7977508c86fa5fb0f?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
              alt="List view icon"
              className={styles.navIcon}
            />
          </button>
          {currentPage === 2 && <div className={styles.activeIndicator} />}
        </div>
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

function LookbookPage() {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    styles: [],
    weather: [],
    seasons: [],
    colors: [],
    occasions: []
  });

  const sampleCollections = [
    {
      id: 1,
      column: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/294f99533755d365f07f376237364aa1360daa66?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Summer Vibes",
      outfitCount: 12
    },
    {
      id: 2,
      column: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8917e47cd905e1b67bcae4e44a74dccba8c99661?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Winter Collection",
      outfitCount: 8
    },
    {
      id: 3,
      column: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/73c90c7bc17e79dee082cbc37357f9cd6dd5b39e?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Casual Days",
      outfitCount: 15
    },
    {
      id: 4,
      column: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Formal Wear",
      outfitCount: 6
    },    {
      id: 5,
      column: 1,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Formal Wear",
      outfitCount: 6
    },
    {
      id: 6,
      column: 2,
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/ab55b3e7a6c626e895e7f565e9f364f71d205f5a?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178",
      name: "Formal Wear",
      outfitCount: 6
    }
  ];

  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);
  
  const handleApplyFilter = (filters) => {
    setSelectedFilters(filters);
    setIsFilterModalOpen(false);
    console.log('Applied filters:', filters); // For debugging
  };

  return (
    <div className={styles.lookbookPage}>
      <div className={styles.lookbookContent}>
        <SearchBar onFilterClick={openFilterModal} />
        <CollectionGrid collections={sampleCollections} />
        <FilterModal 
          open={isFilterModalOpen} 
          onClose={closeFilterModal} 
          onApply={handleApplyFilter}
        />
      </div>
    </div>
  );
}

function SearchBar({ onFilterClick }) {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <div className={styles.searchBarContent}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09b10aacb7c95993d23b80e119581ab3e58f0bf2?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
            className={styles.searchIcon}
            alt="Search icon"
          />
          <span className={styles.searchText}>
            Search
          </span>
        </div>
      </div>
      <button 
        className={styles.filterButton}
        aria-label="Open filters"
        onClick={onFilterClick}
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/52b2ecc1df02dde448719f15397d69db7098471c?placeholderIfAbsent=true&apiKey=545f5df8aaa84ea8a5619648a044c178"
          className={styles.filterIcon}
          alt="Filter icon"
        />
      </button>
    </div>
  );
}

const CollectionCard = ({
  imageUrl,
  name,
  outfitCount,
  isFirst = false
}) => {
  const handleClick = () => {
    console.log(`Collection ${name} clicked`);
  };

  return (
    <button 
      className={styles.collectionCard}
      onClick={handleClick}
      aria-label={`View ${name} collection`}
    >
      <img
        src={imageUrl}
        className={styles.collectionImage}
        alt={`${name} collection`}
      />
      <div className={styles.collectionInfo}>
        <h3 className={styles.collectionName}>
          {name}
        </h3>
        <p className={styles.outfitCount}>
          {outfitCount} Outfits
        </p>
      </div>
    </button>
  );
};

const CollectionGrid = ({ collections }) => {
  // Split collections into two columns
  const column1Collections = collections.filter(collection => collection.column === 1);
  const column2Collections = collections.filter(collection => collection.column === 2);

  return (
    <div className={styles.collectionGrid}>
      <div className={styles.gridColumn}>
        {column1Collections.map((collection, index) => (
          <CollectionCard
            key={collection.id}
            imageUrl={collection.imageUrl}
            name={collection.name}
            outfitCount={collection.outfitCount}
            isFirst={index === 0}
          />
        ))}
      </div>
      <div className={styles.gridColumn}>
        {column2Collections.map((collection, index) => (
          <CollectionCard
            key={collection.id}
            imageUrl={collection.imageUrl}
            name={collection.name}
            outfitCount={collection.outfitCount}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export function FilterModal({ open, onClose, onApply }) {
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState([]);
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedOccasions, setSelectedOccasions] = useState([]);

  const handleStyleClick = (style) => {
    console.log('Style clicked:', style);
    setSelectedStyles(prev => {
      const newState = prev.includes(style) 
        ? prev.filter(s => s !== style)
        : [...prev, style];
      console.log('New styles state:', newState);
      return newState;
    });
  };

  const handleWeatherClick = (weather) => {
    console.log('Weather clicked:', weather);
    setSelectedWeather(prev => {
      const newState = prev.includes(weather) 
        ? prev.filter(w => w !== weather)
        : [...prev, weather];
      console.log('New weather state:', newState);
      return newState;
    });
  };

  const handleSeasonClick = (season) => {
    console.log('Season clicked:', season);
    setSelectedSeasons(prev => {
      const newState = prev.includes(season) 
        ? prev.filter(s => s !== season)
        : [...prev, season];
      console.log('New seasons state:', newState);
      return newState;
    });
  };

  const handleColorClick = (color) => {
    console.log('Color clicked:', color);
    setSelectedColors(prev => {
      const newState = prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color];
      console.log('New colors state:', newState);
      return newState;
    });
  };

  const handleOccasionClick = (occasion) => {
    console.log('Occasion clicked:', occasion);
    setSelectedOccasions(prev => {
      const newState = prev.includes(occasion) 
        ? prev.filter(o => o !== occasion)
        : [...prev, occasion];
      console.log('New occasions state:', newState);
      return newState;
    });
  };

  // Add a debug log to see the current state
  console.log('Current filter states:', {
    styles: selectedStyles,
    weather: selectedWeather,
    seasons: selectedSeasons,
    colors: selectedColors,
    occasions: selectedOccasions
  });

  if (!open) return null;
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.filterModal} onClick={e => e.stopPropagation()}>
        <div className={styles.filterModalHeader}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close filter modal">×</button>
          <h2>Filter Outfits</h2>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Style</div>
          <div className={styles.filterChips}>
            <span 
              className={`${styles.filterChip} ${selectedStyles.includes('Chic') ? styles.selected : ''}`}
              onClick={() => handleStyleClick('Chic')}
            >
              Chic
            </span>
            <span 
              className={`${styles.filterChip} ${selectedStyles.includes('Minimalistic') ? styles.selected : ''}`}
              onClick={() => handleStyleClick('Minimalistic')}
            >
              Minimalistic
            </span>
            <span 
              className={`${styles.filterChip} ${selectedStyles.includes('Y2K') ? styles.selected : ''}`}
              onClick={() => handleStyleClick('Y2K')}
            >
              Y2K
            </span>
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Weather</div>
          <div className={styles.weatherIcons}>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Sunny') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Sunny')}
            >
              <img src={Sun} alt="Sunny"/>
              <span>Sunny</span>
            </div>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Cloudy') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Cloudy')}
            >
              <img src={Cloudy} alt="Cloudy"/>
              <span>Cloudy</span>
            </div>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Rainy') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Rainy')}
            >
              <img src={Rain} alt="Rainy"/>
              <span>Rainy</span>
            </div>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Snowy') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Snowy')}
            >
              <img src={Snow} alt="Snowy"/>
              <span>Snowy</span>
            </div>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Windy') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Windy')}
            >
              <img src={Windy} alt="Windy"/>
              <span>Windy</span>
            </div>
          </div>    
          <div className={styles.weatherIcons}>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Cold') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Cold')}
            >
              <img src={Freeze} alt="Freeze"/>
              <span>Cold</span>
            </div>
            <div 
              className={`${styles.weatherIcon} ${selectedWeather.includes('Hot') ? styles.selected : ''}`}
              onClick={() => handleWeatherClick('Hot')}
            >
              <img src={Hot} alt="Hot"/>
              <span>Hot</span>
            </div>
          </div>
        </div> 
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Season</div>
          <div className={styles.filterChips}>
            <span 
              className={`${styles.filterChip} ${selectedSeasons.includes('Summer') ? styles.selected : ''}`}
              onClick={() => handleSeasonClick('Summer')}
            >
              Summer
            </span>
            <span 
              className={`${styles.filterChip} ${selectedSeasons.includes('Fall') ? styles.selected : ''}`}
              onClick={() => handleSeasonClick('Fall')}
            >
              Fall
            </span>
            <span 
              className={`${styles.filterChip} ${selectedSeasons.includes('Winter') ? styles.selected : ''}`}
              onClick={() => handleSeasonClick('Winter')}
            >
              Winter
            </span>
            <span 
              className={`${styles.filterChip} ${selectedSeasons.includes('Spring') ? styles.selected : ''}`}
              onClick={() => handleSeasonClick('Spring')}
            >
              Spring
            </span>
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Colour</div>
          <div className={styles.filterChips}>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Black') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Black')}
            >
              Black
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('White') ? styles.selected : ''}`}
              onClick={() => handleColorClick('White')}
            >
              White
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Red') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Red')}
            >
              Red
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Orange') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Orange')}
            >
              Orange
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Yellow') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Yellow')}
            >
              Yellow
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Green') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Green')}
            >
              Green
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Blue') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Blue')}
            >
              Blue
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Purple') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Purple')}
            >
              Purple
            </span>
            <span 
              className={`${styles.filterChip} ${selectedColors.includes('Brown') ? styles.selected : ''}`}
              onClick={() => handleColorClick('Brown')}
            >
              Brown
            </span>
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterLabel}>Occasion</div>
          <div className={styles.filterChips}>
            <span 
              className={`${styles.filterChip} ${selectedOccasions.includes('Casual') ? styles.selected : ''}`}
              onClick={() => handleOccasionClick('Casual')}
            >
              Casual
            </span>
            <span 
              className={`${styles.filterChip} ${selectedOccasions.includes('Party') ? styles.selected : ''}`}
              onClick={() => handleOccasionClick('Party')}
            >
              Party
            </span>
            <span 
              className={`${styles.filterChip} ${selectedOccasions.includes('Formal') ? styles.selected : ''}`}
              onClick={() => handleOccasionClick('Formal')}
            >
              Formal
            </span>
            <span 
              className={`${styles.filterChip} ${selectedOccasions.includes('Business') ? styles.selected : ''}`}
              onClick={() => handleOccasionClick('Business')}
            >
              Business
            </span>
            <span 
              className={`${styles.filterChip} ${selectedOccasions.includes('Night Out') ? styles.selected : ''}`}
              onClick={() => handleOccasionClick('Night Out')}
            >
              Night Out
            </span>
          </div>
        </div>
        <button 
          className={styles.applyFilterButton} 
          onClick={() => onApply({
            styles: selectedStyles,
            weather: selectedWeather,
            seasons: selectedSeasons,
            colors: selectedColors,
            occasions: selectedOccasions
          })}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}

export default Profile;