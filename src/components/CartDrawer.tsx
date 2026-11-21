"use client"

import { useCart } from "@/context/CartContext"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, removeItem, setQuantity, total, itemCount } = useCart()

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md bg-white shadow-xl dark:bg-gray-900 flex flex-col h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-gray-500">Your cart is empty</p>
              <Link href="/products" className="mt-4 text-sm font-medium text-black underline dark:text-white">
                Start shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(({ product, quantity }) => (
                <Card key={product.id} className="p-3 border-0 shadow-none bg-transparent dark:bg-transparent">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={60}
                      height={60}
                      className="rounded-lg object-cover"
                      priority
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold">{product.name}</h3>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                          aria-label={`Remove ${product.name}`}
                        >
                          Remove
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">₹{product.price.toFixed(2)} each</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => setQuantity(product.id, quantity - 1)}
                          className="p-1.5 rounded border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-medium">{quantity}</span>
                        <button
                          onClick={() => setQuantity(product.id, quantity + 1)}
                          className="p-1.5 rounded border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between mb-4">
            <span className="text-gray-600 dark:text-gray-400">Total ({itemCount} items)</span>
            <span className="font-bold">₹{total.toFixed(2)}</span>
          </div>
          <Button className="w-full" onClick={onClose}>
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
