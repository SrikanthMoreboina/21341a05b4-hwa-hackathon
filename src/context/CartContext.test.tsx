import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { CartProvider, useCart } from "@/context/CartContext"
import { PRODUCTS } from "@/lib/data"

const TestComponent = () => {
  const { items, addItem, removeItem, total, itemCount } = useCart()
  return (
    <div>
      <button onClick={() => addItem(PRODUCTS[0])}>Add</button>
      <button onClick={() => removeItem(PRODUCTS[0].id)}>Remove</button>
      <span data-testid="count">{itemCount}</span>
      <span data-testid="total">{total.toFixed(2)}</span>
      <span data-testid="items">{items.length}</span>
    </div>
  )
}

describe("CartContext", () => {
  it("adds and removes items", () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    )

    expect(screen.getByTestId("count")).toHaveTextContent("0")

    fireEvent.click(screen.getByText("Add"))
    expect(screen.getByTestId("count")).toHaveTextContent("1")
    expect(screen.getByTestId("items")).toHaveTextContent("1")

    fireEvent.click(screen.getByText("Remove"))
    expect(screen.getByTestId("count")).toHaveTextContent("0")
    expect(screen.getByTestId("items")).toHaveTextContent("0")
  })
})
