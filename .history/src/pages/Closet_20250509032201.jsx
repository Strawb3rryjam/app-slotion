import ImageGallery from '../components/closet_Components/closetGallery'; // Make sure the path is correct
import pikmin from '../assets/pikmin.png'; // Adjust the path to your image


function Closet() {
  const imageUrls = [pikmin, pikmin, pikmin, pikmin];

  return (
    <div>
      <h1>Closet </h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default Closet;
