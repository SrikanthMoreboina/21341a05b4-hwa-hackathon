import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { CartProvider } from "@/context/CartContext"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Pawtrail — Quality Essentials for Your Trail Companion",
  description: "Durable collars, cozy beds, tasty treats and more for every adventure with your pet.",
  openGraph: {
    title: "Pawtrail — Quality Essentials for Your Trail Companion",
    description: "Shop pet essentials built for the trail.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-black text-white`}>
      <body className="min-h-full flex flex-col bg-black text-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1 bg-black text-white">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
