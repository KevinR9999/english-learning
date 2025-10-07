import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Levels from './pages/Levels';
import Profile from './pages/Profile';
import A1Reading from './pages/LevelA1/Reading';

export default function App(){
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/levels" element={<Levels />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/level/a1/reading" element={<A1Reading />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
