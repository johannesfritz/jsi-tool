import type React from "react"
import { Link } from "react-router-dom"

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Clairk</h1>
      <p className="text-xl mb-8">
        Streamline Your Legal Review – Instantly assess your national legislation against WTO e‑commerce commitments.
      </p>
      <div className="space-y-4">
        <Link to="/register" className="bg-blue-500 text-white px-6 py-2 rounded-md mr-4">
          Get Started
        </Link>
        <Link to="/login" className="text-blue-500 underline">
          Already have an account? Log in
        </Link>
      </div>
    </div>
  )
}

export default LandingPage

