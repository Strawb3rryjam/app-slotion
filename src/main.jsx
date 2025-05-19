import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import AddItem from "./components/closet_components/addItem.jsx"
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <App />
    </BrowserRouter> 
  </StrictMode>
)