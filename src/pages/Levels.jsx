import { Link } from "react-router-dom";

export default function Levels() {
  const levels = [
    { id: "A1", title: "Beginner", color: "from-green-400 to-lime-500" },
    { id: "A2", title: "Elementary", color: "from-blue-400 to-indigo-500" },
    { id: "B1", title: "Intermediate", color: "from-yellow-400 to-orange-500" },
    { id: "B2", title: "Upper Intermediate", color: "from-pink-400 to-red-500" },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-10 py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">
        Selecciona tu nivel
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {levels.map((level) => (
          <Link
            key={level.id}
            to={`/levels/${level.id.toLowerCase()}/reading`}
            className={`bg-gradient-to-br ${level.color} text-white p-6 sm:p-8 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300 text-center`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 drop-shadow-md">
              {level.id} – {level.title}
            </h3>
            <p className="text-sm sm:text-base">
              Haz clic para comenzar tus actividades 📘
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
