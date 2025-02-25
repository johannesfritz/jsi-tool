"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, LogOut, History, User, Scale } from "lucide-react"

const getPageTitle = (currentPage: string) => {
  switch (currentPage) {
    case "landing":
    case "dashboard":
      return "JSI Needs Assessment Tool"
    case "history":
      return "Analysis History"
    case "results":
      return "Initial Assessment"
    case "upload":
      return "Insert New Document"
    default:
      return "JSI Needs Assessment Tool"
  }
}

interface HeaderProps {
  onNavigate: (page: string) => void
  currentPage: string
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isWaffleOpen, setIsWaffleOpen] = useState(false)

  const handleNavigate = (page: string) => {
    setIsWaffleOpen(false)
    onNavigate(page)
  }

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={() => handleNavigate("dashboard")} className="mr-4" aria-label="Go to Dashboard">
            <Scale className="h-8 w-8 text-navy-blue" />
          </button>
          <h1 className="text-2xl font-bold">{getPageTitle(currentPage)}</h1>
        </div>
        <div className="flex items-center space-x-4">
          {currentPage === "upload" ? (
            <Button onClick={() => handleNavigate("results")} variant="blue">
              Submit for Analysis
            </Button>
          ) : (
            <Button onClick={() => handleNavigate("upload")} variant="dark">
              Insert New Document
            </Button>
          )}
          <DropdownMenu open={isWaffleOpen} onOpenChange={setIsWaffleOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => handleNavigate("history")}>
                <History className="mr-2 h-4 w-4" />
                <span>History</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  setIsWaffleOpen(false)
                  alert("Opening account settings")
                }}
              >
                <User className="mr-2 h-4 w-4" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => {
                  setIsWaffleOpen(false)
                  alert("Logging out")
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

