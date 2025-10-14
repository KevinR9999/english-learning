import { Book, Home, LogOut, Menu, User, X } from "lucide-react"; // 👈 Agregado LogOut
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onLogout }) { // 👈 Recibe la función de logout como prop
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Inicio", path: "/", icon: <Home size={20} /> },
    { name: "Niveles", path: "/levels", icon: <Book size={20} /> },
    { name: "Perfil", path: "/profile", icon: <User size={20} /> },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-5 py-3">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          English Learning
        </h1>

        {/* Botón hamburguesa visible solo en móviles */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de enlaces (horizontal en desktop, desplegable en mobile) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute sm:static top-full left-0 w-full sm:w-auto bg-blue-600 sm:bg-transparent sm:flex sm:gap-6 text-center sm:text-left transition-all`}
        >
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`flex justify-center sm:justify-start items-center gap-2 py-3 sm:py-0 hover:text-yellow-300 transition ${
                location.pathname === link.path ? "text-yellow-300" : ""
              }`}
            >
              {link.icon}
              <span className="text-base sm:text-sm">{link.name}</span>
            </Link>
          ))}

          {/* 👇 Botón de Cerrar sesión */}
          <button
            onClick={() => {
              setMenuOpen(false);
              if (onLogout) onLogout();
            }}
            className="flex justify-center sm:justify-start items-center gap-2 py-3 sm:py-0 text-white hover:text-red-300 transition w-full sm:w-auto"
          >
            <LogOut size={20} />
            <span className="text-base sm:text-sm">Cerrar sesión</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
