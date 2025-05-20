import './App.css';
import { Routes, Route } from 'react-router-dom';

/* Pages */
import Home from './pages/Home';
import Closet from './pages/Closet';
import Profile from './pages/Profile';
import CreateOutfit from './pages/CreateOutfit.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Login from './pages/Login.jsx';
import AddItem from './pages/AddItem.jsx';      
import SaveOutfit from './pages/SaveOutfit.jsx'; 

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closet" element={<Closet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-outfit" element={<CreateOutfit />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/save-outfit" element={<SaveOutfit />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
