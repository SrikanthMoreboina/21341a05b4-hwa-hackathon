export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  rating: number
  reviews: number
  inStock: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Trail Bites Dog Treats",
    category: "Treats",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1548170272-f824e27062f2?w=500&q=80",
    rating: 4.9,
    reviews: 128,
    inStock: true,
  },
  {
    id: "p2",
    name: "Paw Comfort Ortho Bed",
    category: "Beds",
    price: 64.5,
    image: "https://images.unsplash.com/photo-1585110396000-9ff1a3e4335d?w=500&q=80",
    rating: 4.8,
    reviews: 86,
    inStock: true,
  },
  {
    id: "p3",
    name: "Reflective Trail Collar",
    category: "Collars",
    price: 18.0,
    image: "https://images.unsplash.com/photo-1560845815-CD81052b5897?w=500&q=80",
    rating: 4.7,
    reviews: 210,
    inStock: true,
  },
  {
    id: "p4",
    name: "Chew-Proof Rope Toy",
    category: "Toys",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1552053739-92279c00bd62?w=500&q=80",
    rating: 4.6,
    reviews: 154,
    inStock: true,
  },
  {
    id: "p5",
    name: "Portable Water Bowl",
    category: "Accessories",
    price: 14.25,
    image: "https://images.unsplash.com/photo-1596417637313-a07b5ff39886?w=500&q=80",
    rating: 4.5,
    reviews: 97,
    inStock: true,
  },
  {
    id: "p6",
    name: "All-Weather Paw Wax",
    category: "Care",
    price: 11.5,
    image: "https://images.unsplash.com/photo-1603774573197-87d4d944a32e?w=500&q=80",
    rating: 4.4,
    reviews: 63,
    inStock: false,
  },
]

export const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))]
