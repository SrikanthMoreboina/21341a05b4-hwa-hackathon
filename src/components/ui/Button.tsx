"use client"

import type { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "danger"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  asChild?: boolean
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    outline: "border border-white/30 bg-transparent text-white hover:bg-white/10 focus:ring-white",
    ghost: "bg-transparent text-white/70 hover:bg-white/10 focus:ring-white",
    danger: "bg-red-600 text-white focus:ring-red-600 hover:bg-red-700",
  }
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  }

  return (
    <button
      className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
