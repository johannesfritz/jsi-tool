"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pencil, Check, RotateCcw, FileEdit } from "lucide-react"
import { useSearchParams } from "next/navigation"

const originalArticles = [
  {
    id: 5,
    name: "Electronic Authentication and Electronic Signatures",
    questions: [
      "Does the legislation recognize electronic signatures as legally valid?",
      "Are there provisions for different types of electronic signatures (e.g., simple, advanced, qualified)?",
      "Does the law establish requirements for certification service providers?",
      "Is there a mechanism for cross-border recognition of electronic signatures?",
      "Are there specific security requirements for electronic authentication methods?",
    ],
  },
  {
    id: 8,
    name: "Paperless Trading",
    questions: [
      "Does the legislation allow for electronic submission of trade-related documents?",
      "Are there provisions for the legal recognition of electronic trade documents?",
      "Does the law address the interoperability of paperless trading systems?",
      "Are there specific security and authentication requirements for paperless trading?",
      "Does the legislation facilitate cross-border exchange of trade-related data?",
    ],
  },
  {
    id: 9,
    name: "Single Windows Data Exchange and System Interoperability",
    questions: [
      "Is there a legal framework for establishing a single window system?",
      "Are there provisions for data sharing between government agencies?",
      "Does the law address the interoperability of single window systems with other countries?",
      "Are there data protection and privacy safeguards for information shared through the single window?",
      "Does the legislation promote the use of international standards for data exchange?",
    ],
  },
  {
    id: 10,
    name: "Electronic Payments",
    questions: [
      "Does the legislation recognize and regulate electronic payment systems?",
      "Are there provisions for consumer protection in electronic payment transactions?",
      "Does the law address the security and authentication of electronic payment methods?",
      "Is there a framework for cross-border electronic payments?",
      "Does the legislation promote innovation and competition in electronic payment services?",
    ],
  },
  {
    id: 14,
    name: "Online Consumer Protection",
    questions: [
      "Does the legislation provide specific protections for consumers in online transactions?",
      "Are there requirements for clear and accurate information disclosure by online merchants?",
      "Does the law address dispute resolution mechanisms for online consumer complaints?",
      "Are there provisions for the protection of consumer data in online transactions?",
      "Does the legislation cover cross-border online consumer protection issues?",
    ],
  },
  {
    id: 15,
    name: "Unsolicited Commercial Electronic Messages",
    questions: [
      "Does the legislation regulate unsolicited commercial electronic messages (spam)?",
      "Are there opt-in or opt-out requirements for commercial electronic messages?",
      "Does the law specify penalties for violations of anti-spam regulations?",
      "Are there provisions for international cooperation in combating spam?",
      "Does the legislation address the use of automated systems for sending commercial messages?",
    ],
  },
  {
    id: 16,
    name: "Personal Data Protection",
    questions: [
      "Does the legislation provide a comprehensive framework for personal data protection?",
      "Are there specific requirements for obtaining consent for data collection and processing?",
      "Does the law address cross-border data transfers and their requirements?",
      "Are there provisions for data breach notification and handling?",
      "Does the legislation establish a data protection authority or similar regulatory body?",
    ],
  },
  {
    id: 18,
    name: "Transparency",
    questions: [
      "Does the legislation require publication of e-commerce related laws and regulations?",
      "Are there provisions for stakeholder consultation in developing e-commerce policies?",
      "Does the law mandate transparency in customs procedures related to e-commerce?",
      "Are there requirements for clear communication of terms and conditions in online transactions?",
      "Does the legislation promote transparency in digital platform operations?",
    ],
  },
  {
    id: 19,
    name: "Cooperation",
    questions: [
      "Does the legislation provide for international cooperation in e-commerce matters?",
      "Are there provisions for sharing best practices and experiences in e-commerce regulation?",
      "Does the law address cooperation in cybersecurity and combating cybercrime?",
      "Are there mechanisms for cooperation in consumer protection across borders?",
      "Does the legislation promote cooperation in developing interoperable e-commerce systems?",
    ],
  },
  {
    id: 20,
    name: "Development",
    questions: [
      "Does the legislation promote the development of e-commerce infrastructure?",
      "Are there provisions to support SMEs in adopting e-commerce technologies?",
      "Does the law address digital skills development and training programs?",
      "Are there measures to bridge the digital divide and promote inclusive e-commerce?",
      "Does the legislation encourage innovation and research in e-commerce technologies?",
    ],
  },
  {
    id: 21,
    name: "Telecommunications",
    questions: [
      "Does the legislation promote competition in the telecommunications sector?",
      "Are there provisions for ensuring affordable access to telecommunications services?",
      "Does the law address the allocation and management of spectrum for digital communications?",
      "Are there regulations for ensuring the quality and reliability of telecommunications services?",
      "Does the legislation promote the development of broadband infrastructure?",
    ],
  },
]

export function AnalyticalScriptsPage() {
  const [editingQuestion, setEditingQuestion] = useState<{ articleId: number; index: number } | null>(null)
  const [userEditedArticles, setUserEditedArticles] = useState(
    originalArticles.map((article) => ({
      ...article,
      userEdited: false,
      questions: article.questions.map((q) => ({ text: q, isEdited: false })),
    })),
  )
  const searchParams = useSearchParams()

  useEffect(() => {
    const focusArticle = searchParams.get("focusArticle")
    if (focusArticle) {
      const element = document.getElementById(`item-${focusArticle}`)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setTimeout(() => {
          const accordionTrigger = element.querySelector('[data-state="closed"]') as HTMLButtonElement | null
          if (accordionTrigger) {
            accordionTrigger.click()
          }
        }, 500)
      }
    }
  }, [searchParams])

  const handleEditQuestion = (articleId: number, index: number, newQuestion: string) => {
    setUserEditedArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId
          ? {
              ...article,
              questions: article.questions.map((q, i) => (i === index ? { text: newQuestion, isEdited: true } : q)),
              userEdited: true,
            }
          : article,
      ),
    )
  }

  const handleAcceptChanges = (articleId: number, index: number) => {
    setEditingQuestion(null)
  }

  const handleResetQuestion = (articleId: number, index: number) => {
    setUserEditedArticles((prevArticles) =>
      prevArticles.map((article) =>
        article.id === articleId
          ? {
              ...article,
              questions: article.questions.map((q, i) =>
                i === index
                  ? { text: originalArticles.find((a) => a.id === articleId)!.questions[i], isEdited: false }
                  : q,
              ),
              userEdited: article.questions.some((q, i) => i !== index && q.isEdited),
            }
          : article,
      ),
    )
    setEditingQuestion(null)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-gray-600 mb-6">This page includes all the scripts used for the legal analysis of this tool.</p>
      <Accordion type="single" collapsible className="w-full">
        {userEditedArticles.map((article) => (
          <AccordionItem value={`item-${article.id}`} key={article.id}>
            <AccordionTrigger>
              <div className="flex items-center">
                <span>
                  Article {article.id}: {article.name}
                </span>
                {article.userEdited && (
                  <FileEdit className="ml-2 h-4 w-4 text-blue-500" aria-label="User-edited script" />
                )}
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4">
                {article.questions.map((question, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    {editingQuestion?.articleId === article.id && editingQuestion?.index === index ? (
                      <>
                        <Input
                          value={question.text}
                          onChange={(e) => handleEditQuestion(article.id, index, e.target.value)}
                          autoFocus
                        />
                        <Button size="sm" variant="ghost" onClick={() => handleAcceptChanges(article.id, index)}>
                          <Check size={16} />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleResetQuestion(article.id, index)}>
                          <RotateCcw size={16} />
                        </Button>
                      </>
                    ) : (
                      <>
                        {question.isEdited ? (
                          <FileEdit className="h-4 w-4 text-blue-500 mr-2" aria-label="User-edited question" />
                        ) : (
                          <div className="w-4 mr-2" aria-hidden="true" /> // Placeholder for alignment
                        )}
                        <span>{question.text}</span>
                        <button
                          onClick={() => setEditingQuestion({ articleId: article.id, index })}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Pencil size={16} />
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

