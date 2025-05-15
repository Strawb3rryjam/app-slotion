
/*Components*/
import ImageGallery from '../components/closet_components/closetGallery'; // Make sure the path is correct
import CreateOutfitButton from '../components/closet_components/createOutfitButton';


function Closet() {


  return (
    <div>

      
      <div className="closet-header">
            {/*<img src={} alt="Hanger" className="closet-image" />*/}
            <h1 id='closetTitle'>Closet</h1>
            <CreateOutfitButton></CreateOutfitButton>
      </div>
    </div>
  );
}

export default Closet;
