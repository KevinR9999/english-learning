import { Book, Home, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Inicio", path: "/", icon: <Home size={20} /> },
    { name: "Niveles", path: "/levels", icon: <Book size={20} /> },
    { name: "Perfil", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-2xl font-bold tracking-wide">English Learning</h1>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-1 hover:text-yellow-300 transition ${
                location.pathname === link.path ? "text-yellow-300" : ""
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

