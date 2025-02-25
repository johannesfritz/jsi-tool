import type React from "react"
import { Link } from "react-router-dom"

const DashboardPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Welcome, User!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <p>Total Analyses: 5</p>
          <p>Completed Analyses: 3</p>
          <p>Pending Analyses: 2</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <p>Your last analysis is complete.</p>
          <Link to="/results/123" className="text-blue-500">
            View Results
          </Link>
        </div>
      </div>
      <div className="mt-8 space-x-4">
        <Link to="/upload" className="bg-blue-500 text-white px-4 py-2 rounded">
          New Analysis
        </Link>
        <Link to="/history" className="bg-gray-300 text-gray-800 px-4 py-2 rounded">
          Analysis History
        </Link>
      </div>
    </div>
  )
}

export default DashboardPage

