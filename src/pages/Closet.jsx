/*importing photos */
import ClosetGallery from '../components/closet_components/ClosetGallery';
import CreateOutfitButton from '../components/closet_components/createOutfitButton';

/*OUTERWEAR*/
/*first array*/
import item1 from '../assets/outerwear/jeanjacket.png';
import item2 from '../assets/outerwear/leatherjacket.png';
import item3 from '../assets/outerwear/whitejacket.png';
/*second array*/
import item4 from '../assets/outerwear/greysweater.png';
import item5 from '../assets/outerwear/darkgreysweater.png';
import item6 from '../assets/outerwear/bomberjacket.png';


/*TOPS*/
/*first array*/
import item7 from '../assets/top/whitehoodie.png';
import item8 from '../assets/top/greenhoodie.png';
import item9 from '../assets/top/stripesweater.png';
/*second array*/
import item10 from '../assets/top/whitesweater.png';
import item11 from '../assets/top/knitedsweater.png';

/*BOTTOMS*/
/*first array*/
import item12 from '../assets/bottom/pleatedpants.png';
import item13 from '../assets/bottom/jeans.png';
import item14 from '../assets/bottom/creampants.png';
/*second array*/
import item15 from '../assets/bottom/greypleatedpant.png';




/*Array for photos */

/*OUTERWEAR*/
const outerwear1 = [
  { id: 1, src: item1, alt: 'Jean Jacket' },
  { id: 2, src: item2, alt: 'Leather Jacket' },
  { id: 3, src: item3, alt: 'Cream Jacket' },
];

const outerwear2 = [
  { id: 1, src: item4, alt: 'Gray sweater' },
  { id: 2, src: item5, alt: 'dark grey sweater' },
  { id: 3, src: item6, alt: 'bomber jacket' },
];


/*TOPS*/
const tops1 = [
  { id: 1, src: item7, alt: 'White hoodie' },
  { id: 2, src: item8, alt: 'Green hoodie' },
  { id: 3, src: item9, alt: 'White striped hoodie' },
];

const tops2 = [
  { id: 1, src: item10, alt: 'White sweater' },
  { id: 2, src: item11, alt: 'Knitted sweater' },
];


/*BOTTOMS*/
const bottoms1 = [
  { id: 1, src: item12, alt: 'Pleated pants' },
  { id: 2, src: item13, alt: 'Blue jeans' },
  { id: 3, src: item14, alt: 'Cream jeans' },
];

const bottoms2 = [
  { id: 1, src: item15, alt: 'Grey pleated pants' },
];





function Closet() {
  return (
    <div>
      <div className="closet-header">
        <h1 id="closetTitle">Closet</h1>
        <CreateOutfitButton />
      </div>

      <ClosetGallery
        title="Outerwear"
        photoSets={[outerwear1, outerwear2]}
      />
      <ClosetGallery
        title="Top"
        photoSets={[tops1, tops2]}
      />
      <ClosetGallery
        title="Bottom"
        photoSets={[bottoms1, bottoms2]}
      />
    </div>
  );
}

export default Closet;
