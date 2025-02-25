import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4 max-w-md">
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button onClick={() => onNavigate("dashboard")}>Login</Button>
      </form>
      <p className="mt-4">
        Don't have an account?{" "}
        <a className="text-blue-500 cursor-pointer" onClick={() => onNavigate("register")}>
          Register here
        </a>
      </p>
    </div>
  )
}

