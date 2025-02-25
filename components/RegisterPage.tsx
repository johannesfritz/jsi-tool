import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function RegisterPage({ onNavigate }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4 max-w-md">
        <Input placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Button onClick={() => onNavigate("dashboard")}>Register</Button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <a className="text-blue-500 cursor-pointer" onClick={() => onNavigate("login")}>
          Login here
        </a>
      </p>
    </div>
  )
}

