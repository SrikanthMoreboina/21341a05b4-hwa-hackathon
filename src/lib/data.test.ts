import { describe, it, expect } from "vitest"
import { PRODUCTS, CATEGORIES } from "@/lib/data"

describe("product data", () => {
  it("has products", () => {
    expect(PRODUCTS.length).toBeGreaterThan(0)
  })

  it("each product has required fields", () => {
    for (const product of PRODUCTS) {
      expect(product.id).toBeDefined()
      expect(product.name).toBeDefined()
      expect(product.category).toBeDefined()
      expect(product.price).toBeGreaterThan(0)
      expect(product.image).toBeDefined()
      expect(product.images).toBeInstanceOf(Array)
      expect(product.images.length).toBeGreaterThan(0)
      expect(product.description).toBeDefined()
      expect(product.howToUse).toBeDefined()
    }
  })

  it("categories includes All", () => {
    expect(CATEGORIES).toContain("All")
  })
})
