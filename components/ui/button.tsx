import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "primary" | "dark" | "blue"
  size?: "default" | "sm" | "lg" | "icon"
  preventDefaultClick?: boolean
}

export function Button({
  variant = "default",
  size = "default",
  className = "",
  preventDefaultClick = false,
  ...props
}: ButtonProps) {
  let buttonClass =
    "rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  switch (variant) {
    case "outline":
      buttonClass += " border border-gray-200 bg-white text-gray-900 hover:bg-gray-100 focus:ring-gray-200"
      break
    case "ghost":
      buttonClass += " text-gray-900 hover:bg-gray-100 focus:ring-gray-200"
      break
    case "primary":
      buttonClass += " bg-navy-blue text-white hover:bg-navy-blue-600 focus:ring-navy-blue-500"
      break
    case "dark":
      buttonClass += " bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-600"
      break
    case "blue":
      buttonClass += " bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
      break
    default:
      buttonClass += " bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500"
      break
  }

  switch (size) {
    case "sm":
      buttonClass += " px-3 py-2 text-sm"
      break
    case "lg":
      buttonClass += " px-6 py-3 text-lg"
      break
    case "icon":
      buttonClass += " p-2"
      break
    default:
      buttonClass += " px-4 py-2"
      break
  }

  buttonClass += " " + className

  return (
    <button
      className={buttonClass}
      {...props}
      onClick={(e) => {
        if (preventDefaultClick) e.preventDefault()
        if (props.onClick) props.onClick(e)
      }}
    >
      {props.children}
    </button>
  )
}

