import type React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

interface Commitment {
  title: string
  finding: string
  reasoning: string
  status: "Gap Identified" | "Compliant"
}

const ResultsPage: React.FC = () => {
  const { analysisId } = useParams<{ analysisId: string }>()
  const [showReasoning, setShowReasoning] = useState<Record<string, boolean>>({})

  // Mock data for demonstration
  const mockResults: Commitment[] = [
    {
      title: "Commitment 1: Electronic Transactions",
      finding: "The document references electronic contracts but does not specify digital authentication methods.",
      reasoning:
        "The absence of 'electronic signature' and related provisions suggests a gap in meeting the prescribed requirements.",
      status: "Gap Identified",
    },
    // Add more mock commitments here...
  ]

  const toggleReasoning = (title: string) => {
    setShowReasoning((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  const handleExport = (format: "pdf" | "xlsx") => {
    // In a real app, this would trigger the export process
    console.log(`Exporting as ${format}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Analysis Results</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Document: Sample Legislation</h2>
        <p>Submitted on: {new Date().toLocaleString()}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Summary</h3>
        <p>Overall compliance status: Partial Compliance</p>
      </div>
      <div className="space-y-6">
        {mockResults.map((commitment, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">{commitment.title}</h3>
            <p className="mb-2">{commitment.finding}</p>
            <button onClick={() => toggleReasoning(commitment.title)} className="text-blue-500 underline mb-2">
              {showReasoning[commitment.title] ? "Hide" : "Show"} Machine Reasoning
            </button>
            {showReasoning[commitment.title] && <p className="mb-2 text-sm text-gray-600">{commitment.reasoning}</p>}
            <p className={`font-semibold ${commitment.status === "Compliant" ? "text-green-500" : "text-red-500"}`}>
              Status: {commitment.status}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 space-x-4">
        <button onClick={() => handleExport("pdf")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Download PDF
        </button>
        <button onClick={() => handleExport("xlsx")} className="bg-green-500 text-white px-4 py-2 rounded">
          Download XLSX
        </button>
      </div>
    </div>
  )
}

export default ResultsPage

