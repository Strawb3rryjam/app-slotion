
import { Link } from 'react-router-dom';
import "../../css/closetPage.module.css";

import PhotoIcon from "../../assets/add_a_photo.svg";
import LibraryIcon from "../../assets/photo_select.svg";


const AddNewItemPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button onClick={onClose} className="close-button">×</button>

        <h2 className="popup-title">Add New Item</h2>
        <div className="popup_all">
          <div className="popupL_1">
            <Link to="/add-photo" className="popup_link">
              <img src={PhotoIcon} alt="Add from Photos" className="popup_icon" />
              Add from Photos
            </Link>
          </div>
          <div className="popupLink_2">
            <Link to="/slotion-library" className="popup_link">
              <img src={LibraryIcon} alt="Slotion Library" className="popup_icon" />
              Choose from Slotion Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewItemPopup;
