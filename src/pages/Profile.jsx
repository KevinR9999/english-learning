export default function Profile({ user }) {
  const userData = {
    name: user?.name || "Usuario",
    level: user?.level || "A1 - Beginner",
    progress: user?.progress || Math.floor(Math.random() * 100),
    avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${user?.name || "default"}`,
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 text-center w-full max-w-xs sm:max-w-sm md:max-w-md">
        <img
          src={userData.avatar}
          alt="avatar"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-lg sm:text-xl font-bold mb-1">{userData.name}</h2>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{userData.level}</p>
        <div className="bg-gray-200 rounded-full h-2 sm:h-3 mb-4">
          <div
            className="bg-blue-600 h-2 sm:h-3 rounded-full transition-all duration-300"
            style={{ width: `${userData.progress}%` }}
          ></div>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          {userData.progress}% completado
        </p>
      </div>
    </div>
  );
}
