"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const SettingsPage: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [notifications, setNotifications] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd make an API call here to update user settings
    console.log("Settings updated:", { name, email, language, notifications })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "fr" | "es")}
            className="w-full p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>
        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
              className="mr-2"
            />
            Receive email notifications
          </label>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default SettingsPage

