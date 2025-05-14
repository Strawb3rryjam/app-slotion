import './App.css';
import { Routes, Route } from 'react-router-dom';

/*Pages*/
import Home from './pages/Home';
import Closet from './pages/Closet';
import CreateOutfit from './pages/CreateOutfit.jsx';



function App() {
  return (  
    <div className="app-container">
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