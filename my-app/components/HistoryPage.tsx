import { Button } from "@/components/ui/button"

const analysisHistory = [
  {
    id: 1,
    title: "Digital Economy Act 2025",
    date: "May 15, 2025",
    results: { compliant: 5, partialCompliance: 3, gapIdentified: 5 },
  },
  {
    id: 2,
    title: "E-Commerce Regulation 2024",
    date: "April 3, 2025",
    results: { compliant: 8, partialCompliance: 4, gapIdentified: 1 },
  },
  {
    id: 3,
    title: "Data Protection Law 2023",
    date: "March 12, 2025",
    results: { compliant: 6, partialCompliance: 5, gapIdentified: 2 },
  },
  {
    id: 4,
    title: "Cybersecurity Act 2024",
    date: "February 28, 2025",
    results: { compliant: 7, partialCompliance: 3, gapIdentified: 3 },
  },
  {
    id: 5,
    title: "Electronic Transactions Law 2023",
    date: "January 15, 2025",
    results: { compliant: 9, partialCompliance: 2, gapIdentified: 2 },
  },
]

export function HistoryPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Analysis History</h2>
          <div className="space-y-6">
            {analysisHistory.map((analysis) => (
              <div key={analysis.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">{analysis.title}</h3>
                  <p className="text-sm text-gray-500">{analysis.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {analysis.results.compliant} Compliant
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {analysis.results.partialCompliance} Partial
                    </span>
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                      {analysis.results.gapIdentified} Gaps
                    </span>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => onNavigate("results")}>
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

