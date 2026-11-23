import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { ProductCard } from "@/components/ProductCard"
import { CartProvider } from "@/context/CartContext"
import { PRODUCTS } from "@/lib/data"

describe("ProductCard", () => {
  it("renders product name and price", () => {
    render(
      <CartProvider>
        <ProductCard product={PRODUCTS[0]} />
      </CartProvider>
    )
    expect(screen.getByText(PRODUCTS[0].name)).toBeInTheDocument()
    expect(screen.getByText(`₹${PRODUCTS[0].price.toFixed(2)}`)).toBeInTheDocument()
  })

  it("shows out of stock when product is not available", () => {
    const outOfStock = PRODUCTS.find((p) => !p.inStock)
    if (outOfStock) {
      render(
        <CartProvider>
          <ProductCard product={outOfStock} />
        </CartProvider>
      )
      expect(screen.getByText("Out of Stock")).toBeInTheDocument()
    }
  })
})
