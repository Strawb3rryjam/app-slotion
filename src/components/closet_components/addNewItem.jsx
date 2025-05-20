import { Link } from 'react-router-dom';

/* Import images */
import CloseIcon from '../assets/close_Black.svg';
import PhotoIcon from '../assets/photo_select.svg';

const AddNewItemPopup = ({ onClose }) => {
  return (
    <div className="popup-container p-4 rounded-xl shadow-lg bg-white max-w-sm">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src={CloseIcon}
            alt="Close"
            onClick={onClose}
            className="w-5 h-5 cursor-pointer"
          />
          <h2 className="text-lg font-semibold">Add New Item</h2>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <Link
          to="/add-from-photos"
          className="flex items-center gap-2 p-3 rounded-md bg-blue-100 hover:bg-blue-200 transition"
        >
          <img src={PhotoIcon} alt="From Photos" className="w-5 h-5" />
          <span>Add from Photos</span>
        </Link>

        <Link
          to="/slotion-library"
          className="p-3 rounded-md bg-gray-100 hover:bg-gray-200 transition text-center"
        >
          Browse Slotion Library
        </Link>
      </div>
    </div>
  );
};

export default AddNewItemPopup;
