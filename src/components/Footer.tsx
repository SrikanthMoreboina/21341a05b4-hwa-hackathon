import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-4 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-black px-2 py-0.5 text-white font-bold tracking-tighter text-sm">
            PAWTRAIL
          </span>
          <p className="text-sm text-gray-600 dark:text-gray-400">Quality essentials for your trail companion.</p>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Home
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Shop
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            Cart
          </Link>
        </nav>
        <p className="text-xs text-gray-500 dark:text-gray-500">&copy; 2026 Pawtrail. All rights reserved.</p>
      </div>
    </footer>
  )
}
