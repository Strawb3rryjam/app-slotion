import './App.css';
import Home from './pages/Home';
import Closet from './pages/Closet';
import { Routes, Route } from 'react-router-dom';
import CreateOutfit from './pages/CreateOutfit.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (  
    <div>
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