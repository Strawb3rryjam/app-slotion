import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  // State to track the index of the first image in the current set
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next set of 3 images
  const nextImages = () => {
    if (currentIndex + 3 < images.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Function to go to the previous set of 3 images
  const prevImages = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Display 3 images at a time */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} style={{ width: '200px', height: 'auto' }} />
        ))}
      </div>

      {/* Navigation buttons */}
      <div>
        <button
          onClick={prevImages}
          disabled={currentIndex === 0}  // Disable the button if we're at the start
          style={{ marginRight: '20px' }}
        >
          &lt; Previous
        </button>
        <button
          onClick={nextImages}
          disabled={currentIndex + 3 >= images.length}  // Disable the button if we've reached the end
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;