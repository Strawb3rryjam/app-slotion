import { Link } from 'react-router-dom';

/* Import images 
import CloseIcon from '../../assets/close_Black.svg';
import PhotoIcon from '../../assets/photo.select.svg';
*/
const AddNewItemPopup = ({ onClose }) => {
  return (
    <div className="popup">
      <button onClick={onClose} className="close-button">X</button>
      {/* Your popup content here */}
    </div>
  );
};

export default AddNewItemPopup;