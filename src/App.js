import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Explore from "./pages/Explore"
import Profile from './pages/Profile';
import Gallery from './pages/Gallery';
import Activity from './pages/Activity';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/activities" element={<Activity />} />
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
