import { HourglassIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProcessingPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <HourglassIcon className="w-24 h-24 mx-auto mb-6 text-blue-500 animate-pulse" />
      <h2 className="text-2xl font-bold mb-4">Processing Your Document</h2>
      <p className="text-gray-600 mb-8">
        Your agreement is being analyzed. This process may take a few minutes. You will be automatically redirected to
        the results page when the analysis is complete.
      </p>
      <div className="space-x-4">
        <Button onClick={() => onNavigate("upload")} variant="outline">
          Cancel and Upload Another Document
        </Button>
        <Button onClick={() => onNavigate("dashboard")} variant="outline">
          Return to Dashboard
        </Button>
      </div>
    </div>
  )
}

