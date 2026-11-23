"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/Card"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const outOfStock = !product.inStock

  return (
    <Card className="group relative overflow-hidden">
      <div className="aspect-square relative overflow-hidden bg-white/5">
        {outOfStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold uppercase text-sm tracking-wider">Out of Stock</span>
          </div>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 45vw, (max-width: 1200px) 30vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority
        />
        <div className="absolute top-3 right-3 z-10">
          <button
            aria-label={`Add ${product.name} to cart`}
            className={cn(
              "p-2.5 rounded-full bg-white text-black shadow hover:bg-gray-200 transition-colors",
              outOfStock ? "opacity-50 pointer-events-none" : ""
            )}
            disabled={outOfStock}
            onClick={() => addItem(product)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("block", outOfStock ? "opacity-50" : "")}
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="text-base line-clamp-1">{product.name}</CardTitle>
          <span className="text-xs font-semibold text-white/50">{product.category}</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          <span className="text-xs text-yellow-400" aria-hidden="true">★</span>
          <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
          <span className="text-xs text-white/50">({product.reviews})</span>
        </div>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-lg font-bold">₹{product.price.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          size="sm"
          disabled={outOfStock}
          onClick={(e) => {
            e.stopPropagation()
            addItem(product)
          }}
        >
          {outOfStock ? "Unavailable" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
