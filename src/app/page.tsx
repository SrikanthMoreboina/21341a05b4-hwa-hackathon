"use client"

import Link from "next/link"
import { ProductGrid } from "@/components/ProductGrid"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1548170272-f824e27062f2?w=1200&q=80')] bg-cover bg-center" />
        <div className="relative px-4 py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            Adventures start with <span className="text-yellow-400">Pawtrail</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Quality essentials for your trail companion — from durable collars to cozy beds,
            built for every mile together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-gray-200 transition-colors">
              Shop Now
            </Link>
            <Link href="/cart" className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-colors">
              View Cart
            </Link>
          </div>
        </div>
      </section>
      <ProductGrid />
    </div>
  )
}
