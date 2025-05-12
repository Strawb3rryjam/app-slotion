import './App.css';
import Home from './pages/Home';
import Closet from './pages/Closet';
import { Routes, Route } from 'react-router-dom';
import NavBar from "../components/NavBar.jsx";
import CreateOutfit from './pages/CreateOutfit.jsx';


function App() {
  return (  
    <div>
      <NavBar></NavBar>
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
