import pikmin from '../assets/pikmin.png'; // Adjust the path to your image

/*Components*/
import ImageGallery from '../components/closet_components/closetGallery'; // Make sure the path is correct
import CreateOutfitButton from '../components/closet_components/createOutfitButton';


function Closet() {
  const imageUrls = [pikmin, pikmin, pikmin, pikmin];

  return (
    <div>
      <CreateOutfitButton></CreateOutfitButton>
      <h1>Closet</h1>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default Closet;
