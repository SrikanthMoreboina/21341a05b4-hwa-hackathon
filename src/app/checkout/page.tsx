"use client"

import { useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardTitle } from "@/components/ui/Card"

export default function CheckoutPage() {
  const { items, total } = useCart()
  const [step, setStep] = useState<"details" | "payment" | "success">("details")
  const [form, setForm] = useState({ name: "", email: "", address: "" })

  if (step === "success") {
    return (
      <div className="flex flex-col flex-1 min-h-0">
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-2xl border border-white/20">
                ✓
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tight mb-4">Order Confirmed</h1>
            <p className="text-white/60 mb-8">
              Thank you for shopping with Pawtrail. Your order is on its way!
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
              Continue shopping
            </Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
            <span className="text-sm font-medium text-white/60">
              Step {step === "details" ? 1 : 2} of 2
            </span>
          </div>

          <Card className="p-8">
            <form onSubmit={(e) => {
              e.preventDefault()
              if (step === "details") setStep("payment")
              else setStep("success")
            }} className="space-y-6">
              {step === "details" && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Full name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                      placeholder="e.g. Alex Rivera"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                      placeholder="e.g. alex@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-white">Shipping address</label>
                    <textarea
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                      placeholder="e.g. 123 Trail Lane, Hillsdale"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Continue to Payment
                  </Button>
                </>
              )}
              {step === "payment" && (
                <>
                  <div className="border border-white/10 rounded-lg p-6">
                    <p className="text-sm font-medium mb-4 text-white">Card details</p>
                    <div className="space-y-4">
                      <input
                        required
                        maxLength={16}
                        className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                        placeholder="•••• •••• •••• ••••"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          required
                          maxLength={4}
                          className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                          placeholder="MM/YY"
                        />
                        <input
                          required
                          maxLength={3}
                          className="w-full px-4 py-2.5 rounded-lg border border-white/20 bg-white/5 focus:ring-2 focus:ring-white outline-none text-white placeholder-white/40"
                          placeholder="CVC"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-white/80">Order total</span>
                    <span className="font-bold">₹{total.toFixed(2)}</span>
                  </div>
                  <Button type="submit" className="w-full">
                    Place Order
                  </Button>
                </>
              )}
            </form>
          </Card>

          {items.length > 0 && (
            <Card className="mt-6 p-6">
              <CardTitle>Your Order</CardTitle>
              <CardContent className="space-y-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div>
                      <p className="text-sm font-medium">{product.name}</p>
                      <p className="text-xs text-white/50">Qty {quantity}</p>
                    </div>
                    <span className="text-sm font-medium">₹{(product.price * quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 border-t border-white/10 mt-2">
                  <span className="text-sm font-medium text-white/80">Total</span>
                  <span className="font-bold">₹{total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          )}

          <p className="mt-6 text-xs text-white/40 text-center">
            This is a demo checkout. No real payment is processed.
          </p>
        </div>
      </section>
    </div>
  )
}
