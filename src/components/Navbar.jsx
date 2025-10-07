import { Link } from 'react-router-dom';
export default function Navbar(){
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">English Learning</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/levels">Levels</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  )
}
