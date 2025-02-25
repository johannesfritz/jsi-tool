"use client"

import { useState } from "react"
import { DashboardPage } from "../components/DashboardPage"
import { UploadPage } from "../components/UploadPage"
import { ResultsPage } from "../components/ResultsPage"
import { HistoryPage } from "../components/HistoryPage"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ThankYouProcessingPage } from "../components/ThankYouProcessingPage"
import { AnalyticalScriptsPage } from "../components/AnalyticalScriptsPage"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [currentAnalysisId, setCurrentAnalysisId] = useState(null)

  const handleNavigation = (page, params = {}) => {
    setCurrentPage(page)
    if (params.analysisId) {
      setCurrentAnalysisId(params.analysisId)
    }
    if (page === "thankYouProcessing" && params.isNewSubmission) {
      // Simulate processing time
      setTimeout(() => {
        setCurrentPage("results")
      }, 5000) // 5 seconds delay
    }
    if (page === "analyticalScripts" && params.focusArticle) {
      // Add the focusArticle to the URL as a query parameter
      window.history.pushState({}, "", `?focusArticle=${params.focusArticle}`)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage onNavigate={handleNavigation} />
      case "upload":
        return <UploadPage onNavigate={handleNavigation} />
      case "thankYouProcessing":
        return <ThankYouProcessingPage onNavigate={handleNavigation} />
      case "results":
        return <ResultsPage onNavigate={handleNavigation} analysisId={currentAnalysisId} />
      case "history":
        return <HistoryPage onNavigate={handleNavigation} />
      case "analyticalScripts":
        return <AnalyticalScriptsPage />
      default:
        return <DashboardPage onNavigate={handleNavigation} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  )
}

