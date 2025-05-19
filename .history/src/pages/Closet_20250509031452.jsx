import ImageGallery from './components/closetGallery.jsx'; // Make sure the path is correct
import pikmin from './assets/pikmin.png'; // Adjust the path to your image


function Closet() {
  // Array of image URLs
  const imageUrls = [
    pikmin,
    pikmin,
    pikmin, 
    pikmin,
  ];

  return (
    <div>
      <h1>React Image Gallery</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default App;
