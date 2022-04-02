import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Explore from "./pages/Explore"
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/profile" element={<Profile />} />
            
          </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
