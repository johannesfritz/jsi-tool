import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"
import { LanguageProvider } from "./contexts/LanguageContext"
import LandingPage from "./pages/LandingPage"
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import UploadPage from "./pages/UploadPage"
import ResultsPage from "./pages/ResultsPage"
import HistoryPage from "./pages/HistoryPage"
import SettingsPage from "./pages/SettingsPage"
import Navigation from "./components/Navigation"
import NotificationComponent from "./components/NotificationComponent"

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-100">
            <Navigation />
            <NotificationComponent />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/results/:analysisId" element={<ResultsPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </div>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  )
}

export default App

