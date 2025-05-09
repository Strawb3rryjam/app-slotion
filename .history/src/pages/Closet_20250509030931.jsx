import ImageGallery from '../components/ImageGallery'; // Make sure the path is correct

function App() {
  // Array of image URLs
  const imageUrls = [
    'pikmin.png',
    'pikmin.png',
    'pikmin.png',
    'pikmin.png'
  ];

  return (
    <div>
      <h1>React Image Gallery</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default App;
