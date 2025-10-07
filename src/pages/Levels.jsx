import { Link } from 'react-router-dom';
export default function Levels(){
  const levels = ['A1','A2','B1','B2'];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      {levels.map(level=>(
        <Link key={level} to={`/level/${level.toLowerCase()}/reading`} className="bg-white shadow rounded-xl p-6 hover:bg-blue-100 transition">
          <h3 className="text-xl font-semibold">Level {level}</h3>
        </Link>
      ))}
    </div>
  )
}
