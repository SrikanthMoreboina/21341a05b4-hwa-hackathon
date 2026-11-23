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
          <FooterLink href="/">Home</FooterLink>
          <FooterLink href="/products">Shop</FooterLink>
          <FooterLink href="/cart">Cart</FooterLink>
        </nav>
        <p className="text-xs text-white/40">&copy; 2026 Pawtrail. All rights reserved.</p>
      </div>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/60 hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}
