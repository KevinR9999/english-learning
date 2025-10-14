import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ReadingA1 from "./pages/LevelA1/Reading";
import Levels from "./pages/Levels";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-800">
        <Navbar onLogout={handleLogout} />
        <main className="flex-1 p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/levels/a1/reading" element={<ReadingA1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
