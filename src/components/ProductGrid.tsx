"use client"

import { useState } from "react"
import { CATEGORIES, PRODUCTS } from "@/lib/data"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

export function ProductGrid() {
  const [category, setCategory] = useState<string>("All")

  const filtered = category === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Featured Products</h2>
          <p className="text-white/60 text-sm">Quality essentials for your trail companion.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant="outline"
              size="sm"
              className={cn(cat === category && "bg-white text-black border-white")}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <p className="text-white/60">No products found in this category.</p>
        </div>
      )}
    </section>
  )
}

export default ProductGrid
