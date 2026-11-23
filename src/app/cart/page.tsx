"use client"

import { useState } from "react"
import Link from "next/link"
import { CartDrawer } from "@/components/CartDrawer"
import { Button } from "@/components/ui/Button"
import { useCart } from "@/context/CartContext"

export default function CartPage() {
  const [drawerOpen, setDrawerOpen] = useState(true)
  const { items, total, itemCount } = useCart()

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Your Cart</h1>
            <Link href="/products" className="text-sm font-medium text-white/60 hover:text-white">
              Continue shopping
            </Link>
          </div>
          <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
          {items.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-white/60 text-lg">Your cart is empty</p>
              <Button asChild className="mt-6">
                <Link href="/products">Start shopping</Link>
              </Button>
            </div>
          ) : null}
          {items.length > 0 && (
            <div className="mt-8 flex justify-between items-center border-t border-white/10 pt-6">
              <div>
                <p className="text-white/50 text-sm">Total ({itemCount} items)</p>
                <p className="text-xl font-bold">₹{total.toFixed(2)}</p>
              </div>
              <Link href="/checkout">
                <Button className="w-auto">Checkout</Button>
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
