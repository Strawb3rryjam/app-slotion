import './App.css'
import Home from './pages/Home'
import Closet from './pages/Closet'
import {Routes, Route} from 'react-router-dom'
import FinalNav from './components/finalNav.jsx'


function App() {
  return (
    <div>
      <FinalNav />

      <main className = "main-content">
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/closet" element = {<Closet />} />

        </Routes>
      </main>
    </div>
    
  )
}

export default App
