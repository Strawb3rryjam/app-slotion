import './App.css';
import Home from './pages/Home';
import Closet from './pages/Closet';
import CreateOutfit from './pages/CreateOutfit'; // Add the import for CreateOutfit
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
          <Route path="/create-outfit" element={<CreateOutfit />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
