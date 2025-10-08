export default function Profile() {
  const user = {
    name: "Kevin Ramirez",
    level: "A1 - Beginner",
    progress: 35,
    avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=kevin",
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center w-80">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-1">{user.name}</h2>
        <p className="text-gray-600 mb-4">{user.level}</p>
        <div className="bg-gray-200 rounded-full h-3 mb-4">
          <div
            className="bg-blue-600 h-3 rounded-full"
            style={{ width: `${user.progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-500">{user.progress}% completado</p>
      </div>
    </div>
  );
}
