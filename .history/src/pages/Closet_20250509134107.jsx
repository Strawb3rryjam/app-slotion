import pikmin from '../assets/pikmin.png'; // Adjust the path to your image

/*Components*/
import ImageGallery from '../components/closet_components/closetGallery'; // Make sure the path is correct
import CreateOutfitButton from '../components/closet_components/createOutfitButton';


function Closet() {
  const imageUrls = [pikmin, pikmin, pikmin, pikmin];

  return (
    <div>
      <div className="closet-header">
            <h1>Closet</h1>
            <CreateOutfitButton></CreateOutfitButton>
      </div>
      <CreateOutfitButton></CreateOutfitButton>
      <ImageGallery images={imageUrls} />
    </div>
  );
}

export default Closet;
