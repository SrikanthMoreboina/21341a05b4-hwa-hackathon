"use client"

import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/Button"
import type { Product } from "@/lib/data"

interface AddToCartButtonProps {
  product: Product
  className?: string
}

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart()

  return (
    <Button
      disabled={!product.inStock}
      className={className}
      onClick={() => addItem(product)}
    >
      {product.inStock ? "Add to Cart" : "Unavailable"}
    </Button>
  )
}
