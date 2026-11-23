"use client"

import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type CardProps = HTMLAttributes<HTMLDivElement>

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-black/40 shadow-sm backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold tracking-tight text-white", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 pt-0 text-white/90", className)} {...props} />
  )
}

export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center p-6 pt-0 border-t border-white/5", className)} {...props} />
  )
}
