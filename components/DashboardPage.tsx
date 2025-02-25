import { Button } from "@/components/ui/button"

const recentAnalyses = [
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
]

export function DashboardPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Welcome, Needs Assessor!</h2>
        <p className="text-gray-600 mb-4">
          The JSI Needs Assessment Tool is designed to help developing country governments quickly and accurately gauge
          to what extent their domestic laws and regulations align with the "shall" commitments contained in the WTO
          Agreement on Electronic Commerce. This tool automates an otherwise cumbersome legal review process, offering
          an immediate "first cut" analysis that identifies gaps or inconsistencies in national legislation relative to
          each of the 13 prescribed commitments.
        </p>
        <p className="text-gray-600">
          By uploading your national legislation, guidance, or regulatory text, you can receive a detailed analysis
          within minutes, highlighting areas of compliance as well as any gaps or inconsistencies. This tool aims to
          streamline your legal review process and help pinpoint areas that may require further expert review.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Recent Analyses</h3>
          <Button variant="outline" onClick={() => onNavigate("history")}>
            View Full History
          </Button>
        </div>
        <div className="space-y-4">
          {recentAnalyses.map((analysis) => (
            <div key={analysis.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <button
                  className="font-semibold text-left hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => onNavigate("results", { analysisId: analysis.id })}
                >
                  {analysis.title}
                </button>
                <p className="text-sm text-gray-500">{analysis.date}</p>
              </div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

