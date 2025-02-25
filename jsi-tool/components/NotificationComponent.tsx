"use client"

import type React from "react"
import { useState, useEffect } from "react"

const NotificationComponent: React.FC = () => {
  const [notification, setNotification] = useState<string | null>(null)

  useEffect(() => {
    // This is a mock-up. In a real application, you'd listen for actual notifications.
    const timer = setTimeout(() => {
      setNotification("Your analysis for 'National E-commerce Law Draft' is complete. Click here to view details.")
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!notification) return null

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
      {notification}
      <button onClick={() => setNotification(null)} className="ml-4 text-sm underline">
        Dismiss
      </button>
    </div>
  )
}

export default NotificationComponent

