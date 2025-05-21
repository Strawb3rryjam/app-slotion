import ReactDOM from 'react-dom';

const BottomDrawerPortal = ({ children }) => {
  return ReactDOM.createPortal(children, document.body);
};

export default BottomDrawerPortal;
