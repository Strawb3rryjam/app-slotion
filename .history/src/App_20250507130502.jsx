import './App.css'
import Home from './pages/Home'
import Closet from './pages/Closet'
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
      <NavBar />
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
