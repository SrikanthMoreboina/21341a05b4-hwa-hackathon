import { PRODUCTS } from "@/lib/data"
import { ImageCarousel } from "@/components/ImageCarousel"
import { Card } from "@/components/ui/Card"
import Link from "next/link"
import { AddToCartButton } from "@/components/AddToCartButton"

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-2xl font-bold mb-2">Product not found</h1>
        <Link
          href="/products"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <nav className="flex gap-2 mb-8 text-sm text-white/50">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white">Shop</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </nav>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <ImageCarousel images={product.images} />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold tracking-tight mb-2">{product.name}</h1>
              <div className="flex items-center gap-1 mb-1">
                <span className="text-xs text-yellow-400" aria-hidden="true">★</span>
                <span className="text-sm font-medium">{product.rating.toFixed(1)}</span>
                <span className="text-xs text-white/50 ml-1">({product.reviews})</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold">₹{product.price.toFixed(2)}</span>
              </div>
              {product.inStock ? (
                <p className="text-green-400 text-sm font-medium mt-1">In stock</p>
              ) : (
                <p className="text-red-400 text-sm font-medium mt-1">Out of stock</p>
              )}
            </div>
            <Card className="p-6">
              <h2 className="text-lg font-bold mb-4">Description</h2>
              <p className="text-white/80 leading-relaxed">{product.description}</p>
            </Card>
            <Card className="p-6 border-l-4 border-yellow-400">
              <h2 className="text-lg font-bold mb-3 text-yellow-300">How to Use</h2>
              <p className="text-white/80 leading-relaxed whitespace-pre-line">{product.howToUse}</p>
            </Card>
            <div className="flex flex-col sm:flex-row gap-3">
              <AddToCartButton product={product} className="flex-1" />
              <Link href="/cart" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/20 bg-transparent text-white font-medium hover:bg-white/10 transition-colors">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
