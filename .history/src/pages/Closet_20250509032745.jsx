import pikmin from '../assets/pikmin.png'; // Adjust the path to your image

/*Components*/
import ImageGallery from '../components/closet_components/closetGallery'; // Make sure the path is correct



function Closet() {
  const imageUrls = [pikmin, pikmin, pikmin, pikmin];

  return (
    <div>

      <h1>Closet</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default Closet;
