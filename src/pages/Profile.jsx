export default function Profile() {
  const user = {
    name: "Kevin Ramirez",
    level: "A1 - Beginner",
    progress: 35,
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=kevin",
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center w-full max-w-xs sm:max-w-sm md:max-w-md">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg sm:text-xl font-bold mb-1">{user.name}</h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{user.level}</p>
        <div className="bg-gray-200 rounded-full h-2 sm:h-3 mb-4">
          <div
            className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          {user.progress}% completado
        </p>
      </div>
    </div>
  );
}
