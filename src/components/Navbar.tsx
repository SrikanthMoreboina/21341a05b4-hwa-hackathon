"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { CartButton } from "@/components/CartButton"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/cart", label: "Cart" },
]

export function Navbar() {
  const { itemCount } = useCart()
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-full bg-white px-2 py-0.5 text-black font-bold tracking-tighter text-sm">
            PAWTRAIL
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md transition-colors",
                pathname === link.href
                  ? "bg-white/10 text-white"
                  : "hover:text-white"
              )}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <CartButton count={itemCount} />
        </div>
      </div>
    </header>
  )
}
