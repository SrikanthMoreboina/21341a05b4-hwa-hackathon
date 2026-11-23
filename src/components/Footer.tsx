"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-white px-2 py-0.5 text-black font-bold tracking-tighter text-sm">
            PAWTRAIL
          </span>
          <p className="text-sm text-white/60">Quality essentials for your trail companion.</p>
        </div>
        <nav className="flex gap-6">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/products">Shop</ButtonLink>
          <ButtonLink href="/cart">Cart</ButtonLink>
        </nav>
        <p className="text-xs text-white/40">&copy; 2026 Pawtrail. All rights reserved.</p>
      </div>
    </footer>
  )
}

function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white/80 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}
