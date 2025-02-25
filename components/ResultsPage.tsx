"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, FileText, Printer, Eye, Copy, Check } from "lucide-react"

const analysisResults = [
  {
    id: 1,
    title: "Digital Economy Act 2025",
    date: "May 15, 2025",
    results: [
      {
        article: 5,
        name: "Electronic Authentication and Electronic Signatures",
        finding:
          "The document partially addresses electronic signatures but lacks comprehensive provisions for their legal validity and cross-border recognition.",
        status: "Partial Compliance",
        reasoning: [
          {
            question: "Does the legislation recognize electronic signatures as legally valid?",
            answer:
              "The Digital Economy Act 2025 partially recognizes electronic signatures. Section 12(3) states: 'Electronic signatures may be used for commercial transactions.' However, this falls short of explicitly stating that electronic signatures shall not be denied legal effect solely on the basis of being in electronic form, as required by Article 5.2 of the Agreement.",
          },
          {
            question:
              "Are there provisions for different types of electronic signatures (e.g., simple, advanced, qualified)?",
            answer:
              "The Act does not differentiate between types of electronic signatures. Section 12(4) merely states: 'The Minister may prescribe regulations for different types of electronic signatures.' This lacks the specificity required to fully comply with international best practices.",
          },
          {
            question: "Does the law establish requirements for certification service providers?",
            answer:
              "The Digital Economy Act 2025 does not establish specific requirements for certification service providers. Section 13 briefly mentions: 'Certification service providers shall be registered with the appropriate authority.' However, it does not detail the requirements or standards these providers must meet.",
          },
          {
            question: "Is there a mechanism for cross-border recognition of electronic signatures?",
            answer:
              "The Act does not address cross-border recognition of electronic signatures. This is a significant omission, as Article 5.3 of the Agreement encourages parties to work towards the mutual recognition of electronic authentication and electronic signatures.",
          },
          {
            question: "Are there specific security requirements for electronic authentication methods?",
            answer:
              "The Digital Economy Act 2025 lacks detailed security requirements for electronic authentication methods. Section 14 broadly states: 'Electronic authentication methods shall be secure and reliable.' However, it does not provide specific standards or guidelines for ensuring this security and reliability.",
          },
        ],
      },
      {
        article: 8,
        name: "Paperless Trading",
        finding: "The legislation fully supports paperless trading for customs procedures.",
        status: "Compliant",
        reasoning: [
          {
            question: "Does the legislation allow for electronic submission of trade-related documents?",
            answer:
              "Yes, the Digital Economy Act 2025 explicitly allows for electronic submission of trade-related documents. Section 15(2) states: 'Customs authorities shall accept any required documentation for the import, export, or transit of goods submitted electronically.' This provision fully complies with Article 8.2 of the Agreement.",
          },
          {
            question: "Are there provisions for the legal recognition of electronic trade documents?",
            answer:
              "The Act provides for legal recognition of electronic trade documents. Section 15(3) specifies: 'Electronic trade documents shall have the same legal standing as paper documents.' This aligns with the requirements of Article 8.3 of the Agreement.",
          },
          {
            question: "Does the law address the interoperability of paperless trading systems?",
            answer:
              "The Digital Economy Act 2025 addresses interoperability in Section 16: 'The national single window system shall be designed to be interoperable with international trade systems.' This provision supports the objectives of Article 8.5 of the Agreement.",
          },
          {
            question: "Are there specific security and authentication requirements for paperless trading?",
            answer:
              "Security and authentication requirements are outlined in Section 17 of the Act: 'All electronic trade transactions shall use secure authentication methods as prescribed by the Minister.' While this provides a framework, more detailed regulations may be needed to fully implement this provision.",
          },
          {
            question: "Does the legislation facilitate cross-border exchange of trade-related data?",
            answer:
              "The Act facilitates cross-border exchange of trade-related data in Section 18: 'The customs authority is empowered to exchange trade-related data with foreign customs authorities, subject to data protection safeguards.' This aligns with the cooperation aspects of Article 8 in the Agreement.",
          },
        ],
      },
      {
        article: 10,
        name: "Electronic Payments",
        finding: "The regulatory framework for electronic payments is incomplete.",
        status: "Gap Identified",
        reasoning: [
          {
            question: "Does the legislation recognize and regulate electronic payment systems?",
            answer:
              "The Digital Economy Act 2025 recognizes electronic payment systems but lacks comprehensive regulation. Section 20(1) states: 'Electronic payment services are permitted and shall be regulated by the Central Bank.' However, it does not provide detailed guidelines or standards for these systems.",
          },
          {
            question: "Are there provisions for consumer protection in electronic payment transactions?",
            answer:
              "The Act has limited provisions for consumer protection in electronic payments. Section 20(3) briefly mentions: 'The Central Bank shall establish guidelines for consumer protection in electronic payments.' This falls short of the comprehensive consumer protection measures encouraged by Article 10.2 of the Agreement.",
          },
          {
            question: "Does the law address the security and authentication of electronic payment methods?",
            answer:
              "Security and authentication are inadequately addressed. Section 21 states: 'Electronic payment providers must implement appropriate security measures.' However, it does not specify what constitutes 'appropriate' measures, leaving a significant gap in the regulatory framework.",
          },
          {
            question: "Is there a framework for cross-border electronic payments?",
            answer:
              "The Digital Economy Act 2025 does not adequately address cross-border electronic payments. This omission is a major gap, as it fails to align with Article 10.4 of the Agreement, which encourages the development of cross-border electronic payment capabilities.",
          },
          {
            question: "Does the legislation promote innovation and competition in electronic payment services?",
            answer:
              "The Act does not explicitly promote innovation and competition in electronic payment services. Section 22 briefly states: 'The Central Bank may issue licenses to new electronic payment service providers.' However, this falls short of actively encouraging innovation and competition as recommended in Article 10.3 of the Agreement.",
          },
        ],
      },
    ],
  },
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
                            `Article ${result.article}: ${result.name}

Status: ${result.status}

Finding: ${result.finding}

Machine Reasoning: ${result.reasoning
                              .map(
                                (r) => `
${r.question}
${r.answer}`,
                              )
                              .join("\n")}`,
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
                      className={`inline-block mt-2 px-3 py-1 rounded-full text-white font-medium ${getStatusColor(
                        result.status,
                      )}`}
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
                  {result.reasoning.map((r, index) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <h5 className="font-bold text-sm text-gray-800 mb-1">{r.question}</h5>
                      <p className="text-sm text-gray-600">{r.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

