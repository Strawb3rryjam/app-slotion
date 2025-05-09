import './App.css';
import Home from './pages/Home';
import Closet from './pages/Closet';
import { Routes, Route } from 'react-router-dom';
import FinalNav from './components/finalNav.jsx';
import CreateOutfit from '.pages/CreateOutfit.jsx';

import CreateOutfit from './pages/CreateOutfit.jsx';


function App() {
  return (
    <div>
      <FinalNav /> {/* This ensures the navbar is always visible */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/create-outfit" element={<CreateOutfit />} /> {/* Add the CreateOutfit route */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
