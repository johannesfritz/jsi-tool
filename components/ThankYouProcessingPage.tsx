import { HourglassIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ThankYouProcessingPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <HourglassIcon className="w-24 h-24 mx-auto mb-6 text-blue-500 animate-pulse" />
      <h2 className="text-2xl font-bold mb-4">Thank You, Document Processing</h2>
      <p className="text-gray-600 mb-8">
        Your document has been successfully submitted and is now being processed. This may take a few minutes. You will
        be notified when the analysis is complete.
      </p>
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          You can wait here, or you can navigate away. The analysis will continue in the background.
        </p>
        <div className="space-x-4">
          <Button onClick={() => onNavigate("dashboard")} variant="outline">
            Return to Dashboard
          </Button>
          <Button onClick={() => onNavigate("history")} variant="outline">
            View Analysis History
          </Button>
        </div>
      </div>
    </div>
  )
}

