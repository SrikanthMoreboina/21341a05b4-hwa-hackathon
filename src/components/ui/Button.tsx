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
    primary: "bg-black text-white focus:ring-black hover:bg-gray-900",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-black dark:border-gray-600 dark:text-white dark:hover:bg-gray-800",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-black dark:text-gray-300 dark:hover:bg-gray-800",
    danger: "bg-red-600 text-white focus:ring-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800",
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
