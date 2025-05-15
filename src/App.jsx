import './App.css';
import { Routes, Route } from 'react-router-dom';

/*Pages*/
import Home from './pages/Home';
import Closet from './pages/Closet';
import CreateOutfit from './pages/CreateOutfit.jsx';
import SaveOutfit from './pages/SaveOutfit.jsx';
import AddItem from './components/closet_components/addItem.jsx';


function App() {
  return (  
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Closet" element={<Closet />} />
          <Route path="/Create-Outfit" element={<CreateOutfit />} />
          <Route path="/add-item" element={<AddItem />} />
            <Route path="/save-outfit" element={<SaveOutfit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;