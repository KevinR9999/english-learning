import { useEffect, useState } from "react";
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

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-indigo-100 text-gray-800">
        <Navbar user={user} onLogout={handleLogout} />
        <main className="flex-1 p-6 max-w-6xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/levels/a1/reading" element={<ReadingA1 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
