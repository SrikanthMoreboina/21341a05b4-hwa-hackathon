export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  images: string[]
  rating: number
  reviews: number
  inStock: boolean
  description: string
  howToUse: string
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Trail Bites Dog Treats",
    category: "Treats",
    price: 12.99,
    image: "https://picsum.photos/id/1015/800/800",
    images: [
      "https://picsum.photos/id/1015/800/800",
      "https://picsum.photos/id/1016/800/800",
      "https://picsum.photos/id/1017/800/800",
    ],
    rating: 4.9,
    reviews: 128,
    inStock: true,
    description: "Crunchy, nutritious bites made with real chicken and sweet potato. Perfect for rewarding good behavior on the trail.",
    howToUse: "Give 1–2 treats per 10 lbs of body weight daily. Break into smaller pieces for training. Always provide fresh water. Store in a cool, dry place.",
  },
  {
    id: "p2",
    name: "Paw Comfort Ortho Bed",
    category: "Beds",
    price: 64.5,
    image: "https://picsum.photos/id/1064/800/800",
    images: [
      "https://picsum.photos/id/1064/800/800",
      "https://picsum.photos/id/1065/800/800",
      "https://picsum.photos/id/1066/800/800",
    ],
    rating: 4.8,
    reviews: 86,
    inStock: true,
    description: "Orthopedic memory foam bed with a removable, machine-washable cover. Supports joints for older dogs and active pups alike.",
    howToUse: "Place on a flat surface in your pet's favorite resting spot. Remove the cover and machine wash cold as needed. Let foam air dry fully before replacing cover.",
  },
  {
    id: "p3",
    name: "Reflective Trail Collar",
    category: "Collars",
    price: 18.0,
    image: "https://picsum.photos/id/1050/800/800",
    images: [
      "https://picsum.photos/id/1050/800/800",
      "https://picsum.photos/id/1051/800/800",
      "https://picsum.photos/id/1052/800/800",
    ],
    rating: 4.7,
    reviews: 210,
    inStock: true,
    description: "Nylon collar with reflective stitching and a sturdy buckle. Keeps your companion visible during dawn and dusk hikes.",
    howToUse: "Measure your dog's neck and allow two fingers' width for comfort. Fasten the buckle snugly. Attach leash to the D-ring. Check fit regularly as your pet grows.",
  },
  {
    id: "p4",
    name: "Chew-Proof Rope Toy",
    category: "Toys",
    price: 9.99,
    image: "https://picsum.photos/id/1073/800/800",
    images: [
      "https://picsum.photos/id/1073/800/800",
      "https://picsum.photos/id/1074/800/800",
      "https://picsum.photos/id/1075/800/800",
    ],
    rating: 4.6,
    reviews: 154,
    inStock: true,
    description: "Durable braided cotton rope for tug-of-war and chewing. Helps clean teeth while your dog plays.",
    howToUse: "Supervise playtime. Inspect regularly for frayed strands and replace if damaged. Machine washable on gentle cycle.",
  },
  {
    id: "p5",
    name: "Portable Water Bowl",
    category: "Accessories",
    price: 14.25,
    image: "https://picsum.photos/id/1086/800/800",
    images: [
      "https://picsum.photos/id/1086/800/800",
      "https://picsum.photos/id/1087/800/800",
      "https://picsum.photos/id/1088/800/800",
    ],
    rating: 4.5,
    reviews: 97,
    inStock: true,
    description: "Collapsible silicone bowl that clips to your pack or belt. Fresh water anywhere the trail takes you.",
    howToUse: "Unfold and expand the bowl. Fill with water and let your pet drink. Rinse after use, collapse, and clip back to your gear with the carabiner.",
  },
  {
    id: "p6",
    name: "All-Weather Paw Wax",
    category: "Care",
    price: 11.5,
    image: "https://picsum.photos/id/1090/800/800",
    images: [
      "https://picsum.photos/id/1090/800/800",
      "https://picsum.photos/id/1091/800/800",
      "https://picsum.photos/id/1092/800/800",
    ],
    rating: 4.4,
    reviews: 63,
    inStock: false,
    description: "Protective wax that shields paws from hot pavement, ice, salt, and rough terrain. Non-toxic and safe if licked.",
    howToUse: "Clean and dry paws before application. Rub a thin layer onto paw pads before heading out. Reapply after long walks or exposure to water.",
  },
]

export const CATEGORIES = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))]
