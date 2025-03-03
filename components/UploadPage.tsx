"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const articles = [
  { id: 5, name: "Electronic Authentication and Electronic Signatures" },
  { id: 8, name: "Paperless Trading" },
  { id: 9, name: "Single Windows Data Exchange and System Interoperability" },
  { id: 10, name: "Electronic Payments" },
  { id: 14, name: "Online Consumer Protection" },
  { id: 15, name: "Unsolicited Commercial Electronic Messages" },
  { id: 16, name: "Personal Data Protection" },
  { id: 18, name: "Transparency" },
  { id: 19, name: "Cooperation" },
  { id: 20, name: "Development" },
  { id: 21, name: "Telecommunications" },
]

export function UploadPage({ onNavigate }) {
  const [documentName, setDocumentName] = useState("")
  const [uploadMethod, setUploadMethod] = useState("file")
  const [selectedArticles, setSelectedArticles] = useState<number[]>([])

  const handleSelectAll = () => {
    if (selectedArticles.length === articles.length) {
      setSelectedArticles([])
    } else {
      setSelectedArticles(articles.map((article) => article.id))
    }
  }

  const handleArticleToggle = (articleId: number) => {
    setSelectedArticles((prev) =>
      prev.includes(articleId) ? prev.filter((id) => id !== articleId) : [...prev, articleId],
    )
  }

  const handleSubmit = () => {
    onNavigate("thankYouProcessing", { isNewSubmission: true })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-gray-600 mb-8">Upload your legislation or regulatory document to begin analysis.</p>

      <div className="mb-6">
        <Label htmlFor="document-name">Set Document Name</Label>
        <Input
          id="document-name"
          value={documentName}
          onChange={(e) => setDocumentName(e.target.value)}
          placeholder="Enter document name"
          className="mt-1"
        />
      </div>

      <div className="flex gap-8">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Upload Your Text</h3>
          <RadioGroup value={uploadMethod} onValueChange={setUploadMethod} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="file" id="file" />
              <Label htmlFor="file">Upload File</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paste" id="paste" />
              <Label htmlFor="paste">Paste Content</Label>
            </div>
          </RadioGroup>

          {uploadMethod === "file" ? (
            <Input type="file" className="mb-4" />
          ) : (
            <Textarea placeholder="Paste your content here..." className="mb-4" />
          )}
        </div>

        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Select JSI Articles to Analyze</h3>
            <Button onClick={handleSelectAll} variant="outline" size="sm">
              {selectedArticles.length === articles.length ? "Deselect All" : "Select All"}
            </Button>
          </div>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {articles.map((article) => (
              <div key={article.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id={`article-${article.id}`}
                    checked={selectedArticles.includes(article.id)}
                    onCheckedChange={() => handleArticleToggle(article.id)}
                  />
                  <label htmlFor={`article-${article.id}`} className="ml-2 text-sm">
                    Article {article.id}: {article.name}
                  </label>
                </div>
                <button
                  className="text-blue-500 hover:underline text-sm"
                  onClick={() => onNavigate("analyticalScripts", { focusArticle: article.id })}
                >
                  View Script
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Button onClick={handleSubmit} variant="primary" size="lg">
          Submit for Analysis
        </Button>
      </div>
    </div>
  )
}

