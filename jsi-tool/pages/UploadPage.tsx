"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UploadPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [text, setText] = useState("")
  const [selectedCommitments, setSelectedCommitments] = useState<string[]>([])
  const navigate = useNavigate()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
  }

  const handleCommitmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const commitment = e.target.value
    setSelectedCommitments((prev) =>
      prev.includes(commitment) ? prev.filter((c) => c !== commitment) : [...prev, commitment],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd make an API call here to submit the file/text and selected commitments
    console.log("Submitted:", { file, text, selectedCommitments })
    navigate("/results/123") // Navigate to a mock result page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upload Document for Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Upload file:</label>
          <input type="file" onChange={handleFileChange} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block mb-2">Or paste content:</label>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="border p-2 w-full h-40"
            placeholder="Paste your document text here..."
          />
        </div>
        <div>
          <label className="block mb-2">Select commitments to analyze:</label>
          {[...Array(13)].map((_, i) => (
            <div key={i} className="flex items-center mb-2">
              <input
                type="checkbox"
                id={`commitment-${i + 1}`}
                value={`Commitment ${i + 1}`}
                onChange={handleCommitmentChange}
                className="mr-2"
              />
              <label htmlFor={`commitment-${i + 1}`}>Commitment {i + 1}</label>
            </div>
          ))}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit for Analysis
        </button>
      </form>
    </div>
  )
}

export default UploadPage

