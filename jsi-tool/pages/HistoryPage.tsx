import type React from "react"
import { Link } from "react-router-dom"

interface AnalysisEntry {
  id: string
  title: string
  date: string
  status: "Completed" | "In Progress"
}

const HistoryPage: React.FC = () => {
  // Mock data for demonstration
  const mockHistory: AnalysisEntry[] = [
    { id: "123", title: "National E-commerce Law Draft", date: "2023-05-15", status: "Completed" },
    { id: "124", title: "Digital Signature Regulation", date: "2023-05-10", status: "Completed" },
    { id: "125", title: "Data Protection Act", date: "2023-05-05", status: "In Progress" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analysis History</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Document Title</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockHistory.map((entry) => (
            <tr key={entry.id} className="border-t">
              <td className="px-4 py-2">{entry.title}</td>
              <td className="px-4 py-2">{entry.date}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    entry.status === "Completed" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                  }`}
                >
                  {entry.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <Link to={`/results/${entry.id}`} className="text-blue-500 hover:underline">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HistoryPage

