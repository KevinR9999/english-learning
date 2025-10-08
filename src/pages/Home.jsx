import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center py-12">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">¡Bienvenido a English Learning! 🇬🇧</h1>
      <p className="text-gray-700 max-w-2xl mb-8">
        Mejora tu inglés de forma divertida e interactiva. Practica vocabulario, lectura y pronunciación mientras avanzas de nivel.
      </p>
      <Link
        to="/levels"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition shadow-md"
      >
        Comenzar ahora 🚀
      </Link>
    </div>
  );
}
