import { Button } from "@/components/ui/button"

export function LandingPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Clairk</h1>
      <p className="text-xl mb-8">
        Streamline Your Legal Review – Instantly assess your national legislation against WTO e‑commerce commitments.
      </p>
      <div className="space-x-4">
        <Button onClick={() => onNavigate("register")}>Get Started</Button>
        <Button variant="outline" onClick={() => onNavigate("login")}>
          Login
        </Button>
      </div>
    </div>
  )
}

