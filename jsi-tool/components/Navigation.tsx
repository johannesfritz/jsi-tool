import type React from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { useLanguage } from "../contexts/LanguageContext"

const Navigation: React.FC = () => {
  const { isAuthenticated, logout } = useAuth()
  const { language, setLanguage } = useLanguage()

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Clairk
        </Link>
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/upload">Upload</Link>
              <Link to="/history">History</Link>
              <Link to="/settings">Settings</Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "fr" | "es")}
            className="bg-blue-500 text-white"
          >
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

