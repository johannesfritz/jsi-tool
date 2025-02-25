"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, FileText, Printer, Eye, Copy, Check } from "lucide-react"

const analysisResults = [
  {
    id: 1,
    title: "Digital Economy Act 2023",
    date: "May 15, 2023",
    results: [
      {
        article: 5,
        name: "Electronic Authentication and Electronic Signatures",
        finding:
          "The document references electronic signatures but lacks specific provisions for their legal validity.",
        status: "Partial Compliance",
        reasoning:
          "While electronic signatures are mentioned in Section 12(3) of the Digital Economy Act 2023, the text does not explicitly state that they shall not be denied legal effect solely on the basis of being in electronic form, as required by Article 5.2 of the Agreement. The relevant passage states:\n\n'Section 12(3): Electronic signatures may be used for commercial transactions.'\n\nThis provision acknowledges the use of electronic signatures but falls short of guaranteeing their legal validity as stipulated in the JSI article.",
      },
      {
        article: 8,
        name: "Paperless Trading",
        finding: "The legislation fully supports paperless trading for customs procedures.",
        status: "Compliant",
        reasoning:
          "The document outlines a comprehensive system for accepting electronic customs documentation, aligning with Article 8.7 of the Agreement. Section 15(2) of the Digital Economy Act 2023 states:\n\n'Section 15(2): Customs authorities shall accept any required documentation for the import, export, or transit of goods submitted electronically, and such electronic submissions shall have the same legal standing as paper documents.'\n\nThis provision fully complies with the JSI article by ensuring the legal equivalence of electronic submissions in customs procedures.",
      },
      {
        article: 10,
        name: "Electronic Payments",
        finding: "The regulatory framework for electronic payments is incomplete.",
        status: "Gap Identified",
        reasoning:
          "The text lacks provisions for promoting interoperability between electronic payment systems and does not address the timely introduction of new payment products and services, as encouraged by Article 10.3 of the Agreement. While Section 18 of the Digital Economy Act 2023 covers electronic payments, it does not include specific measures to enhance interoperability or innovation:\n\n'Section 18(1): Electronic payment services are permitted and shall be regulated by the Central Bank.'\n\nThis general provision falls short of the detailed requirements outlined in the JSI article, particularly in terms of promoting innovation and interoperability in the electronic payments sector.",
      },
    ],
  },
  // Add more analysis results for other acts here
]

export function ResultsPage({ onNavigate, analysisId }) {
  const [analysis, setAnalysis] = useState(null)
  const [expandedArticle, setExpandedArticle] = useState(null)
  const [copiedArticle, setCopiedArticle] = useState(null)

  useEffect(() => {
    // In a real application, you would fetch the analysis data based on the analysisId
    // For this example, we'll just find it in our mock data
    const foundAnalysis = analysisResults.find((a) => a.id === analysisId)
    setAnalysis(foundAnalysis)
  }, [analysisId])

  const getStatusColor = (status) => {
    switch (status) {
      case "Compliant":
        return "bg-green-500"
      case "Partial Compliance":
        return "bg-yellow-500"
      case "Gap Identified":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const copyToClipboard = (text, articleId) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedArticle(articleId)
      setTimeout(() => setCopiedArticle(null), 2000)
    })
  }

  if (!analysis) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-gray-600 mb-4">
        This page presents the results of the legal analysis based on the uploaded document and the user's script.
      </p>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{analysis.title}</h3>
              <p className="text-sm text-gray-600">Analyzed on {analysis.date}</p>
            </div>
            <Button variant="outline" size="sm" onClick={() => alert("Viewing uploaded document")}>
              <Eye className="h-4 w-4 mr-2" />
              View Uploaded Document
            </Button>
          </div>
        </div>

        <div className="p-4">
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Overview</h3>
              <div className="flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Analysis PDF</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <FileText className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download Analysis XLSX</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Print Analysis Report</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {analysis.results.map((result) => (
                <button
                  key={result.article}
                  className="flex items-center space-x-2 px-3 py-1 rounded-full border hover:bg-white transition-colors"
                  onClick={() =>
                    document.getElementById(`article-${result.article}`).scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span className={`w-3 h-3 rounded-full ${getStatusColor(result.status)}`}></span>
                  <span>
                    Art {result.article}: {result.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <ScrollArea className="h-[600px] rounded-md">
            {analysis.results.map((result) => (
              <div
                key={result.article}
                id={`article-${result.article}`}
                className="bg-gray-100 p-6 rounded-lg mb-6 relative"
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2"
                        onClick={() =>
                          copyToClipboard(
                            `Article ${result.article}: ${result.name}\n\nStatus: ${result.status}\n\nFinding: ${result.finding}\n\nMachine Reasoning: ${result.reasoning}`,
                            result.article,
                          )
                        }
                      >
                        {copiedArticle === result.article ? (
                          <Check className="h-4 w-4" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{copiedArticle === result.article ? "Copied!" : "Copy to clipboard"}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Article {result.article}: {result.name}
                    </h3>
                    <span
                      className={`inline-block mt-2 px-3 py-1 rounded-full text-white font-medium ${getStatusColor(result.status)}`}
                    >
                      {result.status}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <h4 className="font-semibold mb-2">Finding</h4>
                  <p>{result.finding}</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Machine Reasoning</h4>
                  <p className="whitespace-pre-wrap">{result.reasoning}</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

