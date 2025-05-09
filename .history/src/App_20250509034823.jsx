import './App.css';
import Home from './pages/Home';
import Closet from './pages/Closet';
import CreateOutfit from './pages/CreateOutfit.jsx';
import { Routes, Route } from 'react-router-dom';
import FinalNav from './components/finalNav.jsx';

function App() {
  return (
    <div>
      <FinalNav /> {/* This ensures the navbar is always visible */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closet" element={<Closet />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
