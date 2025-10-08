import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-blue-700 leading-tight">
        ¡Bienvenido a English Learning! 🇬🇧
      </h1>
      
      <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        Mejora tu inglés de forma divertida e interactiva. Practica vocabulario, lectura y pronunciación mientras avanzas de nivel.
      </p>

      <Link
        to="/levels"
        className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition shadow-md hover:scale-105 active:scale-95"
      >
        Comenzar ahora 🚀
      </Link>
    </div>
  );
}

