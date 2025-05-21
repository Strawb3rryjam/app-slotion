import './App.css';
import './index.css';
import { Routes, Route } from 'react-router-dom'; 

/* Pages */
import Home from './pages/Home';
import Closet from './pages/Closet';
import Profile from './pages/Profile';
import Tips from './pages/Tips';
import CreateOutfit from './pages/CreateOutfit.jsx';
import Onboarding from './pages/Onboarding.jsx';
import Login from './pages/Login.jsx';
import AddItem from './components/closet_components/addItem.jsx';
import AddNewItemPopup from './components/closet_components/addNewItem.jsx';
import SaveOutfit from './pages/SaveOutfit.jsx';
import SlotionLibrary from './components/closet_components/slotionLibrary.jsx';
import AddPhotos from './components/closet_components/addPhotos.jsx';
import AddItemForm from './components/closet_components/newItemForm.jsx';
import AddItemFormComplete from './components/closet_components/newItemFormComplete.jsx';
import Search from './pages/Search.jsx';
import CreatePost from './components/closet_components/createPost.jsx';
import ChooseOutfit from './components/closet_components/createPostChoose.jsx';
import PostPreview from './components/closet_components/createPostPreview.jsx';


function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />

          {/* Closet Page */}
          <Route path="/closet" element={<Closet />} />
          <Route path="/create-outfit" element={<CreateOutfit />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/add-item-form" element={<AddItemForm />} />
          <Route path="/add-new-item" element={<AddNewItemPopup />} />
          <Route path="/add-new-item-complete" element={<AddItemFormComplete />} />
          <Route path="/save-outfit" element={<SaveOutfit />} />
          <Route path="/slotion-library" element={<SlotionLibrary />} />
          <Route path="/add-photo" element={<AddPhotos />} />

          <Route path="/search" element={<Search />} />

          <Route path="/create-post" element={<CreatePost/>}/>
        <Route path="/choose-outfit" element={<ChooseOutfit />} />
        <Route path="/post-preview" element={<PostPreview />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
