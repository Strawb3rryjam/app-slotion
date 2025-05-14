import React, { useState } from 'react';
import styles from '../../css/addItem.module.css';
import itemData from '../../services/items.json';

function AddItem() {
  // State management
  const [page, setPage] = useState('home'); // 'home' or 'addItem'
  const [selectedCategory, setSelectedCategory] = useState('outerwear');
  const [outfit, setOutfit] = useState({
    outerwear: null,
    top: null,
    bottom: null,
    shoes: null,
    accessories: null
  });

  // Categories available in the app
  const categories = ['outerwear', 'top', 'bottom', 'shoes', 'accessories'];

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Handle item selection
  const handleItemSelect = (item) => {
    // Update outfit with selected item for the current category
    setOutfit({
      ...outfit,
      [selectedCategory]: item
    });
  };

  // Add selected item to outfit and return to home
  const handleAddToOutfit = () => {
    // Navigate back to home page
    setPage('home');
  };

  // Render home page with outfit board and add item button
  const renderHomePage = () => {
    return (
      <div className="home-page">
        <h1>My Outfit Builder</h1>
        
        <div className="outfit-board">
          {categories.map(category => (
            <div key={category} className="outfit-item">
              <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
              {outfit[category] ? (
                <div className="selected-item">
                  <img 
                    src={`/api/placeholder/120/120`} 
                    alt={outfit[category].name} 
                    className="item-image"
                  />
                  <p>{outfit[category].name}</p>
                </div>
              ) : (
                <div className="empty-item">
                  <p>No item selected</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <button 
          className="add-item-button"
          onClick={() => setPage('addItem')}
        >
          Add Item
        </button>
      </div>
    );
  };

  // Render add item page with categories and items
  const renderAddItemPage = () => {
    // Get items for the selected category
    const items = itemData[selectedCategory] || [];

    return (
      <div className="add-item-page">
        <h1>Add Item</h1>
        
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'selected' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="items-grid">
          {items.map(item => (
            <div 
              key={item.id}
              className={`item-card ${outfit[selectedCategory]?.id === item.id ? 'selected' : ''}`}
              onClick={() => handleItemSelect(item)}
            >
              <img 
                src={`/api/placeholder/100/100`} 
                alt={item.name} 
                className="item-image"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        
        <div className="button-container">
          <button 
            className="back-button"
            onClick={() => setPage('home')}
          >
            Cancel
          </button>
          <button 
            className="add-button"
            onClick={handleAddToOutfit}
            disabled={!outfit[selectedCategory]}
          >
            Add to Outfit
          </button>
        </div>
      </div>
    );
  };

  // Render based on current page
  return (
    <div className="App">
      {page === 'home' ? renderHomePage() : renderAddItemPage()}
    </div>
  );
}

export default AddItem;